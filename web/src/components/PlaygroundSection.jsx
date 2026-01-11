const PlaygroundSection = ({
  t,
  numerator,
  denominator,
  onNumeratorChange,
  onDenominatorChange,
  runPlayground,
  playgroundResult,
  isExecuting,
}) => {
  const pythonCode = `from BasicReturns import BasicReturn

def divide(a: float, b: float) -> BasicReturn:
    if b == 0:
        return BasicReturn(
            ok=False,
            error="ZeroDivisionError",
            data=None,
            msg="${t.playgroundZero}"
        )
    return BasicReturn(
        ok=True,
        error=None,
        data=a / b,
        msg="${t.playgroundSuccess}"
    )`

  return (
    <section className="section" id="playground">
      <div className="section-header">
        <p className="eyebrow">{t.playgroundTitle}</p>
        <h2>{t.playgroundLead}</h2>
      </div>
      <div className="playground-layout">
        <div className="playground-code">
          <div className="code-block">
            <p className="code-title">Python</p>
            <pre><code>{pythonCode}</code></pre>
          </div>
        </div>
        <div className="playground-interactive">
          <div className="card glass form">
            <h3 className="form-title">{t.nav.playground}</h3>
            <label>
              {t.playgroundInputA || 'Numerator'} (a)
              <input
                type="number"
                value={numerator}
                onChange={(e) => onNumeratorChange(e.target.value)}
                placeholder="10"
                disabled={isExecuting}
              />
            </label>
            <label>
              {t.playgroundInputB || 'Denominator'} (b)
              <input
                type="number"
                value={denominator}
                onChange={(e) => onDenominatorChange(e.target.value)}
                placeholder="2"
                disabled={isExecuting}
              />
            </label>
            <button 
              className={`btn primary full-width ${isExecuting ? 'executing' : ''}`} 
              onClick={runPlayground}
              disabled={isExecuting}
            >
              {isExecuting ? (
                <>
                  <span className="btn-spinner"></span>
                  {t.playgroundExecuting || 'Executing...'}
                </>
              ) : (
                t.playgroundRun || 'divide(a, b)'
              )}
            </button>
          </div>
          <div className="card glass result-card">
            <p className="eyebrow">{t.playgroundOutput || 'BasicReturn Output'}</p>
            {isExecuting ? (
              <div className="result-loading">
                <div className="spinner"></div>
                <span>{t.playgroundProcessing || 'Processing...'}</span>
              </div>
            ) : playgroundResult ? (
              <pre className="result">
                <code>{JSON.stringify(playgroundResult, null, 2)}</code>
              </pre>
            ) : (
              <p className="result-placeholder">{t.playgroundEmpty || 'Click the button above to execute'}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlaygroundSection
