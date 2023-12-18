import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import Celebrity from './pages/Celebrity';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Tv from './pages/Tv';

function App() {
  return (
    <div className='root-wrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Movies' element={<Movies />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='/Celebrity' element={<Celebrity />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
