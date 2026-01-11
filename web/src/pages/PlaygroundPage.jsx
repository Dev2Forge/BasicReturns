import PlaygroundSection from '../components/PlaygroundSection'

const PlaygroundPage = ({
  t,
  numerator,
  denominator,
  onNumeratorChange,
  onDenominatorChange,
  runPlayground,
  playgroundResult,
  isExecuting,
}) => (
  <div className="stack">
    <PlaygroundSection
      t={t}
      numerator={numerator}
      denominator={denominator}
      onNumeratorChange={onNumeratorChange}
      onDenominatorChange={onDenominatorChange}
      runPlayground={runPlayground}
      playgroundResult={playgroundResult}
      isExecuting={isExecuting}
    />
  </div>
)

export default PlaygroundPage
