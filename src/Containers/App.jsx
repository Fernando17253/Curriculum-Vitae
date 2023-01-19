import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Home from "../../../pages/Home";
import Hojavida from "../../../pages/Curriculumvitae";
import Register from "../../pages/Register"
import FlexBox from "../components/Molecules/Flexbox";

function App() {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Hojavida/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/flexbox" element={<FlexBox/>}/>
        </Routes>
        </BrowserRouter>
     );
}

export default App;