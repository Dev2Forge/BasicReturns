const AboutSection = ({ t }) => (
  <section className="section-grid" id="about">
    <div className="card glass">
      <p className="eyebrow">{t.aboutTitle}</p>
      <h2>{t.aboutBody}</h2>
      <p className="muted">{t.originBody}</p>
    </div>
    <div className="card glass">
      <p className="eyebrow">{t.originTitle}</p>
      <h3>{t.useTitle}</h3>
      <ul className="feature-list">
        {t.useCases?.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <p className="muted">{t.docsLead}</p>
    </div>
  </section>
)

export default AboutSection
