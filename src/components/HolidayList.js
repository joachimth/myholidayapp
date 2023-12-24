import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HolidayList = () => {
    const [year, setYear] = useState(new Date().getFullYear());
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
        <div>
            <h1>Danske Helligdage i {year}</h1>
            <select value={year} onChange={e => setYear(e.target.value)}>
                {/* Option-elementer for år */}
            </select>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {holidays.map(holiday => (
                        <li key={holiday.date}>
                            {holiday.date} - {holiday.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HolidayList;