function SignUp(props) {
    return(
      <div>
        <form onSubmit={props.handleSubmit}>
          <div className="input_container">
            <input type="employee_id" className="input" value={props.employee_id} placeholder="Employee ID" onChange={props.handleEmployee_id} /><br/>
            <label htmlFor="employee_id" className="label">Employee ID</label><br/>
          </div>

          <div className="input_container">
          <input type="user_name" className="input" value={props.user_name} placeholder="User Name" onChange={props.handleEmployee_id} /><br/>
            <label htmlFor="user_name" className="label">User Name</label><br/>
          </div>

          <div className="input_container">
            <input type="password" className="input" value={props.password} placeholder="Password" onChange={props.handlePassword} /><br/>
            <label htmlFor="password" className="label">Password</label><br/>
          </div>
          <button className="submit_btn">Submit</button>
        </form>
      </div>
    )
   }
    
   export default SignUp