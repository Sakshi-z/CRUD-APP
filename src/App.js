import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Adduser from "./component/users/Adduser";
import Edituser from "./component/users/Edituser";
import User from "./component/users/User";
import Navbar from "./component/layout/Navbar";
import PageNotFound from "./component/pages/PageNotFound";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
    <Routes>
      <Route exact path="/Home" element={<Home/>}></Route>
      <Route exact path="/About" element={<About/>}></Route>  
      <Route exact path="/Contact" element={<Contact/>}></Route>
      <Route exact path="/Adduser" element={<Adduser/>}></Route>
      <Route exact path="/edituser/:id" element={<Edituser/>}></Route>
      <Route exact path="/viewuser/:id" element={<User/>}></Route>
      <Route exact path="*" element={<PageNotFound/>}></Route>    
    </Routes>
    </div>
    </Router>
   );
}

export default App;
