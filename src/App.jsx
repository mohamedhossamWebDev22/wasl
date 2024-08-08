import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import Login1 from './pages/Login1';
import Login2 from './pages/Login2';
import Msg1 from './pages/Msg1';
import Msg2 from './pages/Msg2';
import Start from './pages/Start';
import Ac1 from './pages/Ac1';
import Ac2 from './pages/Ac2';
import Error from './pages/Error';

var Go = null

if (localStorage.getItem("h") == null){
  Go = <Start/>
}
if (localStorage.getItem("h") == 1){
  Go = <Home1/>
}
if (localStorage.getItem("h") == 2){
  Go = <Home2/>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={Go} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/login2" element={<Login2 />} />
        <Route path="/msg1" element={<Msg1 />} />
        <Route path="/msg2" element={<Msg2 />} />
        <Route path="/start" element={<Start />} />
        <Route path="/ac1" element={<Ac1 />} />
        <Route path="/ac2" element={<Ac2 />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;