import data from './data/data.js';

import { useEffect, useState } from 'react';
import { IoChevronBackCircle, IoChevronForwardCircle } from 'react-icons/io5';

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [people, index]);

  return (
    <div className="box">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        let position = 'nextSlide';
        if (personIndex === index) {
          position = 'activeSlide';
        }

        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = 'lastSlide';
        }

        return (
          <article className={position} key={id}>
            <img className="imagePerson shadow" src={image} alt={name} />

            <h3 className="m-0">{name}</h3>
            <span className="text-success fw-semibold mb-3">{title}</span>
            <p>{quote}</p>
          </article>
        );
      })}

      <div className="prev" onClick={() => setIndex(index - 1)}>
        <IoChevronBackCircle size="3rem" />
      </div>
      <div className="next" onClick={() => setIndex(index + 1)}>
        <IoChevronForwardCircle size="3rem" />
      </div>
    </div>
  );
}

export default App;
