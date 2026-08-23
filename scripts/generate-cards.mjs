// Renders the language card as SVG files committed to this repository.
//
// The old card came from github-readme-stats.vercel.app, which answers 503:
// the shared instance is permanently over its GitHub API rate limit. Rendering
// here means the image is served by GitHub from this repo, so it cannot go
// down because of somebody else's traffic.
//
// Two files are written, light and dark, and the README picks between them
// with <picture media="(prefers-color-scheme: dark)">.
import { mkdirSync, writeFileSync } from 'node:fs'

const USER = process.env.GH_USER ?? 'xavierallem'
const TOKEN = process.env.GITHUB_TOKEN
const OUT = 'assets'

// Byte counts reward whichever repository holds the most code, not the work
// you want read. A decade of embedded coursework outweighs recent AI work by
// volume, so the card counts repositories created from SINCE_YEAR onward. The
// filter is stated on the card rather than applied silently.
const SINCE_YEAR = Number(process.env.SINCE_YEAR ?? 0)
const EXCLUDE_REPOS = new Set(
  (process.env.EXCLUDE_REPOS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
)
const EXCLUDE_LANGS = new Set(['HTML', 'CSS', 'Makefile', 'CMake', 'Dockerfile', 'Batchfile'])
const TOP_N = Number(process.env.TOP_N ?? 6)

const THEMES = {
  dark: {
    bg: '#08090c',
    panel: '#12141a',
    line: '#272b35',
    text: '#e8eaed',
    muted: '#9aa3af',
    subtle: '#828a98',
    accent: '#38bdf8',
    track: '#1a1d25',
  },
  light: {
    bg: '#ffffff',
    panel: '#f6f9fc',
    line: '#dae2ec',
    text: '#0f172a',
    muted: '#475569',
    subtle: '#5a6880',
    accent: '#0369a1',
    track: '#e7eef6',
  },
}

const headers = {
  Accept: 'application/vnd.github+json',
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
}

async function json(url) {
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`)
  return res.json()
}

const escape = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export function renderCard({ rows, repoCount, scope, theme, updated }) {
  const t = THEMES[theme]
  const W = 480
  const PAD = 24
  const ROW_H = 30
  const HEAD = 74
  const FOOT = 34
  const H = HEAD + rows.length * ROW_H + FOOT
  const barX = 150
  const barW = W - barX - PAD - 52
  const mono = "ui-monospace,'SF Mono',SFMono-Regular,Menlo,Consolas,monospace"

  const bars = rows
    .map(({ lang, pct }, i) => {
      const y = HEAD + i * ROW_H
      const w = Math.max(2, (pct / 100) * barW)
      return `
    <text x="${PAD}" y="${y + 4}" fill="${t.muted}" font-family="${mono}" font-size="12">${escape(lang)}</text>
    <rect x="${barX}" y="${y - 8}" width="${barW}" height="10" rx="5" fill="${t.track}"/>
    <rect x="${barX}" y="${y - 8}" width="${w}" height="10" rx="5" fill="${t.accent}">
      <animate attributeName="width" from="0" to="${w}" dur="0.8s" begin="${i * 0.09}s" fill="freeze"/>
    </rect>
    <text x="${W - PAD}" y="${y + 4}" fill="${t.text}" font-family="${mono}" font-size="12" text-anchor="end">${pct.toFixed(1)}%</text>`
    })
    .join('')

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Language breakdown across ${repoCount} public repositories">
  <title>Language breakdown across ${repoCount} public repositories</title>
  <rect width="${W}" height="${H}" rx="10" fill="${t.panel}" stroke="${t.line}"/>
  <text x="${PAD}" y="32" fill="${t.text}" font-family="${mono}" font-size="13" letter-spacing="1.6">LANGUAGES</text>
  <text x="${W - PAD}" y="32" fill="${t.subtle}" font-family="${mono}" font-size="11" text-anchor="end">${escape(scope)}</text>
  <line x1="${PAD}" y1="48" x2="${W - PAD}" y2="48" stroke="${t.line}"/>
  ${bars}
  <text x="${PAD}" y="${H - 14}" fill="${t.subtle}" font-family="${mono}" font-size="10">Updated ${updated} · generated in CI, not by a third party</text>
</svg>
`
}

// Skip the network when imported for tests or a local preview.
if (!process.env.CARDS_DRY_RUN) {
  const repos = (
    await json(`https://api.github.com/users/${USER}/repos?per_page=100&type=owner`)
  ).filter(
    (r) =>
      !r.fork &&
      !r.archived &&
      !EXCLUDE_REPOS.has(r.name) &&
      new Date(r.created_at).getUTCFullYear() >= SINCE_YEAR,
  )

  const stars = repos.reduce((n, r) => n + (r.stargazers_count ?? 0), 0)
  const scope = SINCE_YEAR
    ? `${repos.length} repos since ${SINCE_YEAR} · ${stars} stars`
    : `${repos.length} repos · ${stars} stars`

  const totals = new Map()
  for (const repo of repos) {
    for (const [lang, bytes] of Object.entries(await json(repo.languages_url))) {
      if (EXCLUDE_LANGS.has(lang)) continue
      totals.set(lang, (totals.get(lang) ?? 0) + bytes)
    }
  }

  const ranked = [...totals].sort((a, b) => b[1] - a[1]).slice(0, TOP_N)
  const sum = ranked.reduce((acc, [, bytes]) => acc + bytes, 0)
  const rows = ranked.map(([lang, bytes]) => ({ lang, pct: (bytes / sum) * 100 }))
  const updated = new Date().toISOString().slice(0, 10)

  mkdirSync(OUT, { recursive: true })
  for (const theme of ['dark', 'light']) {
    writeFileSync(
      `${OUT}/languages-${theme}.svg`,
      renderCard({ rows, repoCount: repos.length, scope, theme, updated }),
    )
  }
  console.log(`wrote ${OUT}/languages-{dark,light}.svg from ${repos.length} repositories`)
}
