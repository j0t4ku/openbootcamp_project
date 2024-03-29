
import TaskListComponent from './components/container/task_list'
import GreetingStyles from './components/pure/greetingStyles'
import Ejemplo1 from './hooks/Ejemplo1'
import Ejemplo2 from './hooks/Ejemplo2'
import MiComponenteConContexto from './hooks/Ejemplo3'
import Ejemplo4 from './hooks/Ejemplo4'
// Import our custom CSS
import './App.css'
import Father from './components/container/father'
import OptionalRender from './components/pure/optionalRender'
import LoginFormik from './components/pure/forms/loginFormik'
import RegisterFormik from './components/pure/forms/registerFormik'
import AsyncExample from './components/pure/AsyncExample'
import ObservableExample from './components/pure/ObservableExample'
import FetchExample from './components/pure/FetchExample'
import AxiosExample from './components/pure/AxiosExample'
import AxiosCRUDExample from './components/pure/AxiosCRUDExample'

function App() {

  return (
    <div className="App">
      <div>
        {/* Projecto Final */}
        <TaskListComponent></TaskListComponent>  


        {/* <Ejemplo1></Ejemplo1> */}
        {/*  <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre={'juan'}>
        <h3>Este contenido es un children para ti</h3>
       </Ejemplo4> */}
        {/*<GreetingStyles name='Joel'></GreetingStyles>*/}

        {/* Gestion de Eventos */}
        {/* <Father></Father> */}

       {/* Ejemplo de Renderizado Condicional */}
       {/* <OptionalRender></OptionalRender> */}

       {/* Ejemplo de Formik y Yup */}
       {/* <LoginFormik></LoginFormik> */}
       {/* <RegisterFormik></RegisterFormik> */}

       {/* Ejemplo de procesos asincronos */}
       {/* <AsyncExample></AsyncExample> */}
       {/* <ObservableExample></ObservableExample> */}

       {/* Example Fetch */}
       {/* <FetchExample></FetchExample> */}

       {/* Axios Example */}

       {/* <AxiosExample></AxiosExample> */}

       <AxiosCRUDExample />

      </div>
    </div>
  )
}

export default App

