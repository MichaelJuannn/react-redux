import { Provider } from 'react-redux'
import './App.css'
import Scene from './viewport/Scene'
import store from './init/store/store'
function App() {
  return (
    <>
      <Provider store={store}>
        <Scene />
      </Provider>
    </>
  )
}
export default App
