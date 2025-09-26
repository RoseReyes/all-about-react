import { Cart } from './components/Cart.jsx';
import { FoodCartContextProvider } from './store/FoodCartContext.jsx';
import { Header } from './components/Header';
import { Meals } from './components/Meals';
import { UserProgressContextProvider } from './store/UserProgressContext.jsx';

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
