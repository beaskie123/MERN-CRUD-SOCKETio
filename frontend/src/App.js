import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Login from "./screen/Login";
import Main from './screen/Main';
import Signup from './screen/Signup';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Helmet>
        <title>Babble Space</title>
      </Helmet>
      <Routes>
        <Route path='/' element={ <Login />} />
        <Route path='/Main' element={<Main/>} />
        <Route path='/Signup' element={<Signup/>} />
      </Routes>
         
    </div>
    </BrowserRouter>
  );
}

export default App;
