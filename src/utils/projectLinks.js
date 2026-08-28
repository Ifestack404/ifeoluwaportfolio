export function getProjectUrl(project) {
  return project.websiteUrl || project.liveUrl || ''
}

function isPlaceholderUrl(url) {
  return /your-.*-here|your-(second|third)-website|example\.com|placeholder/i.test(url)
}

export function hasLiveWebsite(project) {
  const url = getProjectUrl(project)
  if (!url || url === '#' || !/^https?:\/\//i.test(url)) return false
  if (isPlaceholderUrl(url)) return false
  return true
}

export function formatDomain(url) {
  if (!hasLiveWebsite({ websiteUrl: url, liveUrl: url })) return null
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return null
  }
}
