function PayslipForm(props) {
    return(
        <form className="w-full max-w-sm" onSubmit={props.handleSubmit}>
            <div className="md:w-1/3">
                <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="employee_id">Employee ID</label>
            </div>
            <div className="md:w-1/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="employee_id" value={props.employee_id} placeholder="Employee ID" onChange={props.handlePayslip} />
            </div>

            <div className="md:w-1/3">
                <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="last_name">Last Name</label>
            </div>
            <div className="md:w-1/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="last_name" value={props.last_name} placeholder="Last Name" onChange={props.handlePayslip} />
            </div>

            <div className="md:w-1/3">
                <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="first_name">First Name</label>
            </div>
            <div className="md:w-1/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="first_name" value={props.first_name} placeholder="First Name" onChange={props.handlePayslip} />
            </div>

            <div className="md:w-1/3">
                <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="middle_name">Middle Name</label>
            </div>
            <div className="md:w-1/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="middle_name" value={props.middle_name} placeholder="Middle Name" onChange={props.handlePayslip} />
            </div>

            <div className="md:w-1/3">
                <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="salary">Salary</label>
            </div>
            <div className="md:w-1/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="salary" value={props.salary} placeholder="Salary" onChange={props.handlePayslip} />
            </div>

            <div className="md:w-1/3">
                <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="allowance">Allowance</label>
            </div>
            <div className="md:w-1/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="allowance" value={props.allowance} placeholder="Allowance" onChange={props.handlePayslip} />
            </div>

            <div className="md:w-1/3">
                <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="deduction">Deduction</label>
            </div>
            <div className="md:w-1/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="deduction" value={props.deduction} placeholder="Deduction" onChange={props.handlePayslip} />
            </div>

            <div className="md:w-1/3">
                <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="net_pay">Net Pay</label>
            </div>
            <div className="md:w-1/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="net_pay" value={props.net_pay} placeholder="Net Pay" onChange={props.handlePayslip} />
            </div>
        </form>
    )
}
export default PayslipForm