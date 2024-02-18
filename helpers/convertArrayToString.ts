import { collectionsData } from "@/helpers/data";

export const convertArrayToString = (str: string) => {
	for (let value of collectionsData) {
		if (value.slug === str) return value.name;
	}
	return null;
}