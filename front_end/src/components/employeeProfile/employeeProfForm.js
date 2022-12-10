function EmployeeProfile(props) {
    return(
      <div>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="employee_id">Employee ID</label><br/>
          <input type="employee_id" value={props.employee_id} placeholder="Employee ID" onChange={props.handleEmployee_id} /><br/>
          <label htmlFor="last_name">Last Name</label><br/>
          <input type="last_name" value={props.last_name} placeholder="Last name" onChange={props.handleLast_name} /><br/>
          <label htmlFor="first_name">First Name</label><br/>
          <input type="first_name" value={props.first_name} placeholder="First Name" onChange={props.handleFirst_name} /><br/>
          <label htmlFor="middle_name">Middle Name</label><br/>
          <input type="middle_name" value={props.middle_name} placeholder="Middle Name" onChange={props.handleMiddle_name} /><br/>
          <label htmlFor="date_hired">Date Hired</label><br/>
          <input type="date_hired" value={props.date_hired} placeholder="Date Hired" onChange={props.handleDate_hired} /><br/>
          <label htmlFor="sss_num">SSS Number</label><br/>
          <input type="sss_num" value={props.sss_num} placeholder="SSS Number" onChange={props.handleSss_num} /><br/>
          <label htmlFor="pagibig_num">Pag-ibig Number</label><br/>
          <input type="pagibig_num" value={props.pagibig_num} placeholder="Pag-ibig Number" onChange={props.handlePagibig_num} /><br/>
          <label htmlFor="philhealth_num">Philhealth Number</label><br/>
          <input type="philhealth_num" value={props.philhealth_num} placeholder="Philhealth Number" onChange={props.handlePhilhealth_num} /><br/>
          <label htmlFor="tax_num">Tax Number</label><br/>
          <input type="tax_num" value={props.tax_num} placeholder="Tax Number" onChange={props.handleTax_num} /><br/>
          <button>Submit</button>
        </form>
      </div>
    )
   }
    
   export default EmployeeProfile