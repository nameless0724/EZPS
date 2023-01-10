function Deduction(props) {
    return(
      <div>
        <form className="w-full max-w-sm" onSubmit={props.handleSubmit}>
          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="employee_id">Employee ID</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="employee_id" value={props.employee_id} placeholder="Employee ID" onChange={props.handleEmployee_id} />
          </div><br />
          
          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="absent_amount">Absent Deduction</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="absent_amount" value={props.absent_amount} placeholder="Absent Deduction" onChange={props.handleAbsent_amount} />
          </div><br />

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="sss_contribution">SSS Contribution</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="sss_contribution" value={props.sss_contribution} placeholder="SSS Contribution" onChange={props.handleSss_contribution} />
          </div><br/>

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="pagibig_contribution">Pag-ibig Contribution</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="pagibig_contribution" value={props.pagibig_contribution} placeholder="Pag-ibig Contribution" onChange={props.handlePagibig_contribution} />
          </div><br/>

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="philhealth_contribution">Philhealth Contribution</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="philhealth_contribution" value={props.philhealth_contribution} placeholder="Philhealth Contribution" onChange={props.handlePhilhealth_contribution} />
          </div><br/>

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="tax_contribution">Tax Contribution</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="tax_contribution" value={props.tax_contribution} placeholder="Tax Contribution" onChange={props.handleTax_contribution} />
          </div><br />

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="other">Other</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="other" value={props.other} placeholder="Other" onChange={props.handleOther} />
          </div><br/>   
                 
          <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full">Submit</button>
        </form>
      </div>
    )
   }
    
   export default Deduction