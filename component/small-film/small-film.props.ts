import { RequestSmallFilm } from "@/interfaces/main-films.interface";
import { HTMLAttributes } from "react";

export interface SmallFilmProps extends HTMLAttributes<HTMLDivElement>{
	film: RequestSmallFilm;
	alias: string;
}