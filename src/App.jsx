
import './App.css'
import TaskListComponent from './components/container/task_list'
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4'

function App() {

  return (
    <div className="App">
      <div>
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Ejemplo1></Ejemplo1> */}
       {/*  <Ejemplo2></Ejemplo2> */}
       {/* <MiComponenteConContexto></MiComponenteConContexto> */}
       <Ejemplo4 nombre={'juan'}>
        <h3>Este contenido es un children para ti</h3>
       </Ejemplo4>
      </div>
    </div>
  )
}

export default App

