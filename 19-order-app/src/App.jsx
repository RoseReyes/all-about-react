import { FoodCartContextProvider } from './store/food-cart-context.jsx';
import { Header } from './components/Header';
import { Meals } from './components/Meals';
import { UserProgressContextProvider } from './store/use-progress-context.jsx';

function App() {
  return (
    <FoodCartContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Meals />
      </UserProgressContextProvider>
    </FoodCartContextProvider>
  );
}

export default App;
