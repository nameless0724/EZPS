function Profile(props) {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="full_name">Full name</label><br/>
                <input type="full_name" value={props.full_name} placeholder="Full Name" onChange={props.handleFull_name} /><br/>
                <label htmlFor="salary_amount">Salary Amount</label><br/>
                <input type="salary_amount" value={props.salary_amount} placeholder="Salary Amount" onChange={props.handleSalary_amount} /><br/>
                <label htmlFor="allowance_amount">Allowance Amount</label><br/>
                <input type="allowance_amount" value={props.allowance_amount} placeholder="Allowance Amount" onChange={props.handleAllowance_amount} /><br/>
                <label htmlFor="bonus_amount">Bonus Amount</label><br/>
                <input type="bonus_amount" value={props.bonus_amount} placeholder="Bonus Amount" onChange={props.handleBonus_amount} /><br/>
                <label htmlFor="sss_num">SSS Number</label><br/>
                <input type="sss_num" value={props.sss_num} placeholder="SSS Number" onChange={props.handleSss_num} /><br/>
                <label htmlFor="sss_contribution">SSS Contribution</label><br/>
                <input type="sss_contribution" value={props.sss_contribution} placeholder="SSS Contribution" onChange={props.handleSss_contribution} /><br/>
                <label htmlFor="pagibig_num">Pag-Ibig Number</label><br/>
                <input type="pagibig_num" value={props.pagibig_num} placeholder="Pag-Ibig Number" onChange={props.handlePagibig_num} /><br/>
                <label htmlFor="pagibig_contribution">Pag-ibig Contribution</label><br/>
                <input type="pagibig_contribution" value={props.ibig_contribution} placeholder="Pag-Ibig Contribution" onChange={props.handlePagibig_contribution} /><br/>
                <label htmlFor="philhealth_num">Philhealth Number</label><br/>
                <input type="philhealth_num" value={props.philhealth_num} placeholder="Philhealth Number" onChange={props.handlePhilhealth_num} /><br/>
                <label htmlFor="philhealth_contribution">Philhealth Contribution</label><br/>
                <input type="philhealth_contribution" value={props.philhealth_contribution} placeholder="Philhealth Contribution" onChange={props.handlePhilhealth_contribution} /><br/>
                <label htmlFor="tax_num">Tax Number</label><br/>
                <input type="tax_num" value={props.tax_num} placeholder="Tax Number" onChange={props.handleTax_num} /><br/>
                <label htmlFor="tax_contribution">Tax Contribution</label><br/>
                <input type="tax_contribution" value={props.tax_contribution} placeholder="Tax Contribution" onChange={props.handleTax_contribution} /><br/>
                <label htmlFor="email">Email</label><br/>
                <input type="email" value={props.email} placeholder="Email" onChange={props.handleEmail} /><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Profile 