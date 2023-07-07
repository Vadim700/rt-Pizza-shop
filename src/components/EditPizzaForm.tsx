import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import Pizza from '../models/Pizza';

import './styles.css';

interface EditPizzaFormProps {
	data: Pizza;
	updatePizza: (newPizza: Pizza) => void;
	handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> =
	({ data, updatePizza, handleToggleEdit }) => {
	const [editPizza, setEditPizza] = useState<Pizza>(data);
	
	const handleChenge = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setEditPizza({
			...editPizza,
			[name]:value
		})
	}
	


	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { title, price, img } = editPizza;

		if (title && price && img) {
			updatePizza(editPizza);
			handleToggleEdit();
			}
		}

		return (
			<form className='edit-form' onSubmit={handleSubmit}>
				<input 
					name='title'
					type='text'
					placeholder='Название'
					onChange={handleChenge}
					value={editPizza.title}
				/>
				<input 
					name='price'
					type='text'
					placeholder='Стоимость'
					onChange={handleChenge}
					value={editPizza.price}
				/>
				<input 
					name='img'
					type='text'
					placeholder='Изображение'
					onChange={handleChenge}
					value={editPizza.img}
				/>
				<button type='submit'>
					Подтвердить
				</button>
			</form>
	)
}

export default EditPizzaForm;