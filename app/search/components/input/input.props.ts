import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";

export interface InputProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	valueInput: string;
	setValueInput: Dispatch<SetStateAction<string>>;
}