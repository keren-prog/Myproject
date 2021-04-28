
function InputField(props){
    return(
        
        <div >
        <label>{props.label}</label>
        <input 
        type={props.type} 
        placeholder={props.placeholder} 
        onChange={props.onchange}
        className={props.className}
                />
      </div>


    )
}
export default InputField;