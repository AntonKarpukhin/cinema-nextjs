import { HTMLAttributes } from "react";

export interface CollectionsItemProps extends HTMLAttributes<HTMLAnchorElement>{
	name: string;
	slug: string;
	img?: string;
}