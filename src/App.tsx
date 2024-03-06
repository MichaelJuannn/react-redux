import './App.css'
import Scene from './viewport/Scene/Scene'
import HasReduxStore from './viewport/HasReduxStore/HasReduxStore'
function App() {
  return (
    <>
      <HasReduxStore>
        <Scene />
      </HasReduxStore>
    </>
  )
}
export default App
