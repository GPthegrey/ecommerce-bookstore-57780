import './NavBar.css'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className='navbar'>
      <Link to ='/' className='brand'>
        <img width={100 }src="https://t4.ftcdn.net/jpg/04/92/24/55/360_F_492245515_B06u4GqjtSox45R7iDOCLIamWIJipzFT.jpg" alt="book logo" />
      </Link>
      <ul>
        <Link to='categoria/novela' className='categories'>Novelas</Link>
        <Link to='categoria/novela-historica' className='categories'>Novelas historicas</Link>
        <Link to='categoria/biografia' className='categories'>Biografias</Link>
        <Link to='categoria/policial' className='categories'>Policial</Link>
        <Link to='categoria/ciencia' className='categories'> Ciencia</Link>
        <Link to='categoria/idioma' className='categories'>Otros idiomas</Link>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar
