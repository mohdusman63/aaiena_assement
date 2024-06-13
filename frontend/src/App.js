import logo from './logo.svg';
import './App.css';
import ImageUploadForm from './component/ImageUploadForm';
import GalleryImage from './component/GalleryImage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './component/Login';
import Register from './component/Register';

function App() {

  return (

      
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/gallery" element={<ImageUploadForm />} />
    
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
