import { HTMLAttributes } from "react";
import { Film } from "@/interfaces/film.interface";


export interface FilmItemProps extends HTMLAttributes<HTMLDivElement> {
	film: Film;
}