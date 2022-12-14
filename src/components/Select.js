
function Select(props) {
  return (
    <div className="styles.input_group">
        <span className="styles.span">{props.select}</span>
      <select 
      name={props.name}
      className="styles.input"
      value={props.value}
      onChange={props.onChange}
      >

        {props.context.map((el, index) => (
          <option key={index} value={index+1} className="styles.option">
            {el}
          </option>
        ))}
      </select>
      
    </div>
  );
}

export default Select