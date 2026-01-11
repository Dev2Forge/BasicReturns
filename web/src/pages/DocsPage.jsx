import DocsSection from '../components/DocsSection'
import InfoGridSection from '../components/InfoGridSection'

const DocsPage = ({ t }) => (
  <div className="stack">
    <DocsSection t={t} />
    <InfoGridSection t={t} />
  </div>
)

export default DocsPage
