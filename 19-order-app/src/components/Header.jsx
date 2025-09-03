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
        <button className='cart'>Cart (0)</button>
      </nav>
    </header>
  );
};
