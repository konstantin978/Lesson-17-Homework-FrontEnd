import styles from "./page.module.css";
import { Book } from "./lib/components/book";
import { getBooks } from "./lib/api";

export default async function Home() {

  const books = await getBooks()

  return (
    <main className={styles.main + ' is-flex-direction-row'}>
      <h1>Books</h1>
      {
        books.map(book => <div key={book.id}>
          <Book params={book} />
        </div>)
      }
    </main>
  )
}
