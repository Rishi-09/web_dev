import './App.css'
import { Provider } from 'react-redux'
import Todo from './components/todo'
import  { store } from './app/store'

function App() {

  return (
    <>
      <Provider store={store} >
        <Todo></Todo>
      </Provider>
       
    </>
  )
}

export default App
