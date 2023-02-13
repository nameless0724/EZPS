import { useState, useEffect } from 'react';
import axios from 'axios';
import TopBar from '../topbar/topbar';

function PayrollDisplay() {
    const [payrollTable, setPayrollTable] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8000/payrolllist")
        .then((response) => {
            setPayrollTable(response.data.rows);
            console.log(response.data.rows)
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        fetchData()
    }, [payrollTable]);

    return (
        <div className="bg-gray-700">
            <TopBar />
            <h1 className="content-start text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">PAYROLL SUMMARY</h1>
            <br />
            <table className="bg-gray-700 w-full text-l text-center text-white dark:text-white font-bold md:auto">
                <thead className="text-l text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 md:auto">User ID</th>
                        <th scope="col" className="px-6 py-3 md:auto">Last Name</th>
                        <th scope="col" className="px-6 py-3 md:auto">First Name</th>
                        <th scope="col" className="px-6 py-3 md:auto">Net Pay</th>
                        <th scope="col" className="px-6 py-3 md:auto">Allowance</th>
                        <th scope="col" className="px-6 py-3 md:auto">Deduction</th>
                        <th scope="col" className="px-6 py-3 md:auto">Gross Net</th>
                        <th scope="col" className="px-6 py-3 md:auto">Date Start</th>
                        <th scope="col" className="px-6 py-3 md:auto">Date End</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        payrollTable.map((data) => (
                            <tr key={data.id}>
                                <td>{data.user_id}</td>
                                <td>{data.last_name}</td>
                                <td>{data.first_name}</td>
                                <td>{data.net_pay}</td>
                                <td>{data.allowance}</td>
                                <td>{data.deduction}</td>
                                <td>{data.gross_net}</td>
                                <td>{data.date_start}</td>
                                <td>{data.date_end}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default PayrollDisplay