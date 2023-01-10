//import React, { useState } from 'react';

function SidenavNew() {
    return (
        <div className="w-60 h-full shadow-md bg-gray-800 px-1 absolute">
            <ul className="relative">
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white font-bold text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-lime-400 transition duration-300 ease-in-out" href="/employee" data-mdb-ripple="true" data-mdb-ripple-color="dark">Employee's Profile</a>
                </li>
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white font-bold text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-lime-400 transition duration-300 ease-in-out" href="/employeesalary" data-mdb-ripple="true" data-mdb-ripple-color="dark">Employee's Salary</a>
                </li>
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white font-bold text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-lime-400 transition duration-300 ease-in-out" href="/payrollperiod" data-mdb-ripple="true" data-mdb-ripple-color="dark">Payroll Period</a>
                </li>
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white font-bold text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-lime-400 transition duration-300 ease-in-out" href="/attendance" data-mdb-ripple="true" data-mdb-ripple-color="dark">Attendance</a>
                </li>
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white font-bold text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-lime-400 transition duration-300 ease-in-out" href="/allowance" data-mdb-ripple="true" data-mdb-ripple-color="dark">Allowance</a>
                </li>
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white font-bold text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-lime-400 transition duration-300 ease-in-out" href="/deduction" data-mdb-ripple="true" data-mdb-ripple-color="dark">Deductions</a>
                </li>
                <li className="relative">
                    <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white font-bold text-ellipsis whitespace-nowrap rounded hover:text-black hover:bg-lime-400 transition duration-300 ease-in-out" href="/payslip" data-mdb-ripple="true" data-mdb-ripple-color="dark">Payslip Main</a>
                </li>
            </ul>
        </div>
    )
};

export default SidenavNew