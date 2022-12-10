import { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileTable() {
    const [lists, setList] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8000/profilelist")
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
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Bonus</th>
                            <th>SSS Number</th>
                            <th>SSS Contribution</th>
                            <th>Pag-ibig Number</th>
                            <th>Pag-ibig Contribution</th>
                            <th>Philhealth Number</th>
                            <th>Philhealth Contribution</th>
                            <th>Tax Number</th>
                            <th>Tax Contribution</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lists.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.last_name}</td>
                                    <td>{data.first_name}</td>
                                    <td>{data.middle_name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.salary_amount}</td>
                                    <td>{data.bonus_amount}</td>
                                    <td>{data.sss_num}</td>
                                    <td>{data.sss_contribution}</td>
                                    <td>{data.pagibig_num}</td>
                                    <td>{data.pagibig_contribution}</td>
                                    <td>{data.philhealth_num}</td>
                                    <td>{data.philhealth_contribution}</td>
                                    <td>{data.tax_num}</td>
                                    <td>{data.tax_contribution}</td>
                                </tr>
                            ))    
                        }
                    </tbody>
                </table>
        </div>
    )
}

export default ProfileTable