function Payslip(props) {
    return(
      <div>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="employee_id">Employee ID</label><br/>
          <input type="employee_id" value={props.employee_id} placeholder="Employee ID" onChange={props.handleEmployee_id} /><br/>
          <label htmlFor="pay_run_date">Pay Run Date</label><br/>
          <input type="pay_run_date" value={props.pay_run_date} placeholder="Pay Run Date" onChange={props.handlePay_run_date} /><br/>
          <label htmlFor="gross_income">Gross Income</label><br/>
          <input type="gross_income" value={props.gross_income} placeholder="Gross Income" onChange={props.handleGross_income} /><br/>
          <label htmlFor="net_amount">Net Amount</label><br/>
          <input type="net_amount" value={props.net_amount} placeholder="Net Amount" onChange={props.handleEmployee_id} /><br/>
          <button>Submit</button>
        </form>
      </div>
    )
   }
    
   export default Payslip