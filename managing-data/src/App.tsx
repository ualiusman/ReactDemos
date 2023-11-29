import IssueProvider from './contexts/Issues'
import Issues from './Issue'
import './App.css'

function App() {

  return (
    <>
      <IssueProvider url="https://api.github.com/repos/ContentPI/ContentPI/issues">
        <Issues />
      </IssueProvider>
    </>
  )
}

export default App
