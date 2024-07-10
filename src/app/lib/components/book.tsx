import { IBook } from "../types"

interface Props {
    params: IBook
}

export const Book = ({ params }: Props) => {
    return <div>
        <img src={params.photo} width='150px' height='170px'/>
        <b>{params.title}</b>
        <p>{params.author}</p>
        <p>{params.price}</p>
        <a href={`/book/${params.id}`}>Explore</a>
    </div>
}