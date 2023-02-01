import { useState } from 'react'

function CatForm (props) {
	const {onAdd} = props;

	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [mass, setMass] = useState('');
 
	const addCat = (event) => {
		event.preventDefault();

		onAdd({
			name, 
			type, 
			mass
	  })

		setName('');
		setType('');
		setMass('');
		 
	}
 
	return (
	  <form>
			<p>Cat form</p>
				 <label>
				 Name:
				 <input type="text" name="name" id="name" onChange={(event) => setName(event.target.value)} value={name} />
				 </label>
				 <br />
				 <label>
				 Type:
				 <input type="text" name="type" id="type" onChange={(event) => setType(event.target.value)} value={type} />
				 </label>
				 <br />
				 <label>
				 Mass:
				 <input type="text" name="mass" id="mass" onChange={(event) => setMass(event.target.value)} value={mass} />
				 </label>
				 <br />
				 <input type="submit" value="add" id="add-button" onClick={addCat}/>
			</form>
	)
 }
 
 export default CatForm
 