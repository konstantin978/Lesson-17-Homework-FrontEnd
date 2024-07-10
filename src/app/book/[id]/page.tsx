import { getBooks } from "@/app/lib/api";
import { notFound } from "next/navigation";

interface IProps {
    params: {
        id: number,
        title: string,
        photo: string
    };
}

export default async function Page(props: IProps) {

    const books = await getBooks()
    // const temp = books.some(book => book.id == props.params.id)
    // if(!temp) {
    //     notFound()
    // }
    const book = books.find(book => book.id == props.params.id)
    if(!book){
        notFound()
    }
    return <>
        <p className="is-size-3 p-6 m-6">Book Name` {book.title}</p>
        <img className="is-size-3 m-6" src={book.photo} width='300px' height='400px'/>
    </>
}