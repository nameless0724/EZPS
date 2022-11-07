function SignUp(props) {
    return(
      <div>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="email">Email</label><br/>
          <input type="email" value={props.Email} placeholder="Email" onChange={props.handleEmail} /><br/>
          <label htmlFor="password">Password</label><br/>
          <input type="password" value={props.Password} placeholder="Password" onChange={props.handlePassword} /><br/>
          <button>onSumbit</button>
        </form>
      </div>
    )
   }
  
   export default SignUp