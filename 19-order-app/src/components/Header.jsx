import Button from './UI/Button';
import logoImg from '../assets/logo.jpg';

const Header = () => {
  return (
    <header id='main-header'>
      <div id='title'>
        <img
          src={logoImg}
          alt='food logo'
        />
        <h1>React Food</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
