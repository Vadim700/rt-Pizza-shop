import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import Pizza from '../models/Pizza';

import './styles.css';

interface AddPizzaFormProps {
	addPizza: (newPizza: Pizza) => void;
}

const initState = {
	title: '',
	price: '',
	img:'',  
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({addPizza}) => {
	const [newPizza, setNewPizza] =
		useState<{ title: string, price: string, img: string }>(initState);
	
	const handleChenge = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewPizza({
			...newPizza,
			[name]:value
		})
	}


	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		const { title, price, img } = newPizza;

		if (title && price && img) {
			addPizza({
				title,
				img,
				price: Number(price),
				id: Date.now()
			});
			setNewPizza(initState)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input 
				name='title'
				type='text'
				placeholder='Название'
				onChange={handleChenge}
				value={newPizza.title}
			/>
			<input 
				name='price'
				type='text'
				placeholder='Стоимость'
				onChange={handleChenge}
				value={newPizza.price}
			/>
			<input 
				name='img'
				type='text'
				placeholder='Изображение'
				onChange={handleChenge}
				value={newPizza.img}
			/>
			<button type='submit'>
				+ Добавить в меню
			</button>
		</form>
	)
}

export default AddPizzaForm;