import './App.css';
import { Home } from './screens/Home';
import { PageFAQ } from './screens/PageFAQ';
import { WeeklyChallenge } from './screens/WeeklyChallenge';
import { BeProud } from './screens/BeProud';
import { Routes, Route, NavLink } from 'react-router-dom'; 

function App() {
  return (
    <div className='container mt-10'>
      <header className='flex justify-between items-center mb-5'>
        <img className='w-24' src="images/logoSitePS.jpg" alt="Logo du site" />
        <nav className='flex justify-center'>
          <NavLink className='text-2xl mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Accueil</NavLink><br />
          <NavLink className='text-2xl mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/pagefaq'>Tes questions</NavLink><br />
          <NavLink className='text-2xl mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/weeklychallenge'>Tes défis hebdomadaires</NavLink>
          <NavLink className='text-2xl mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/beproud'>Sois fier de toi</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/pagefaq' element={ <PageFAQ/>}/>
        <Route path='/weeklychallenge' element={ <WeeklyChallenge/>}/>
        <Route path='/beproud' element={ <BeProud/>}/>
      </Routes>
      <footer>

      </footer>
    </div>
  );
}

export default App;
