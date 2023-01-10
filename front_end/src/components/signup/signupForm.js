function SignUp(props) {
    return(
      <div>
        <form  className="w-full max-w-sm" onSubmit={props.handleSubmit}>
          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="employee_id">Employee ID</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="employee_id" value={props.employee_id} placeholder="Employee ID" onChange={props.handleEmployee_id} /><br/>
          </div><br />

          <div className="md:w-1/3">
            <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="user_name">User Name</label>
          </div>
          <div className="md:w-1/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="user_name" value={props.user_name} placeholder="User Name" onChange={props.handleUser_name} /><br/>
          </div><br />
          
          <div className="md:w-1/3">
          <label className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">Password</label>
          </div>
          <div className="md:w-1/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400" type="password" value={props.password} placeholder="Password" onChange={props.handlePassword} /><br/>
          </div><br />

          <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full">Submit</button>

        </form>
      </div>
    )
   }
    
   export default SignUp