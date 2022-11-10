function LogIn(props) {
  return(
    <div>
       <form onSubmit={props.handleSubmit}>
          <label htmlFor="email">Email</label><br/>
          <input type="email" value={props.email} placeholder="Email" onChange={props.handleEmail} /><br/>
          <label htmlFor="password">Password</label><br/>
          <input type="password" value={props.password} placeholder="Password" onChange={props.handlePassword} /><br/>
          <button>Submit</button>
        </form>
    </div>
  )
 }

 export default LogIn   