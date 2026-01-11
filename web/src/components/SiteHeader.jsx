import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import Logo from './Logo'

const SiteHeader = ({ t, languages, language, onLanguageChange, theme, onThemeToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <Logo />
          <div className="brand-text">
            <span className="brand-name">BasicReturns</span>
            <span className="brand-tagline">Pydantic · Python · Typed Returns</span>
          </div>
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        <div className={`nav-container ${menuOpen ? 'open' : ''}`}>
          <nav className="main-nav" aria-label="Primary navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              {t.nav.home}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              {t.nav.about}
            </NavLink>
            <NavLink
              to="/docs"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              {t.nav.docs}
            </NavLink>
            <NavLink
              to="/playground"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              {t.nav.playground}
            </NavLink>
          </nav>

          <div className="nav-actions">
            <select
              className="lang-select"
              value={language}
              onChange={(e) => {
                onLanguageChange(e.target.value)
                closeMenu()
              }}
              aria-label="Language selector"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.label}
                </option>
              ))}
            </select>
            <button className="theme-toggle" onClick={onThemeToggle} aria-label="Toggle theme">
              <span className="theme-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
