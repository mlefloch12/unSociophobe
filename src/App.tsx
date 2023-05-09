import './App.css';
import { Navbar } from './components/Navbar';
import { SignUpModal } from './components/SignUpModal';
import { SignInModal } from './components/SignInModal';
import Private from './screens/Private/Private';
import PrivateHome from './screens/Private/PrivateHome/PrivateHome';
import { Home } from './screens/Home';
import { PageFAQ } from './screens/PageFAQ';
import { WeeklyChallenge } from './screens/WeeklyChallenge';
import { BeProud } from './screens/BeProud';
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className='container mt-10'>
      <SignUpModal/>
      <SignInModal/>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/pagefaq' element={ <PageFAQ/>}/>
        <Route path='/weeklychallenge' element={ <WeeklyChallenge/>}/>
        <Route path='/beproud' element={ <BeProud/>}/>
        <Route path='/private' element={<Private />}>
          <Route path='/private/private-home' element={<PrivateHome />} />
        </Route>
      </Routes>
      <footer>

      </footer>
    </div>
  );
}

export default App;
