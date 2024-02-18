"use client";
import Input from "@/app/search/components/input/input";
import React, { useEffect, useState } from "react";
import SmallFilm from "@/component/small-film/small-film";
import { useSearchFilms } from "@/zustand/search-films-slice";
import Loading from "@/app/search/loading";
import styles from './search-container.module.css';

const SearchContainer = () => {
	const [value, setValue] = useState<string>('');
	const [valueLength, setValueLength] = useState<string>('');
	const [page, setPage] = useState<number>(1);
	const [viewButton, setViewButton] = useState<boolean>(false);
	const {films, clearFilm, getFilms, addFilm, total, status} = useSearchFilms();

	useEffect( () => {
		const button = total - (page * 10);
		if (button > 10) setViewButton(true);
		else  setViewButton(false);
	}, [total, page] );

	useEffect( () => {
		if (value.length !== valueLength.length || value !== valueLength) clearFilm();
		if (page > 1) {
			setValueLength(value);
			addFilm(value, page);
		}
	}, [page] );

	useEffect( () => {
		return () => {
			clearFilm();
			setValue('');
		}
	}, [] );

	const handleSubmit = () => {
		if (value.length !== valueLength.length || value !== valueLength) clearFilm();
		setValueLength(value);
		getFilms(value, page);
	};

	return (
		<div className={ styles.searchContainer }>
			<div className={ styles.wrapperSearchContainer }>
				<Input valueInput={ value } setValueInput={ setValue } onSubmit={ handleSubmit }/>
				{
					status === false ?
						null :
						status === 'loading' ?
							<Loading/> :
							status === 'no result' ?
								<p className={ styles.noResult }>Фильмы не найдены, попробуйте изменить критерии
									поиска</p> :
								<div className={ styles.wrapper }>
									{ films.map( film => <SmallFilm key={ film.id } film={ film }
																	alias={ 'popular-films' }/> ) }
								</div>
				}
			</div>
			{ viewButton &&
                <button onClick={ () => setPage( page => page + 1 ) } className={ styles.button }>Показать ещё
                </button> }
		</div>
	)
};

export default SearchContainer;