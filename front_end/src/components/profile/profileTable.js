import { useEffect, useState } from 'react';

function ProfileTable() {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch(`http://localhost:8000/profile`)
            .then((response) => response.json())
            .then((actualData) => {
                console.log(actualData);
                setData(actualData.profile);
                console.log(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <tbody>
                <tr>
                    <th>Full Name</th>
                    <th>Salary</th>
                    <th>Allowance</th>
                    <th>Bonus</th>
                    <th>SSS Number</th>
                    <th>SSS Contribution</th>
                    <th>Pag-ibig Number</th>
                    <th>Pag-ibig Contibution</th>
                    <th>Philhealth Number</th>
                    <th>Philhealth Contibution</th>
                    <th>Tax Number</th>
                    <th>Tax Contibution</th>
                    <th>Email</th>
                </tr>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.full_name}</td>
                        <td>{item.salary_amount}</td>
                        <td>{item.allowance_amount}</td>
                        <td>{item.bonus_amount}</td>
                        <td>{item.sss_num}</td>
                        <td>{item.sss_contribution}</td>
                        <td>{item.pagibig_num}</td>
                        <td>{item.pagibig_contribution}</td>
                        <td>{item.philhealth_num}</td>
                        <td>{item.philhealth_contribution}</td>
                        <td>{item.tax_num}</td>
                        <td>{item.tax_contribution}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </div>
    );
}

export default ProfileTable