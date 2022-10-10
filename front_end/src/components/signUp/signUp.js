function SignUp(props) {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="email">Email</label><br/>
                <input type="email" value={props.Email} placeholder="Email" onChange={props.handleEmail} /><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password" value={props.Password} placeholder="Password" onChange={props.handlePassword} /><br/>
                <label htmlFor="user">Full name</label><br/>
                <input type="user" value={props.User} placeholder="User" onChange={props.handleUser} /><br/>
                <label htmlFor="id">Employee ID</label><br/>
                <input type="id" value={props.Id} placeholder="Employee ID" onChange={props.handleId} /><br/>
                <label htmlFor="sss">SSS no.</label><br/>
                <input type="sss" value={props.Sss} placeholder="SSS" onChange={props.handleSss} /><br/>
                <label htmlFor="pagibig">Pag-ibig no.</label><br/>
                <input type="pagibig" value={props.Pagibig} placeholder="Pag-ibig" onChange={props.handlePagIbig} /><br/>
                <label htmlFor="philhealth">Philhealth no.</label><br/>
                <input type="philhealth" value={props.Philhealth} placeholder="Philhealth" onChange={props.handlePhilhealth} /><br/>
                <label htmlFor="tax">Tax No.</label><br/>
                <input type="tax" value={props.Tax} placeholder="Tax" onChange={props.handleTax} /><br/>
                <button>Register</button>
            </form>
        </div>
    )
}

export default SignUp