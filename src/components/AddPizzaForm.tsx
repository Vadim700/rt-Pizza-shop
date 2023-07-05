import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import './styles.css';

const initState = {
	title: '',
	price: '',
	img:'',  
}

const AddPizzaForm: FC = () => {
	const [newPizza, setNewPizza] =
		useState<{ title: string, price: string, img: string }>(initState);
	
	const handleChenge = (e: ChangeEvent<HTMLInputElement>) => {
		console.log('handle change >> ', e.target)
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('handle change >> ', e.target)
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