import axios from "axios";

const fetchHolidays = async (year) => {
  try {
    const response = await axios.get(
      `https://date.nager.at/api/v3/PublicHolidays/${year}/DK`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching holidays:", error);
    return [];
  }
};

export default fetchHolidays;