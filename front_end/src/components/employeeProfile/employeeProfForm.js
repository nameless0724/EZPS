function EmployeeProfile(props) {
    return(
      <div className="flex item-center justify-center">
        <form className="w-full max-w-sm" onSubmit={props.handleSubmit}>
          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="employee_id">Employee ID</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="employee_id" value={props.employee_id} placeholder="Employee ID" onChange={props.handleEmployee_id} /> 
          </div>

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="last_name">Last Name</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="last_name" value={props.last_name} placeholder="Last name" onChange={props.handleLast_name} /> 
          </div>

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="first_name">First Name</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="first_name" value={props.first_name} placeholder="First Name" onChange={props.handleFirst_name} /> 
          </div>

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="middle_name">Middle Name</label> 
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="middle_name" value={props.middle_name} placeholder="Middle Name" onChange={props.handleMiddle_name} /> 
          </div>

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="date_hired">Date Hired</label> 
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="date_hired" value={props.date_hired} placeholder="Date Hired" onChange={props.handleDate_hired} /> 
          </div>

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="sss_num">SSS Number</label> 
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="sss_num" value={props.sss_num} placeholder="SSS Number" onChange={props.handleSss_num} /> 
          </div>

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="pagibig_num">Pag-ibig Number</label> 
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="pagibig_num" value={props.pagibig_num} placeholder="Pag-ibig Number" onChange={props.handlePagibig_num} /> 
          </div>

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="philhealth_num">Philhealth Number</label> 
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="philhealth_num" value={props.philhealth_num} placeholder="Philhealth Number" onChange={props.handlePhilhealth_num} /> 
          </div>

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"  htmlFor="tax_num">Tax Number</label> 
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="tax_num" value={props.tax_num} placeholder="Tax Number" onChange={props.handleTax_num} /> 
          </div>

          <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full">Submit</button>
        </form>  
      </div>
    )
   }
    
   export default EmployeeProfile