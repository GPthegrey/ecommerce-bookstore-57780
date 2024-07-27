import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='brand'>
        <img width={100} src="https://t4.ftcdn.net/jpg/04/92/24/55/360_F_492245515_B06u4GqjtSox45R7iDOCLIamWIJipzFT.jpg" alt="book logo" />
      </Link>
      <ul>
        <li><Link to='categoria/novela' className='categories'>Novelas</Link></li>
        <li><Link to='categoria/novela-historica' className='categories'>Novelas históricas</Link></li>
        <li><Link to='categoria/biografia' className='categories'>Biografías</Link></li>
        <li><Link to='categoria/policial' className='categories'>Policial</Link></li>
        <li><Link to='categoria/ciencia' className='categories'>Ciencia</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
