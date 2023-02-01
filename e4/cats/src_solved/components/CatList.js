import {useReducer, useEffect, useState } from 'react'
import store from '../stores/CatStore'
import Cat from './Cat'
import CatForm from './CatForm'

function CatList () {
	const [cats, setCats] = useState([])
	const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

	useEffect(() => {
		setCats(store.getCats())
		store.emitter.addListener('UPDATE', () => {
			setCats(store.getCats())
		})
	}, [])

	const addCat = (cat) => {
		store.addCat(cat);
	}
	
	const deleteCat = (id) => {		
		store.deleteCat(id);
		forceUpdate();	
	}
		
	return (
		<div>		
			<CatForm onAdd={addCat} 	/>	
			<p>A list of cats</p>	 
			{
				cats.map((e, i) => 
					<Cat  item={e} key={i} onDelete={deleteCat} />
				)
			}
		</div>
	)
}

export default CatList
