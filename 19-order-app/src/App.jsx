import FoodCartContextProvider from './store/food-cart-context.jsx';
import { Header } from './components/Header';
import { Meals } from './components/Meals';

function App() {
  return (
    <FoodCartContextProvider>
      <Header />
      <Meals />
    </FoodCartContextProvider>
  );
}

export default App;
