import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Dash from "./pages/Dash";
import Protected from "./components/Protected";
import Feedback from "./pages/Feedback";
import Contact from "../src/pages/Contact";
import FAQPage from "./pages/FAQ";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route
          path='/'
          element={
            <Protected>
              <Dash />
            </Protected>
          }
        />
        <Route
          path='/feedback'
          element={
            <Protected>
              <Feedback />
            </Protected>
          }
        />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
