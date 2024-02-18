import { InputProps } from "@/app/search/components/input/input.props";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import styles from './input.module.css';

const Input = ({valueInput, setValueInput, onSubmit}: InputProps) => {

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValueInput(event.target.value);
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && onSubmit) {
			onSubmit( event );
		}
	};

	const handleImageClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
		if ( onSubmit ) {
			onSubmit( event );
		}
	};

	return (
		<div className={styles.wrapper}>
			<input value={valueInput} onChange={handleChange} onKeyUp={handleKeyPress} type="text" placeholder={ 'Поиск фильма' } className={ styles.input }/>
			<Image className={styles.img} onClick={handleImageClick} width={ 29 } height={ 29 } src={ '/loupe.svg' } alt={ 'Поиск' }></Image>
		</div>
	)
}

export default Input;