import { Routes , Route } from "react-router";
import { Home } from "./page/Home.jsx";



function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/search" element={<Search/>} /> */}
        </Routes>
    </>
  )
}

export default App
