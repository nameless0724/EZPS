function Allowance(props) {
    return(
      <div>
        <form onSubmit={props.handleSubmit}>
          <label htmlFor="employee_id">Employee ID</label><br/>
          <input type="employee_id" value={props.employee_id} placeholder="Employee ID" onChange={props.handleEmployee_id} /><br/>
          <label htmlFor="rice">Rice Allowance</label><br/>
          <input type="rice" value={props.rice} placeholder="Rice Allowance" onChange={props.handleRice} /><br/> 
          <label htmlFor="medical">Medical Allowance</label><br/>
          <input type="medical" value={props.medical} placeholder="Medical Allowance" onChange={props.handleMedical} /><br/> 
          <label htmlFor="clothing">Clothing Allowance</label><br/>
          <input type="clothing" value={props.clothing} placeholder="Clothing Allowance" onChange={props.handleClothing} /><br/>
          <label htmlFor="transportation">Transportation Allowance</label><br/>
          <input type="transportation" value={props.transportation} placeholder="Transportation Allowance" onChange={props.handleTransportation} /><br/>
          <label htmlFor="other">Other Allowance</label><br/>
          <input type="other" value={props.other} placeholder="Other Allowance" onChange={props.handleOther} /><br/>   
          <button>Submit</button>
        </form>
      </div>
    )
   }
    
   export default Allowance