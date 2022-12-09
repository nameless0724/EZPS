function LogIn(props) {
  return(
    <div>
       <form onSubmit={props.handleSubmit}>
          <label htmlFor="employee_id">Employee ID</label><br/>
          <input type="employee_id" value={props.employee_id} placeholder="Employee ID" onChange={props.handleEmployee_id} /><br/>
          <label htmlFor="user_name">User Name</label><br/>
          <input type="user_name" value={props.user_name} placeholder="User Name" onChange={props.handleUser_name} /><br/>
          <label htmlFor="password">Password</label><br/>
          <input type="password" value={props.password} placeholder="Password" onChange={props.handlePassword} /><br/>
          <button>Submit</button>
        </form>
    </div>
  )
 }

 export default LogIn  