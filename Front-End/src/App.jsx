
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home.jsx';
import ListEmployeesComponent from './Components/ListEmployeesComponent.jsx';
function App() {
  
  return (
        // <Router>
        //     <Routes>
        //       <Route path='/' element={<Home/>}></Route>
        //     </Routes>
        // </Router>
        <>
          <ListEmployeesComponent></ListEmployeesComponent>
        </>
  )
}

export default App
