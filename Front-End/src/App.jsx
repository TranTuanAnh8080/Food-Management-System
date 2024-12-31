
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployeesComponent from './Components/ListEmployeesComponent.jsx';
import EmployeeComponent from './components/EmployeeComponent.jsx';
function App() {

  return (
    <Router>
      <Routes>
        {/* http://localhost:3000 */}
        <Route path='/' element={<ListEmployeesComponent />}></Route>
        {/* http://localhost:3000/employees */}
        <Route path='/employees' element={<ListEmployeesComponent />}></Route>
        {/* ADD EMPLOYEE */}
        <Route path='/add-employee' element={<EmployeeComponent />}></Route>
        {/* UPDATE EMPLOYEE */}

        {/* khi lấy ra id cần update của object cụ thể, phải có dấu ":" */}
        <Route path='/update-employee/:id' element={<EmployeeComponent />}></Route>

      </Routes>
    </Router>

  )
}

export default App
