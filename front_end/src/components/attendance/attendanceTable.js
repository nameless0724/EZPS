import { useState, useEffect } from 'react';
import axios from 'axios';

function AttendanceTable() {
    const [lists, setList] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8000/attendancelist")
        .then((response) => {
            setList(response.data.rows);
            console.log(response.data.rows)
        })
        .catch((error) => {
            console.log(error);
        }); 
    };

    useEffect(() => {
        fetchData()
    }, [lists]);

    return (
       <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Date</th>
                            <th>Hour</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lists.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.last_name}</td>
                                    <td>{data.first_name}</td>
                                    <td>{data.middle_name}</td>
                                    <td>{data.date}</td>
                                    <td>{data.hour}</td>
                                </tr>
                            ))    
                        }
                    </tbody>
                </table>
        </div>
    )
}

export default AttendanceTable