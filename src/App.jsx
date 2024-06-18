import { BrowserRouter as Router , Route, BrowserRouter, Routes , } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Help from './Pages/Help/Help';
import Sign from './Pages/SignIn/SignIn';
import Favorite from './Pages/Favorite/Favorite';
import Explore from './Pages/Explore/Explore';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/favorite' element={<Favorite/>}/>
      <Route path='/explore' element={<Explore/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
