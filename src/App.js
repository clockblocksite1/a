import {BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import Pain from "./components/Pain";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Pain/>}/>
          <Route path="/modal" element={<Modal/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
