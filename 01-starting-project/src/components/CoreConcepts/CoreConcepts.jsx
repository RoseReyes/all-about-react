import { CORE_CONCEPTS } from '../../data.js';
import CoreConcept from '../CoreConcept/CoreConcept.jsx';
import Section from '../Section/Section.jsx';

export default function CoreConcepts() {
  return (
    <Section
      title='Core Concepts'
      id='core-concepts'>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => {
          return (
            <CoreConcept
              key={conceptItem.title}
              {...conceptItem}
            />
          );
        })}
      </ul>
    </Section>
  );
}
