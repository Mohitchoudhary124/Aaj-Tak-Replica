import './App.css';
import Homepage from './assets/pages/Homepage';
import { register } from 'swiper/element/bundle';
import {Router,Routes ,Route } from 'react-router-dom';
import Signup from './assets/components/Signup';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={ <Homepage/>}/>
        <Route path="/Signup" element={<Signup />} />
    
     </Routes>
    </div>
  );
}
register();

export default App;
