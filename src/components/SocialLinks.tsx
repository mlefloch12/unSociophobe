import { FaTiktok, FaInstagram } from 'react-icons/fa'

export const SocialLinks = () => {
    return (
        <section className="mt-5">
            <h3 className="text-2xl font-extrabold">Mes réseaux sociaux</h3>

            <ul className="mt-5">
                <li className='flex items-center'><FaTiktok className='mr-1'/><a className="hover:font-bold" href="https://www.tiktok.com/@mist.off">TikTok</a></li>
                <li className='flex items-center'><FaInstagram className='mr-1'/><a className="hover:font-bold" href="https://www.instagram.com/mist.off/">Instagram</a></li>
            </ul>
        </section>
    )
}