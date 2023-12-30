
import './App.css'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Views/Home';

import NoPage from './Views/Nopage';
import Contacts from './Views/Contacts';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path= '/Contacts' element={<Contacts/>}/>
     <Route path='*' element={<NoPage/>}/>
     
    </Routes>
     
    </BrowserRouter>
  )
}

export default App
