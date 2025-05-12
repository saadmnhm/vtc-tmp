import '../App.css';
import * as $ from "jquery"
import Home from '../pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
      {/* <Header /> */}
      
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
