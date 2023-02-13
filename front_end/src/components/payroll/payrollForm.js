function PayrollForm(props) {
    return (
        <form className="flex flex-col justify-center items-center bg-gray-700" onSubmit={props.handleSubmit}>
            <div className="mb-6 md:w-1/3">
                <label 
                className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="user_id">
                    User ID
                </label>
            </div>
            <div className="mb-6 md:w-1/3">
                <input 
                className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400"
                type="user_id"
                value={props.user_id}
                placeholder="User ID"
                onChange={props.handleUser_id} />
            </div>

            <div className="mb-6 md:w-1/3">
                <label 
                className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="last_name">
                    Last Name
                </label>
            </div>
            <div className="mb-6 md:w-1/3">
                <input 
                className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400"
                type="user_id"
                value={props.last_name}
                placeholder="Last Name"
                onChange={props.handleLast_name} />
            </div>

            <div className="mb-6 md:w-1/3">
                <label 
                className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="first_name">
                    First Name
                </label>
            </div>
            <div className="mb-6 md:w-1/3">
                <input 
                className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400"
                type="user_id"
                value={props.first_name}
                placeholder="First Name"
                onChange={props.handleFirst_name} />
            </div>

            <div className="mb-6 md:w-1/3">
                <label 
                className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="net_pay">
                    Net Pay
                </label>
            </div>
            <div className="mb-6 md:w-1/3">
                <input 
                className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400"
                type="net_pay"
                value={props.net_pay}
                placeholder="Net Pay"
                onChange={props.handleNet_pay} />
            </div>

            <div className="mb-6 md:w-1/3">
                <label 
                className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="allowance">
                    Allowance
                </label>
            </div>
            <div className="mb-6 md:w-1/3">
                <input 
                className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400"
                type="allowance"
                value={props.allowance}
                placeholder="Allowance"
                onChange={props.handleAllowance} />
            </div>

            <div className="mb-6 md:w-1/3">
                <label 
                className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="deduction">
                    Deduction
                </label>
            </div>
            <div className="mb-6 md:w-1/3">
                <input 
                className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400"
                type="deduction"
                value={props.deduction}
                placeholder="Deduction"
                onChange={props.handleDeduction} />
            </div>

            <div className="mb-6 md:w-1/3">
                <label 
                className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="gross_net">
                    Gross Net
                </label>
            </div>
            <div className="mb-6 md:w-1/3">
                <input 
                className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400"
                type="gross_net"
                value={props.gross_net}
                placeholder="Gross Net"
                onChange={props.handleGross_net} />
            </div>

            <div className="mb-6 md:w-1/3">
                <label 
                className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="date_start">
                    Date Start
                </label>
            </div>
            <div className="mb-6 md:w-1/3">
                <input 
                className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400"
                type="date_start"
                value={props.date_start}
                placeholder="Date Start"
                onChange={props.handleDate_start} />
            </div>

            <div className="mb-6 md:w-1/3">
                <label 
                className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="date_end">
                    Date End
                </label>
            </div>
            <div className="mb-6 md:w-1/3">
                <input 
                className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400"
                type="date_end"
                value={props.date_end}
                placeholder="Date End"
                onChange={props.handleDate_end} />
            </div>

            <div className="flex flex-col justify-center items-center md:auto">
                <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full"><a href="/payrolllist">SUBMIT</a></button>
            </div>
        </form>
    )
}
export default PayrollForm