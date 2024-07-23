// src/services/holidayInfo.js
import { faCalendarDay, faBreadSlice, faCross, faEgg, faPray, faCloud, faDove, faTree, faGift } from '@fortawesome/free-solid-svg-icons';

const holidayInfo = {
  "Nytårsdag": {
    icon: faCalendarDay,
    description: "Nytårsdag markerer begyndelsen af det nye år.",
    reference: "https://da.wikipedia.org/wiki/Nytårsdag"
  },
  "Skærtorsdag": {
    icon: faBreadSlice,
    description: "Skærtorsdag er en kristen helligdag, som markerer Jesus sidste nadver med sine disciple.",
    reference: "https://da.wikipedia.org/wiki/Skærtorsdag"
  },
  "Langfredag": {
    icon: faCross,
    description: "Langfredag er dagen, hvor kristne mindes Jesus Kristus' korsfæstelse og død.",
    reference: "https://da.wikipedia.org/wiki/Langfredag"
  },
  "Påskedag": {
    icon: faEgg,
    description: "Påskedag fejrer Jesus Kristus' opstandelse fra de døde.",
    reference: "https://da.wikipedia.org/wiki/Påske"
  },
  "2. Påskedag": {
    icon: faEgg,
    description: "2. Påskedag er dagen efter Påskedag og er en fortsættelse af fejringen af Jesu opstandelse.",
    reference: "https://da.wikipedia.org/wiki/2._påskedag"
  },
  "Store Bededag": {
    icon: faPray,
    description: "Store Bededag er en dansk helligdag indført af biskop Hans Bagger i 1686.",
    reference: "https://da.wikipedia.org/wiki/Store_bededag"
  },
  "Kristi Himmelfartsdag": {
    icon: faCloud,
    description: "Kristi Himmelfartsdag fejrer Jesus Kristus' himmelfart til himlen 40 dage efter påske.",
    reference: "https://da.wikipedia.org/wiki/Kristi_himmelfartsdag"
  },
  "Pinsedag": {
    icon: faDove,
    description: "Pinsedag fejrer Helligåndens komme og betragtes som kirkens fødselsdag.",
    reference: "https://da.wikipedia.org/wiki/Pinse"
  },
  "2. Pinsedag": {
    icon: faDove,
    description: "2. Pinsedag er dagen efter Pinsedag og fortsætter fejring af Helligåndens komme.",
    reference: "https://da.wikipedia.org/wiki/2._pinsedag"
  },
  "Juledag": {
    icon: faTree,
    description: "Juledag fejrer Jesu fødsel og er en af de vigtigste kristne helligdage.",
    reference: "https://da.wikipedia.org/wiki/Juledag"
  },
  "2. Juledag": {
    icon: faGift,
    description: "2. Juledag, også kendt som Sankt Stefansdag, mindes den første kristne martyr, Sankt Stefan.",
    reference: "https://da.wikipedia.org/wiki/2._juledag"
  }
};

export default holidayInfo;