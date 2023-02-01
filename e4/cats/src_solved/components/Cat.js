function Cat (props) {
  let {item} = props

  const deleteCat = (event) => {
		// event.preventDefault();

    props.onDelete(item.id)

		 
	}

  return (
    <div>
    Hello, my name is <b>{item.name}</b>. I am a <b>{item.type}</b> and weigh <b>{item.mass}</b>
    <input type="submit" value="delete" id="add-button" onClick={deleteCat}/>
    </div>
  )
}

export default Cat
