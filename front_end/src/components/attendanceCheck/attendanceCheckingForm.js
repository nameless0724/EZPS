function AttendanceChecking(props) {
    return(
      <div>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="employee_id">Employee ID</label><br/>
          <input type="employee_id" value={props.employee_id} placeholder="Employee ID" onChange={props.handleEmployee_id} /><br/>
          <label htmlFor="hours_rendered">Hours Rendered</label><br/>
          <input type="hours_rendered" value={props.hours_rendered} placeholder="Hours Rendered" onChange={props.handleHours_rendered} /><br/>
          <label htmlFor="period_start">Period Start</label><br/>
          <input type="period_start" value={props.period_start} placeholder="Period Start" onChange={props.handlePeriod_Start} /><br/>
          <label htmlFor="period_end">Period End</label><br/>
          <input type="period_end" value={props.period_end} placeholder="Period End" onChange={props.handlePeriod_End} /><br/>
          <button>Submit</button>
        </form>
      </div>
    )
   }
    
   export default AttendanceChecking 