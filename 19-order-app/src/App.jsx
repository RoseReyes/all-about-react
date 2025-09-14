import { Cart } from './components/Cart.jsx';
import { FoodCartContextProvider } from './store/food-cart-context.jsx';
import { Header } from './components/Header';
import { Meals } from './components/Meals';
import { UserProgressContextProvider } from './store/user-progress-context.jsx';

function App() {
  return (
    <FoodCartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Meals />
        <Cart />
      </UserProgressContextProvider>
    </FoodCartContextProvider>
  );
}

export default App;
