import { useState, useEffect } from 'react';
import axios from 'axios';

function ProfileTable() {
    const [data, setData] = useState([]);

    /*useEffect(() => {
        const fetchData = async() => {
            const profile = await axios.get("http://localhost:8000/profilelist");
            setLists(profile)
            console.log(profile)
        };
        fetchData();
    }, [lists])*/ 

    /*const fetchData = () => {
        axios.get("http://localhost:8000/profilelist")
        .then((response) => {
            setRows([response.data]);
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        }); 
    };

    useEffect(() => {
        fetchData()
    }, [rows]);*/

    useEffect(() => {
        fetch('http://localhost:8000/profilelist')
            .then((response) => response.json())
            .then(setData);
    }, [data]);

    console.log("this is,", data)

    return (
        <>
            {data.map((d) =>
                <ul key={d.id}>
                    <li>{d.full_name}</li>
                    <li>{d.email}</li>
                </ul>
            )}
        </>
    )
       /* <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
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
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row) => {
                            return (
                                <tr key={row.id}>
                                    <td>{row.full_name}</td>
                                    <td>{row.salary_amount}</td>
                                    <td>{row.bonus_amount}</td>
                                    <td>{row.sss_num}</td>
                                    <td>{row.sss_contribution}</td>
                                    <td>{row.pagibig_num}</td>
                                    <td>{row.pagibig_contribution}</td>
                                    <td>{row.philhealth_num}</td>
                                    <td>{row.philhealth_contribution}</td>
                                    <td>{row.tax_num}</td>
                                    <td>{row.tax_contribution}</td>
                                    <td>{row.email}</td>
                                </tr>
                            );
                        })    
                    }
                </tbody>
            </table>
        </div>
    )*/
}

export default ProfileTable