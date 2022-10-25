function Profile(props) {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="user">Full name</label><br/>
                <input type="user" value={props.User} placeholder="User" onChange={props.handleUser} /><br/>
                <label htmlFor="sss">SSS no.</label><br/>
                <input type="sss" value={props.Sss} placeholder="SSS" onChange={props.handleSss} /><br/>
                <label htmlFor="pagibig">Pag-ibig no.</label><br/>
                <input type="pagibig" value={props.Pagibig} placeholder="Pag-ibig" onChange={props.handlePagIbig} /><br/>
                <label htmlFor="philhealth">Philhealth no.</label><br/>
                <input type="philhealth" value={props.Philhealth} placeholder="Philhealth" onChange={props.handlePhilhealth} /><br/>
                <label htmlFor="tax">Tax No.</label><br/>
                <input type="tax" value={props.Tax} placeholder="Tax" onChange={props.handleTax} /><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Profile