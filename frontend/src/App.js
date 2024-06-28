import { Route, Routes } from "react-router";
import Admin from "./Page/Admin";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
   <>
   <Modal/>
    <Routes>
      <Route path={'/'} element={<Admin/>}/>
    </Routes>
   </>
  );
}

export default App;
