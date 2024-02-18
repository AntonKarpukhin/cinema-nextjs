import NotFound from "next/dist/client/components/not-found-error";
import { RequestMovieList } from "@/interfaces/main-films.interface";
import { FilmResponse, FilmsResponse } from "@/interfaces/film.interface";
import { SearchResult } from "@/interfaces/search.interface";

const baseUrl = process.env.NEXT_PUBLIC_DOMAIN
const token = process.env.NEXT_PUBLIC_TOKEN

const options = {
	method: 'GET',
	headers: {accept: 'application/json', 'X-API-KEY': `${token}`},
	next: {revalidate: 86400}
};

const baseResponse = async (res: Response) => {
	if (!res.ok) NotFound();
	return await res.json();
};

export const getBestFilms = async (page: number): Promise<RequestMovieList> => {
	const res = await fetch(`${baseUrl}/movie?page=${page}&limit=10&selectFields=id&selectFields=name&selectFields=year&selectFields=rating&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=top250&sortField=top250&sortType=1&lists=top250`, options);
	return await baseResponse( res );
};

export const getHonourableFilms = async (page: number): Promise<RequestMovieList> => {
	const res = await fetch(`${baseUrl}/movie?page=${page}&limit=10&selectFields=id&selectFields=name&selectFields=year&selectFields=rating&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=&sortField=name&sortType=1&lists=honourable_mentions_XXI`, options);
	return await baseResponse( res );
};

export const getPopularFilms = async (page: number): Promise<RequestMovieList> => {
	const res = await fetch(`${baseUrl}/movie?page=${page}&limit=10&selectFields=id&selectFields=name&selectFields=year&selectFields=rating&selectFields=genres&selectFields=countries&selectFields=poster&notNullFields=&sortField=name&sortType=1&lists=popular-films`, options);
	return await baseResponse( res );
};

export const getOneFilms = async (id: string): Promise<FilmResponse> => {
	const res = await fetch(`${baseUrl}/movie?page=1&limit=10&selectFields=id&selectFields=name&selectFields=year&selectFields=rating&selectFields=genres&selectFields=countries&selectFields=poster&selectFields=alternativeName&selectFields=description&selectFields=ageRating&selectFields=movieLength&selectFields=videos&selectFields=persons&selectFields=premiere&notNullFields=&sortField=id&sortType=1&id=${id}`, options);
	return await baseResponse( res );
};

export const getCollectionsFilms = async (collection: string, page: number): Promise<FilmsResponse> => {
	const res = await fetch(`${baseUrl}/movie?page=${page}&limit=10&selectFields=id&selectFields=rating&selectFields=name&selectFields=description&selectFields=premiere&selectFields=poster&selectFields=year&selectFields=genres&selectFields=countries&selectFields=ageRating&selectFields=persons&selectFields=alternativeName&selectFields=movieLength&selectFields=videos&genres.name=${collection}`, options);
	return await baseResponse( res );
};

export const getCollectionsAllStars = async (collection: string, page: number): Promise<FilmsResponse> => {
	const res = await fetch(`${baseUrl}/movie?page=${page}&limit=10&selectFields=id&selectFields=name&selectFields=description&selectFields=rating&selectFields=premiere&selectFields=year&selectFields=poster&selectFields=genres&selectFields=alternativeName&selectFields=countries&selectFields=persons&selectFields=videos&selectFields=ageRating&selectFields=movieLength&sortField=name&sortType=1&lists=${collection}`, options);
	return await baseResponse( res );
};

export const getSearchFilms = async (search: string, page: number): Promise<SearchResult> => {
	const res = await fetch(`${baseUrl}/movie/search?page=${page}&limit=10&query=${search}`, options);
	return await baseResponse( res );
};