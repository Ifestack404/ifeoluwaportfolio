export function isValidWebsiteUrl(url) {
  if (!url || typeof url !== 'string') return false
  const trimmed = url.trim()
  return /^https?:\/\/.+\..+/i.test(trimmed)
}

export function formatWebsiteDomain(url) {
  try {
    return new URL(url.trim()).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}
