import { readFile } from "fs/promises";
import { IBook } from "./types";

export const getBooks = async ():Promise<IBook[]> => {

    const data = await readFile('books.json', 'utf-8')
    if(data) {
        return JSON.parse(data)
    }
    return []
}
