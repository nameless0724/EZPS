import React, { useState } from 'react';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import EmployeeProfile from './employeeProfForm';
import SidenavNew from '../sidenav/sidenavnew';

function EmployeeProfilePage() {
    let navigate = useNavigate();
    const [employee_id, setEmployee_id] = useState("");
    const [last_name, setLast_name] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [middle_name, setMiddle_name] = useState("");
    const [date_hired, setDate_hired] = useState("");
    const [sss_num, setSss_num] = useState("");
    const [pagibig_num, setPagibig_num] = useState("");
    const [philhealth_num, setPhilhealth_num] = useState("");
    const [tax_num, setTax_num] = useState("");

    const handleEmployee_id = (event) => {
        setEmployee_id(event.target.value);
    }; 

    const handleLast_name = (event) => {
        setLast_name(event.target.value);
    };

    const handleFirst_name = (event) => {
        setFirst_name(event.target.value);
    };

    const handleMiddle_name = (event) => {
        setMiddle_name(event.target.value);
    };

    const handleDate_hired = (event) => {
        setDate_hired(event.target.value);
    };

    const handleSss_num = (event) => {
        setSss_num(event.target.value);
    };

    const handlePagibig_num = (event) => {
        setPagibig_num(event.target.value);
    };

    const handlePhilhealth_num = (event) => {
        setPhilhealth_num(event.target.value);
    };

    const handleTax_num = (event) => {
        setTax_num(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();     
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };      
    
    //for edit and add data
    const [entry, setEntry] = useState(data);
    const [addFormData, setAddFormData] = useState({
        employee_id: "",
        last_name: "",
        first_name: "",
        middle_name: "",
        date_hired: "",
        sss_num: "",
        pagibig_num: "",
        philhealth_num: "",
        tax_num: "",
    });

    const [editFormData, setEditFormData] = useState({
        employee_id: "",
        last_name: "",
        first_name: "",
        middle_name: "",
        date_hired: "",
        sss_num: "",
        pagibig_num: "",
        philhealth_num: "",
        tax_num: "",
    });

    const [editEntryId, setEditEntryId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();
        
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newEntry = {
            employee_id: nanoid(),
            last_name: addFormData.last_name,
            first_name: addFormData.first_name,
            middle_name: addFormData.middle_name,
            date_hired: addFormData.date_hired,
            sss_num: addFormData.sss_num,
            pagibig_num: addFormData.pagibig_num,
            philhealth_num: addFormData.philhealth_num,
            tax_num: addFormData.tax_num
        };

        const newEntries = [...entry, newEntry];
        setEntry(newEntries);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedEntry = {
            employee_id: editEntryId,
            last_name: editFormData.last_name,
            first_name: editFormData.first_name,
            middle_name: editFormData.middle_name,
            date_hired: editFormData.date_hired,
            sss_num: editFormData.sss_num,
            pagibig_num: editFormData.pagibig_num,
            philhealth_num: editFormData.philhealth_num,
            tax_num: editFormData.tax_num
        };

        const newEntries = [...entry];

        const index = entry.findIndex((entry) => entry.employee_id === editEntryId);

        newEntries[index] = editedEntry;

        setEntry(newEntries);
        setEditEntryId(null);
    };

    const handleEditClick = (event, entry) => {
        event.preventDefault();
        setEditEntryId(entry.employee_id);

        const formValues = {
            employee_id: entry.employee_id,
            last_name: entry.last_name,
            first_name: entry.first_name,
            middle_name: entry.middle_name,
            date_hired: entry.date_hired,
            sss_num: entry.sss_num,
            pagibig_num: entry.pagibig_num,
            philhealth_num: entry.philhealth_num,
            tax_num: entry.tax_num
        };

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditContactID(null);
    };

    const handleDeleteClick = (entry)
    
    axios.post("http://localhost:8000/employee", {
        employee_id: employee_id,
        last_name: last_name,
        first_name: first_name,
        middle_name: middle_name,
        date_hired: date_hired, 
        sss_num: sss_num,
        pagibig_num: pagibig_num,
        philhealth_num: philhealth_num,
        tax_num: tax_num
    }, config)
    .then((response) => {
        console.log(response)
        navigate("")
    })
    .catch((error) => {
        console.log(error.response.data)
        alert("Invalid input.");
    })
    }; 

    return (
        <div className="bg-gray-700 min-h-screen flex">
            <nav className="w-56 flex-none">
                <SidenavNew />
            </nav>
            <main className="flex-1 min-w-0 overflow-auto">
                <h1 className="content-start text-5xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">EMPLOYEE'S PROFILE</h1><br />
                <EmployeeProfile
                    handleEmployee_id={handleEmployee_id}
                    handleLast_name={handleLast_name}
                    handleFirst_name={handleFirst_name}
                    handleMiddle_name={handleMiddle_name}
                    handleDate_hired={handleDate_hired}
                    handleSss_num={handleSss_num}
                    handlePagibig_num={handlePagibig_num}
                    handlePhilhealth_num={handlePhilhealth_num}
                    handleTax_num={handleTax_num}
                    handleSubmit={handleSubmit}
                    employee_id={employee_id}
                    last_name={last_name}
                    first_name={first_name}
                    middle_name={middle_name}
                    date_hired={date_hired}
                    sss_num={sss_num}
                    pagibig_num={pagibig_num}
                    philhealth_num={philhealth_num}
                    tax_num={tax_num}
                /> 
            </main>
        </div>
    ) 
}

export default EmployeeProfilePage