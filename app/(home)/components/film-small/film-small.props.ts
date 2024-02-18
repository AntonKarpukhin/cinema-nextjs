import { HTMLAttributes } from "react";
import { Film } from "@/interfaces/film.interface";


export interface FilmSmallProps extends HTMLAttributes<HTMLDivElement> {
	film: Film;
}