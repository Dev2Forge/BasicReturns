const InfoGridSection = ({ t }) => (
  <section className="section triple">
    <div className="card soft" id="installation">
      <p className="eyebrow">{t.installTitle}</p>
      <h3>{t.installSteps?.[0]}</h3>
      <ol>
        {t.installSteps?.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
    <div className="card soft" id="licences">
      <p className="eyebrow">{t.licencesTitle}</p>
      <h3>{t.licencesBody}</h3>
      <p className="muted">
        MIT + Pydantic. Compatible con FastAPI y JSON. Diseño translúcido con dark/light.
      </p>
    </div>
    <div className="card soft" id="contributions">
      <p className="eyebrow">{t.contribTitle}</p>
      <h3>{t.contribLead}</h3>
      <ul className="feature-list">
        <li>Comparte ejemplos en otros frameworks</li>
        <li>Traducciones adicionales bienvenidas</li>
        <li>Reporta mejoras en la API</li>
      </ul>
    </div>
  </section>
)

export default InfoGridSection
