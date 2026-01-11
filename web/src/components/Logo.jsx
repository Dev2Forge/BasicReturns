const Logo = () => (
  <svg className="brand-mark" viewBox="0 0 160 160" role="img" aria-label="BasicReturns logo">
    <defs>
      <linearGradient id="logoGradient" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#3776ab" />
        <stop offset="50%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#ffd43b" />
      </linearGradient>
      <linearGradient id="pythonBlue" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#306998" />
        <stop offset="100%" stopColor="#4b8bbe" />
      </linearGradient>
      <linearGradient id="pythonYellow" x1="0%" x2="100%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#ffd43b" />
        <stop offset="100%" stopColor="#ffe873" />
      </linearGradient>
    </defs>
    {/* Background rounded rectangle */}
    <rect x="8" y="8" width="144" height="144" rx="24" fill="#0f172a" stroke="url(#logoGradient)" strokeWidth="2" />
    
    {/* Python-inspired curly braces representing code structure */}
    <path
      d="M45 55 C35 55 35 70 45 70 C35 70 35 85 45 85"
      fill="none"
      stroke="url(#pythonBlue)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M115 55 C125 55 125 70 115 70 C125 70 125 85 115 85"
      fill="none"
      stroke="url(#pythonYellow)"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Return arrow representing BasicReturn */}
    <path
      d="M60 70 L90 70 L90 60 L110 72.5 L90 85 L90 75 L60 75 Z"
      fill="url(#logoGradient)"
    />
    
    {/* ok/error dots */}
    <circle cx="55" cy="105" r="8" fill="#22c55e" />
    <circle cx="80" cy="105" r="8" fill="#ef4444" />
    <circle cx="105" cy="105" r="8" fill="#22d3ee" />
    
    {/* Class structure lines */}
    <rect x="50" y="120" width="60" height="4" rx="2" fill="#64748b" />
    <rect x="55" y="130" width="50" height="3" rx="1.5" fill="#475569" />
    <rect x="55" y="138" width="35" height="3" rx="1.5" fill="#475569" />
  </svg>
)

export default Logo
