import { useEffect, useMemo, useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import './App.css'
import { baseCopy, translations } from './assets/translations'
import { languages } from './assets/languages'
import Footer from './components/Footer'
import SiteHeader from './components/SiteHeader'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DocsPage from './pages/DocsPage'
import PlaygroundPage from './pages/PlaygroundPage'
import { buildReturnPayload } from './utils/playgroundLogic'

const EXECUTION_DELAY_MS = 600

function App() {
  const [language, setLanguage] = useState('es')
  const [theme, setTheme] = useState('dark')
  const [numerator, setNumerator] = useState('10')
  const [denominator, setDenominator] = useState('2')
  const [playgroundResult, setPlaygroundResult] = useState(null)
  const [isExecuting, setIsExecuting] = useState(false)

  const t = useMemo(() => ({ ...baseCopy, ...(translations[language] || {}) }), [language])

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const runPlayground = () => {
    setIsExecuting(true)
    setPlaygroundResult(null)
    setTimeout(() => {
      setPlaygroundResult(buildReturnPayload(t, numerator, denominator))
      setIsExecuting(false)
    }, EXECUTION_DELAY_MS)
  }

  return (
    <div className="app-shell">
      <SiteHeader
        t={t}
        languages={languages}
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />

      <main className="page">
        <Routes>
          <Route path="/" element={<HomePage t={t} />} />
          <Route path="/about" element={<AboutPage t={t} />} />
          <Route path="/docs" element={<DocsPage t={t} />} />
          <Route
            path="/playground"
            element={
              <PlaygroundPage
                t={t}
                numerator={numerator}
                denominator={denominator}
                onNumeratorChange={setNumerator}
                onDenominatorChange={setDenominator}
                runPlayground={runPlayground}
                playgroundResult={playgroundResult}
                isExecuting={isExecuting}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer t={t} />
    </div>
  )
}

export default App
