import React, { useState, useEffect, Fragment } from 'react';
import { nanoid } from 'nanoid';
import axios from 'axios';
import EditableRow from './employeeProfEdit';
import ReadOnlyRow from './employeeProfRead';

function EmployeeProfTable() {
    //for edit and add data
    const [entry, setEntry] = useState(data);

    const fetchData = () => {
        axios.get("http://localhost:8000/employee")
        .then((response) => {
            setEntry(response.data.rows);
            console.log(response.data.rows)
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        fetchData()
    }, [entry]);

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
        setEditEntryId(null);
    };

    const handleDeleteClick = (entry) => {
        const newEntry = [...entry];

        const index = entry.findIndex((entry) => entry.id === entry);

        newEntry.splice(index, 1);

        setEntry(newEntry);
    };

    return (
        <div>
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Middle Name</th>
                            <th>Date Hired</th>
                            <th>SSS Number</th>
                            <th>Pag-ibig Number</th>
                            <th>Philhealth Number</th>
                            <th>Tax Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entry.map((entry) => (
                            <Fragment>
                                {editEntryId === entry.id ? (
                                    <EditableRow
                                        editFormData={editFormData}
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnlyRow 
                                        entry={entry}
                                        handleEditClick={handleEditClick}
                                        handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>

            <h2>Add an entry</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input 
                    type="text"
                    name="Employee ID"
                    required="required"
                    placeholder="Employee ID"
                    onChange={handleAddFormChange}
                />
                <input 
                    type="text"
                    name="Last Name"
                    required="required"
                    placeholder="Last Name"
                    onChange={handleAddFormChange}
                />
                <input 
                    type="text"
                    name="First Name"
                    required="required"
                    placeholder="First Name"
                    onChange={handleAddFormChange}
                />
                <input 
                    type="text"
                    name="Middle Name"
                    required="required"
                    placeholder="Middle Name"
                    onChange={handleAddFormChange}
                />
                <input 
                    type="text"
                    name="Date Hired"
                    required="required"
                    placeholder="Date Hired"
                    onChange={handleAddFormChange}
                />
                <input 
                    type="text"
                    name="SSS Number"
                    required="required"
                    placeholder="SSS Number"
                    onChange={handleAddFormChange}
                />
                <input 
                    type="text"
                    name="Pag-ibig Number"
                    required="required"
                    placeholder="Pag-ibig Number"
                    onChange={handleAddFormChange}
                />
                <input 
                    type="text"
                    name="Philhealth Number"
                    required="required"
                    placeholder="Philhealth Number"
                    onChange={handleAddFormChange}
                />
                <input 
                    type="text"
                    name="Tax Number"
                    required="required"
                    placeholder="Tax Number"
                    onChange={handleAddFormChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default EmployeeProfTable