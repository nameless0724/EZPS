function EmployeeSalary(props) {
    return(
      <div>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="employee_id">Employee ID</label><br/>
          <input type="employee_id" value={props.employee_id} placeholder="Employee ID" onChange={props.handleEmployee_id} /><br/>
          <label htmlFor="salary">Salary</label><br/>
          <input type="salary" value={props.salary} placeholder="Salary" onChange={props.handleSalary} /><br/>
          <label htmlFor="position">Position</label><br/>
          <input type="position" value={props.position} placeholder="Position" onChange={props.handlePosition} /><br/>
          <label htmlFor="status">Status</label><br/>
          <input type="status" value={props.status} placeholder="Status" onChange={props.handleStatus} /><br/>
          <label htmlFor="effective_date">Effective Date</label><br/>
          <input type="effective_date" value={props.effective_date} placeholder="Effective Date" onChange={props.handleEffective_date} /><br/>
          <button>Submit</button>
        </form>
      </div>
    )
   }
    
   export default EmployeeSalary