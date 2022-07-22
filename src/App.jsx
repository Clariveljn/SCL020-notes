import { Routes, Route } from "react-router-dom";

//import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Notes from "./routes/Notes";
import NotFound from "./routes/NotFound";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="*" element={<NotFound />} />
                
            </Routes>
        </>
    );
};

export default App;