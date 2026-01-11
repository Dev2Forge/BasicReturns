import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = ({ t }) => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-brand">
        <Logo />
        <div className="footer-info">
          <p className="footer-title">BasicReturns</p>
          <p className="footer-subtitle">Consistent return objects for Python</p>
        </div>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        <div className="footer-section">
          <h4>Navigation</h4>
          <Link to="/">{t.nav.home}</Link>
          <Link to="/about">{t.nav.about}</Link>
          <Link to="/docs">{t.nav.docs}</Link>
          <Link to="/playground">{t.nav.playground}</Link>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <a href="https://pypi.org/project/BasicReturns/" target="_blank" rel="noreferrer">
            PyPI Package
          </a>
          <a href="https://github.com/Dev2Forge/BasicReturns" target="_blank" rel="noreferrer">
            GitHub Repository
          </a>
          <a href="https://docs.pydantic.dev/" target="_blank" rel="noreferrer">
            Pydantic Docs
          </a>
        </div>
      </nav>
    </div>
    <div className="footer-bottom">
      <p>Built with Pydantic. MIT License.</p>
    </div>
  </footer>
)

export default Footer
