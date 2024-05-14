import plane from "../../assets/images/plane.png";
import menu from "../../assets/images/menu.png";
import navBurger from "../../assets/images/menu.png";

export function Navbar() {
  return (
    <header>
      <div className='header__logo'>
        <h1>
          <a href='/'>
            <img src={plane} alt='plane logo' />
            Travel Agency
          </a>
        </h1>
      </div>
      <div className='header__nav__burger--open'>
        <img src={menu} className='header__nav__burger--icon' alt='Menu' />
      </div>
      <nav className='header__nav'>
        <div className='header__nav__burger--close'>
          <img
            src={navBurger}
            className='header__nav__burger--icon'
            alt='Menu close'
          />
        </div>
        <ul>
          <li>
            <a href='/' className='header__nav--active'>
              Home
            </a>
          </li>
          <li>
            <a href='/destination'>Destinations</a>
            <ul className='header__sub-nav'>
              <li>
                <a href='/'>France</a>
              </li>
              <li>
                <a href='/'>Russia</a>
              </li>
              <li>
                <a href='/'>Australia</a>
              </li>
              <li>
                <a href='/'>Japan</a>
              </li>
              <li>
                <a href='/'>China</a>
              </li>
              <li>
                <a href='/'>USA</a>
              </li>
              <li>
                <a href='/'>Spain</a>
              </li>
              <li>
                <a href='/' className='header__sub-nav--see-more'>
                  See more
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href='/paris'>Deals</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
