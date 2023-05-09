import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const Navbar = () => {
    const {toggleModals} = useContext(UserContext)

    return (
        <section>
            <header className='flex justify-between items-center mb-5'>
                <img className='w-24' src="images/logoSitePS.jpg" alt="Logo du site" />
                <nav className='flex justify-center'>
                <NavLink className='text-2xl mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Accueil</NavLink><br />
                <NavLink className='text-2xl mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/pagefaq'>Tes questions</NavLink><br />
                <NavLink className='text-2xl mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/weeklychallenge'>Tes défis hebdomadaires</NavLink>
                <NavLink className='text-2xl mr-3' style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/beproud'>Sois fier de toi</NavLink>
                <button onClick={() => toggleModals("signUp")} className='mr-3 rounded bg-blue-300 text-zinc p-1'>Connexion</button>
                <button onClick={() => toggleModals("signIp")} className='mr-3 rounded bg-blue-300 text-zinc p-1'>Inscription</button>
                <button className='mr-3 rounded bg-red-600 text-zinc p-1'>Déconnexion</button>
                </nav>
            </header>
        </section>
    )
}