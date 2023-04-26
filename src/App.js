import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './screen/main';
import Singlem from './screen/singlematch';

function Back() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/singlematch/:id' element={<Singlem/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Back;
