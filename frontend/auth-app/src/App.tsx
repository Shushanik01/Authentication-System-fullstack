
import { BrowserRouter, Routes, Route } from "react-router";
import Auth from "./register/auth";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        <Route path="/message"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
