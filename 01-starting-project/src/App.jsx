import { CORE_CONCEPTS } from './data';
import CoreConcept from '../src/components/CoreConcept/CoreConcept.jsx';
import Header from '../src/components/Header/Header.jsx';

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
        </section>
      </main>
    </div>
  );
}

export default App;
