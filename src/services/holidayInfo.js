/* eslint-disable no-unused-vars */
import { faChurch, faTree, faFlag, faCross, faFire, faStar, faGift, faSnowflake } from '@fortawesome/free-solid-svg-icons';

const holidayDetails = {
  'Nytårsdag': {
    title: 'Nytårsdag',
    description: 'Nytårsdag markerer begyndelsen af det nye år. Det fejres over hele verden den 1. januar.',
    reference: 'https://da.wikipedia.org/wiki/Nyt%C3%A5rsdag',
    icon: faFire
  },
  'Skærtorsdag': {
    title: 'Skærtorsdag',
    description: 'Skærtorsdag er dagen før Langfredag og markerer begyndelsen på Påsken. Det er en dag til minde om den sidste nadver.',
    reference: 'https://da.wikipedia.org/wiki/Sk%C3%A6rtorsdag',
    icon: faChurch
  },
  'Langfredag': {
    title: 'Langfredag',
    description: 'Langfredag er dagen, hvor Jesus blev korsfæstet. Det er en sørgedag i den kristne kalender.',
    reference: 'https://da.wikipedia.org/wiki/Langfredag',
    icon: faCross
  },
  'Påskedag': {
    title: 'Påskedag',
    description: 'Påskedag fejres Jesu opstandelse fra de døde. Det er den vigtigste højtid i kristendommen.',
    reference: 'https://da.wikipedia.org/wiki/P%C3%A5skedag',
    icon: faStar
  },
  '2. Påskedag': {
    title: '2. Påskedag',
    description: '2. Påskedag er dagen efter Påskedag og fejres også til minde om Jesu opstandelse.',
    reference: 'https://da.wikipedia.org/wiki/2._P%C3%A5skedag',
    icon: faStar
  },
  'Store Bededag': {
    title: 'Store Bededag',
    description: 'Store Bededag er en dansk helligdag, hvor alle landets indbyggere beder for et godt og fredfyldt liv.',
    reference: 'https://da.wikipedia.org/wiki/Store_Bededag',
    icon: faChurch
  },
  'Kristi Himmelfartsdag': {
    title: 'Kristi Himmelfartsdag',
    description: 'Kristi Himmelfartsdag markerer Jesu himmelfart til himlen, 40 dage efter hans opstandelse.',
    reference: 'https://da.wikipedia.org/wiki/Kristi_himmelfartsdag',
    icon: faStar
  },
  'Pinsedag': {
    title: 'Pinsedag',
    description: 'Pinsedag fejrer Helligåndens komme til Jesu disciple. Det markerer afslutningen på påsken.',
    reference: 'https://da.wikipedia.org/wiki/Pinsedag',
    icon: faChurch
  },
  '2. Pinsedag': {
    title: '2. Pinsedag',
    description: '2. Pinsedag er dagen efter Pinsedag og fejres også som en helligdag i Danmark.',
    reference: 'https://da.wikipedia.org/wiki/2._Pinsedag',
    icon: faChurch
  },
  'Juledag': {
    title: 'Juledag',
    description: 'Juledag fejrer Jesu fødsel og er en vigtig helligdag i kristendommen. Det fejres den 25. december.',
    reference: 'https://da.wikipedia.org/wiki/Juledag',
    icon: faTree
  },
  '2. Juledag': {
    title: '2. Juledag',
    description: '2. Juledag fejres dagen efter Juledag og markerer afslutningen på juledagene.',
    reference: 'https://da.wikipedia.org/wiki/2._Juledag',
    icon: faTree
  }
};

export default holidayDetails;