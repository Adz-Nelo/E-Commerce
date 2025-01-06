import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";

function App() {

  return (
   <div className="flex flex-col overflow-hidden bg-white">
    <h1>Header Component</h1>

    <Routes>
      <Route path="/auth" element={<AuthLayoutout/>}>
        <Route path="login" element={<AuthLogin/>} />
        <Route path="Register" element={<AuthRegister/>} />
        <Route/>
      </Route>
    </Routes>
   </div>
  )
}

export default App
