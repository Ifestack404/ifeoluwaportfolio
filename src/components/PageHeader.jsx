import { Link } from 'react-router-dom'

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="page-header">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{eyebrow}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-header__desc">{description}</p>}
      </div>
    </header>
  )
}
