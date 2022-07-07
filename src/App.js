import Login from '../src/pages/login/login'
import Registration from '../src/pages/registration/registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/variables.scss"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />
    </Routes>
  </BrowserRouter>
)

export default App;
