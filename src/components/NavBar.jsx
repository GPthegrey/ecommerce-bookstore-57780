import './NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {

  return (
    <nav className='navbar'>
      <div className='brand'>
        <img width={100 }src="https://t4.ftcdn.net/jpg/04/92/24/55/360_F_492245515_B06u4GqjtSox45R7iDOCLIamWIJipzFT.jpg" alt="book logo" />
      </div>
      <ul>
        <li>Novelas</li>
        <li>Biografias</li>
        <li>Policial</li>
        <li>Ciencia</li>
        <li>Otros idiomas</li>
      </ul>
      <CartWidget />
    </nav>
  )
}

export default NavBar
