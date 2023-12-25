import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HolidayList = () => {
    const currentYear = new Date().getFullYear();
    const [year, setYear] = useState(currentYear);
    const [holidays, setHolidays] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://date.nager.at/api/v3/PublicHolidays/${year}/DK`)
            .then(response => {
                setHolidays(response.data);
                setLoading(false);
            })
            .catch(error => console.error('Error:', error));
    }, [year]);

    return (
        <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Danske Helligdage i {year}</h1>
    <div className="mb-4">
        <select className="block w-full border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:border-gray-500" value={year} onChange={e => setYear(e.target.value)}>
            <option value={currentYear}>{currentYear}</option>
            <option value={currentYear + 1}>{currentYear + 1}</option>
            <option value={currentYear + 2}>{currentYear + 2}</option>
        </select>
    </div>
    {loading ? <p>Loading...</p> : (
        <ul className="list-disc list-inside">
            {holidays.map(holiday => (
                <li key={holiday.date} className="mb-2">
                    {holiday.localName} - {holiday.date}
                </li>
            ))}
        </ul>
    )}
</div>
    );
};

export default HolidayList;