// import IssueProvider from './contexts/Issues'
// import Issues from './Issue'
import { SWRConfig } from 'swr'
import './App.css'
import fetcher from './components/pokemon/fetcher'
import PokeContainer from './components/pokemon/PokeContainer'
import { StyledPokedex, StyledTitle } from './components/pokemon/pokemon.styled'

function App() {

  return (
    <>
      {/* <IssueProvider url="https://api.github.com/repos/ContentPI/ContentPI/issues">
        <Issues />
      </IssueProvider> */}

      <StyledTitle>Pokedex</StyledTitle>
      <SWRConfig value={{ fetcher, suspense: true }}>
        <StyledPokedex>
          <PokeContainer />
        </StyledPokedex>
      </SWRConfig>

    </>
  )
}

export default App
