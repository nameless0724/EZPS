function Deduction(props) {
    return(
      <div>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="employee_id">Employee ID</label><br/>
          <input type="employee_id" value={props.employee_id} placeholder="Employee ID" onChange={props.handleEmployee_id} /><br/>
          <label htmlFor="absent_amount">Absent Deduction</label><br/>
          <input type="absent_amount" value={props.absent_amount} placeholder="Absent Deduction" onChange={props.handleAbsent_amount} /><br/>
          <label htmlFor="sss_contribution">SSS Contribution</label><br/>
          <input type="sss_contribution" value={props.sss_contribution} placeholder="SSS Contribution" onChange={props.handleSss_contribution} /><br/>
          <label htmlFor="pagibig_contribution">Pag-ibig Contribution</label><br/>
          <input type="pagibig_contribution" value={props.pagibig_contribution} placeholder="Pag-ibig Contribution" onChange={props.handlePagibig_contribution} /><br/>
          <label htmlFor="philhealth_contribution">Philhealth Contribution</label><br/>
          <input type="philhealth_contribution" value={props.philhealth_contribution} placeholder="Philhealth Contribution" onChange={props.handlePhilhealth_contribution} /><br/>
          <label htmlFor="tax_contribution">Tax Contribution</label><br/>
          <input type="tax_contribution" value={props.tax_contribution} placeholder="Tax Contribution" onChange={props.handleTax_contribution} /><br/>          
          <button>Submit</button>
        </form>
      </div>
    )
   }
    
   export default Deduction