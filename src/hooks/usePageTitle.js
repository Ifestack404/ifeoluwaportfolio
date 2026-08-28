import { useEffect } from 'react'

export default function usePageTitle(meta) {
  useEffect(() => {
    document.title = meta.title
    const description = document.querySelector('meta[name="description"]')
    if (description && meta.description) {
      description.setAttribute('content', meta.description)
    }
  }, [meta.title, meta.description])
}
