import { Button } from './ui/Button';
import foodAppImg from '../assets/logo.jpg';

export const Header = () => {
  return (
    <header id='main-header'>
      <div id='title'>
        <img
          src={foodAppImg}
          alt='Food App icon'></img>
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button
          className='cart'
          textOnly>
          Cart (0)
        </Button>
      </nav>
    </header>
  );
};
