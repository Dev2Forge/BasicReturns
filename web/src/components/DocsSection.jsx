import CodeBlock from './CodeBlock'
import { codeExamples } from '../assets/codeExamples'

const DocsSection = ({ t }) => (
  <section className="section" id="docs">
    <div className="section-header">
      <p className="eyebrow">{t.docsTitle}</p>
      <h2>{t.docsLead}</h2>
    </div>
    <div className="code-grid">
      {codeExamples.map((example) => (
        <CodeBlock key={example.title} title={example.title} code={example.code} />
      ))}
    </div>
  </section>
)

export default DocsSection
