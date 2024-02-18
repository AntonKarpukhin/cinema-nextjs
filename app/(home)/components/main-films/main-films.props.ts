import { HTMLAttributes } from "react";
import { Film } from "@/interfaces/film.interface";


export interface MainFilmsProps extends HTMLAttributes<HTMLDivElement> {
	films: Film[];
}