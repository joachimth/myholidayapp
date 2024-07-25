/* eslint-disable no-unused-vars */
import {
  faFlag,
  faCross,
  faGift,
  faSnowflake,
  faBell,
  faStar,
  faChurch,
  faLeaf,
  faCalendarAlt,
  faFire,
} from '@fortawesome/free-solid-svg-icons';

const holidayDetails = {
  'Nytårsdag': {
    title: 'Nytårsdag',
    description: 'Første dag i det nye år.',
    reference: 'https://da.wikipedia.org/wiki/Nytårsdag',
    icon: faStar,
  },
  'Fastelavn': {
    title: 'Fastelavn',
    description: 'En dansk tradition der involverer børn der klæder sig ud og slår katten af tønden.',
    reference: 'https://da.wikipedia.org/wiki/Fastelavn',
    icon: faLeaf,
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
    icon: faChurch,
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
  'Grundlovsdag': {
    title: 'Grundlovsdag',
    description: 'Fejrer underskrivelsen af Danmarks første grundlov i 1849.',
    reference: 'https://da.wikipedia.org/wiki/Grundlovsdag',
    icon: faFlag,
  },
  'Juleaften': {
    title: 'Juleaften',
    description: 'Aften før juledag, fejret med gaver og julemiddag.',
    reference: 'https://da.wikipedia.org/wiki/Juleaften',
    icon: faGift,
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
  'Nytårsaften': {
    title: 'Nytårsaften',
    description: 'Aften før nytårsdag, fejret med fest og fyrværkeri.',
    reference: 'https://da.wikipedia.org/wiki/Nytårsaften',
    icon: faFire,
  },
};

export default holidayDetails;