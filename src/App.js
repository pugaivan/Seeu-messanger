import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/login/login'
import Registration from './pages/registration/registration'
import Home from './pages/index';
import { PATH } from './utils/constans';

import "./styles/variables.scss"
import "./styles/global.scss"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PATH.HOME} element={<Home />} />
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.REGISER} element={<Registration />} />
    </Routes>
  </BrowserRouter>
)

export default App;
