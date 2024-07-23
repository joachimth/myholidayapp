/* eslint-disable no-unused-vars */
import {
  faFlag,
  faCross,
  faFireworks,
  faGift,
  faSnowflake,
} from '@fortawesome/free-solid-svg-icons';

const holidayDetails = {
  'Nytårsdag': {
    title: 'Nytårsdag',
    description: 'Første dag i det nye år.',
    reference: 'https://da.wikipedia.org/wiki/Nytårsdag',
    icon: faFireworks,
  },
  'Skærtorsdag': {
    title: 'Skærtorsdag',
    description: 'Kristen helligdag til minde om Jesu sidste nadver.',
    reference: 'https://da.wikipedia.org/wiki/Skærtorsdag',
    icon: faCross,
  },
  'Langfredag': {
    title: 'Langfredag',
    description: 'Kristen helligdag til minde om Jesu korsfæstelse og død.',
    reference: 'https://da.wikipedia.org/wiki/Langfredag',
    icon: faCross,
  },
  'Påskedag': {
    title: 'Påskedag',
    description: 'Kristen helligdag til fejring af Jesu opstandelse.',
    reference: 'https://da.wikipedia.org/wiki/Påskedag',
    icon: faCross,
  },
  '2. påskedag': {
    title: '2. påskedag',
    description: 'Kristen helligdag, dagen efter påskedag.',
    reference: 'https://da.wikipedia.org/wiki/2._påskedag',
    icon: faCross,
  },
  'Store bededag': {
    title: 'Store bededag',
    description: 'Dansk helligdag indført i 1686.',
    reference: 'https://da.wikipedia.org/wiki/Store_bededag',
    icon: faCross,
  },
  'Kristi himmelfartsdag': {
    title: 'Kristi himmelfartsdag',
    description: 'Kristen helligdag til fejring af Jesu himmelfart.',
    reference: 'https://da.wikipedia.org/wiki/Kristi_himmelfartsdag',
    icon: faCross,
  },
  'Pinsedag': {
    title: 'Pinsedag',
    description: 'Kristen helligdag til fejring af Helligåndens komme.',
    reference: 'https://da.wikipedia.org/wiki/Pinsedag',
    icon: faCross,
  },
  '2. pinsedag': {
    title: '2. pinsedag',
    description: 'Kristen helligdag, dagen efter pinsedag.',
    reference: 'https://da.wikipedia.org/wiki/2._pinsedag',
    icon: faCross,
  },
  'Juledag': {
    title: 'Juledag',
    description: 'Kristen helligdag til fejring af Jesu fødsel.',
    reference: 'https://da.wikipedia.org/wiki/Juledag',
    icon: faGift,
  },
  '2. juledag': {
    title: '2. juledag',
    description: 'Kristen helligdag, dagen efter juledag.',
    reference: 'https://da.wikipedia.org/wiki/2._juledag',
    icon: faGift,
  },
};

export default holidayDetails;