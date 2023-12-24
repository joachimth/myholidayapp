import axios from 'axios';

const getPublicHolidays = (year, countryCode) => {
    return axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/${countryCode}`);
};

export default {
    getPublicHolidays,
};