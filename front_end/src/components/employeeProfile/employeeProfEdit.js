import React from 'react';

const EmployeeProfEdit = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Employee ID"
                    name="Employee ID"
                    value={editFormData.employee_id}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Last Name"
                    name="Last Name"
                    value={editFormData.last_name}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="First Name"
                    name="First Name"
                    value={editFormData.first_name}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Middle Name"
                    name="Middle Name"
                    value={editFormData.middle_name}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Date Hired"
                    name="Date Hired"
                    value={editFormData.date_hired}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="SSS Number"
                    name="SSS Number"
                    value={editFormData.sss_num}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Pag-ibig Number"
                    name="Pag-ibig Number"
                    value={editFormData.pagibig_num}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Philhealth Number"
                    name="Philhealth Number"
                    value={editFormData.philhealth_num}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required="required"
                    placeholder="Tax Number"
                    name="Tax Number"
                    value={editFormData.tax_num}
                    onChange={handleEditFormChange}
                />
            </td>
        </tr>
    )
}
export default EmployeeProfEdit