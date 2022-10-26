function Payslip(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="user">Full name</label><br/>
                <input type="user" value={props.User} placeholder="User" onChange={props.handleUser} /><br/>
                <label htmlFor="salary">Salary Amount</label><br/>
                <input type="salary" value={props.Salary} placeholder="Salary" onChange={props.handleSalary} /><br/>
                <label htmlFor="sss">SSS Deduction</label><br/>
                <input type="sss" value={props.Sss} placeholder="SSS" onChange={props.handleSss} /><br/>
                <label htmlFor="pagibig">Pag-ibig Deduction</label><br/>
                <input type="pagibig" value={props.Pagibig} placeholder="Pag-ibig" onChange={props.handlePagIbig} /><br/>
                <label htmlFor="philhealth">Philhealth Deduction</label><br/>
                <input type="philhealth" value={props.Philhealth} placeholder="Philhealth" onChange={props.handlePhilhealth} /><br/>
                <label htmlFor="tax">Tax Deduction</label><br/>
                <input type="tax" value={props.Tax} placeholder="Tax" onChange={props.handleTax} /><br/>
                <label htmlFor="netpay">Net Pay</label><br/>
                <input type="netpay" value={props.Netpay} placeholder="Netpay" onChange={props.handleNetpay} /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Payslip