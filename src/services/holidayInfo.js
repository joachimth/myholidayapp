import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const holidayDescriptions = {
  "Nytårsdag": "Nytårsdag markerer starten på det nye år og fejres den 1. januar.",
  "Skærtorsdag": "Skærtorsdag er en kristen helligdag, der markerer den sidste nadver.",
  "Langfredag": "Langfredag er en kristen helligdag, der mindes Jesu korsfæstelse.",
  "Påskedag": "Påskedag fejres Jesu opstandelse fra de døde.",
  "2. Påskedag": "2. Påskedag er dagen efter Påskedag og er også en kristen helligdag.",
  "Store Bededag": "Store Bededag er en dansk helligdag, der falder den fjerde fredag efter påske.",
  "Kristi Himmelfartsdag": "Kristi Himmelfartsdag markerer Kristi himmelfart og falder 40 dage efter påske.",
  "Pinsedag": "Pinsedag fejrer Helligåndens komme og falder 50 dage efter påske.",
  "2. Pinsedag": "2. Pinsedag er dagen efter Pinsedag og er også en kristen helligdag.",
  "Juledag": "Juledag fejrer Jesu fødsel og falder den 25. december.",
  "2. Juledag": "2. Juledag er dagen efter Juledag og er også en kristen helligdag."
};

const HolidayInfo = ({ holiday, closeModal }) => {
  return (
    <div className="modal-content">
      <button className="close-button" onClick={closeModal}>×</button>
      <h2>{holiday.localName}</h2>
      <FontAwesomeIcon icon={faInfoCircle} size="3x" />
      <p>{holidayDescriptions[holiday.localName]}</p>
      <a href={`https://da.wikipedia.org/wiki/${holiday.localName}`} target="_blank" rel="noopener noreferrer">
        Læs mere
      </a>
    </div>
  );
};

export default HolidayInfo;