import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <main className="not-found section">
      <div className="container not-found__inner">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
