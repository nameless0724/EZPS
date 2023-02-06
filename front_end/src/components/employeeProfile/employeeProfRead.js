import React from 'react';

const ReadOnlyRow = ({
    entry,
    handleEditClick,
    handleDeleteClick
}) => {
    return (
        <tr>
            <td>{entry.employee_id}</td>
            <td>{entry.last_name}</td>
            <td>{entry.first_name}</td>
            <td>{entry.middle_name}</td>
            <td>{entry.sss_num}</td>
            <td>{entry.pagibig_num}</td>
            <td>{entry.philhealth_num}</td>
            <td>{entry.tax_num}</td>
            <td>
                <button type="button" onClick={(event) => handleEditClick(event, entry)}>
                    Edit
                </button>
                <button type="button" onClick={() => handleDeleteClick(entry.id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};
export default ReadOnlyRow