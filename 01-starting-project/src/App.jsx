import CoreConcepts from './components/CoreConcepts/CoreConcepts.jsx';
import Examples from '../src/components/Examples/Examples.jsx';
import Header from '../src/components/Header/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
