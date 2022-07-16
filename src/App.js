import Login from '../src/pages/login/login'
import Registration from '../src/pages/registration/registration'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PATH } from './utils/constans';
import "./styles/variables.scss"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.REGISER} element={<Registration />} />
    </Routes>
  </BrowserRouter>
)

export default App;
