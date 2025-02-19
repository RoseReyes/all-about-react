import { CORE_CONCEPTS } from './data';
import CoreConcept from '../src/components/CoreConcept/CoreConcept.jsx';
import Header from '../src/components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [tabContent, setTabContent] = useState();

  function handleSelect(selectedButton) {
    return setTabContent(selectedButton);
  }

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
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
        </section>
        {tabContent}
      </main>
    </div>
  );
}

export default App;
