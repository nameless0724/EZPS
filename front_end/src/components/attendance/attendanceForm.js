function Attendance(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="last_name">Last Name</label><br/>
                <input type="last_name" value={props.last_name} placeholder="Last Name" onChange={props.handleLast_name} /><br/>
                <label htmlFor="first_name">First Name</label><br/>
                <input type="first_name" value={props.first_name} placeholder="First Name" onChange={props.handleFirst_name} /><br/>
                <label htmlFor="middle_name">Middle Name</label><br/>
                <input type="middle_name" value={props.middle_name} placeholder="Middle Name" onChange={props.handleMiddle_name} /><br/>
                <label htmlFor="date">Date</label><br/>
                <input type="date" value={props.date} placeholder="Date" onChange={props.handleDate} /><br/>
                <label htmlFor="hour">Hour</label><br/>
                <input type="hour" value={props.hour} placeholder="Hour" onChange={props.handleHour} /><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Attendance