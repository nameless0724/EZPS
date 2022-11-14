function Attendance(props) {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="user">User</label><br/>
                <input type="user" value={props.user} placeholder="Email" onChange={props.handleUser} /><br/>
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