/* eslint-disable no-unused-vars */
import { faBriefcase, faChurch, faFire, faGift, faSnowflake, faFlag, faTree } from '@fortawesome/free-solid-svg-icons';

const holidayDetails = {
  "Nytårsdag": {
    name: "Nytårsdag",
    description: "Nytårsdag er årets første dag og markeres ved overgangen til det nye år.",
    link: "https://da.wikipedia.org/wiki/Nytårsdag",
    icon: faFire,
    noWork: true,
  },
  "Skærtorsdag": {
    name: "Skærtorsdag",
    description: "Skærtorsdag er torsdagen før påske og markerer Jesu sidste nadver med sine disciple.",
    link: "https://da.wikipedia.org/wiki/Skærtorsdag",
    icon: faChurch,
    noWork: true,
  },
  "Langfredag": {
    name: "Langfredag",
    description: "Langfredag er fredagen før påske og mindes Jesu korsfæstelse.",
    link: "https://da.wikipedia.org/wiki/Langfredag",
    icon: faCross,
    noWork: true,
  },
  "Påskedag": {
    name: "Påskedag",
    description: "Påskedag fejrer Jesu opstandelse fra de døde.",
    link: "https://da.wikipedia.org/wiki/Påskedag",
    icon: faChurch,
    noWork: true,
  },
  "2. påskedag": {
    name: "2. påskedag",
    description: "2. påskedag er dagen efter påskedag og markerer fortsættelsen af påskefejringen.",
    link: "https://da.wikipedia.org/wiki/2._påskedag",
    icon: faChurch,
    noWork: true,
  },
  "Store bededag": {
    name: "Store bededag",
    description: "Store bededag er en særlig dansk helligdag indført i 1686 til bøn og faste.",
    link: "https://da.wikipedia.org/wiki/Store_bededag",
    icon: faChurch,
    noWork: true,
  },
  "Kristi himmelfartsdag": {
    name: "Kristi himmelfartsdag",
    description: "Kristi himmelfartsdag fejrer Jesu himmelfart 40 dage efter påske.",
    link: "https://da.wikipedia.org/wiki/Kristi_himmelfartsdag",
    icon: faChurch,
    noWork: true,
  },
  "Pinsedag": {
    name: "Pinsedag",
    description: "Pinsedag fejrer Helligåndens komme 50 dage efter påske.",
    link: "https://da.wikipedia.org/wiki/Pinsedag",
    icon: faChurch,
    noWork: true,
  },
  "2. pinsedag": {
    name: "2. pinsedag",
    description: "2. pinsedag er dagen efter pinsedag og markerer fortsættelsen af pinsefesten.",
    link: "https://da.wikipedia.org/wiki/2._pinsedag",
    icon: faChurch,
    noWork: true,
  },
  "Juleaften": {
    name: "Juleaften",
    description: "Juleaften fejrer Jesu fødsel og er en vigtig del af julen.",
    link: "https://da.wikipedia.org/wiki/Juleaften",
    icon: faTree,
    noWork: false,
  },
  "1. juledag": {
    name: "1. juledag",
    description: "1. juledag er dagen efter juleaften og en officiel helligdag i Danmark.",
    link: "https://da.wikipedia.org/wiki/Juledag",
    icon: faGift,
    noWork: true,
  },
  "2. juledag": {
    name: "2. juledag",
    description: "2. juledag er dagen efter 1. juledag og en officiel helligdag i Danmark.",
    link: "https://da.wikipedia.org/wiki/2._juledag",
    icon: faSnowflake,
    noWork: true,
  },
  "Grundlovsdag": {
    name: "Grundlovsdag",
    description: "Grundlovsdag fejrer underskrivelsen af Danmarks grundlov den 5. juni 1849.",
    link: "https://da.wikipedia.org/wiki/Grundlovsdag",
    icon: faFlag,
    noWork: false,
  },
};

export default holidayDetails;