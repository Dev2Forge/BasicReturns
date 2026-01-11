const CodeBlock = ({ title, code }) => (
  <div className="code-block">
    <div className="code-title">{title}</div>
    <pre>
      <code>{code}</code>
    </pre>
  </div>
)

export default CodeBlock
