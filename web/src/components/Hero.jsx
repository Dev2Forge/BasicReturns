import { Link } from 'react-router-dom'
import Pill from './Pill'
import Logo from './Logo'

const Hero = ({ t }) => (
  <section className="hero" id="home">
    <div className="hero-top">
      <div className="brand">
        <Logo />
        <div>
          <p className="eyebrow">BasicReturns</p>
          <strong className="brandline">ok / error / data / msg</strong>
        </div>
      </div>
      <div className="pill-row">
        {t.badges?.map((badge) => (
          <Pill key={badge}>{badge}</Pill>
        ))}
      </div>
    </div>

    <div className="hero-content">
      <div>
        <h1>{t.heroTitle}</h1>
        <p className="lead">{t.heroSubtitle}</p>
        <div className="actions">
          <Link to="/docs" className="btn primary">
            {t.primaryAction}
          </Link>
          <Link to="/playground" className="btn ghost">
            {t.secondaryAction}
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/about">{t.nav.about}</Link>
          <Link to="/docs">{t.nav.docs}</Link>
          <Link to="/playground">{t.nav.playground}</Link>
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-card__title">{t.useTitle}</div>
        <ul>
          {t.useCases?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="hero-card__footer">{t.howTitle}</div>
        <p className="muted">{t.howBody}</p>
      </div>
    </div>
  </section>
)

export default Hero
