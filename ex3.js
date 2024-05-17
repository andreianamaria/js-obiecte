// Creați o șir de obiecte în care fiecare obiect descrie o carte și are proprietăți precum 
// titlu (un șir de caractere - string), 
// autor (un șir de caractere - string) și 
// esteCitită (un boolean care indică dacă ați citit-o)
// Scrieți o funcție care: Iterează prin gama de cărți.
// Pentru fiecare carte se afișează titlul și autorul cărții astfel: “Hobbitul de J.R.R. Tolkien”.
// Utilizează o instrucțiune if / else ce modifică rezultatul, în funcție de faptul că ați citit-o sau nu. 
// Dacă cartea a fost citită, se afișează cu ajutorul functiei console.log un mesaj de tipul “Ai citit deja “Hobbitul” de J.R.R. Tolkien”, iar 
// dacă nu, se afișează un mesaj de tipul “Trebuie să citești “Hobbitul” de J.R.R. Tolkien”.

const outputMessage = (title, author, isRead) => {
    if (isRead) {
      return `Ai citit deja "${title}", de ${author}`;
    }
    return `Trebuie să citești "${title}", de ${author}`;
  }
  
  const iterateBooks = (books) => {
    for (const book of books) {
      if (book.hasOwnProperty('title') 
        && book.hasOwnProperty('author') 
        && book.hasOwnProperty('isRead')) {
        console.log(`Cartea "${book.title}" de ${book.author}`);
        console.log(outputMessage(book.title, book.author, book.isRead));
      }
    }
  }
  
  const books = [ 
    { title: "Amintiri din Copilarie", author: "Ion Creanga", isRead: true }, 
    { title: "Fram ursul polar", author: "Cezar Petrescu", isRead: false }, 
    { title: "Secretul Vraciului", author: "Joseph Delaney", isRead: true }, 
  ];
  
  iterateBooks(books);