
function searchBook() {
    let id = document.getElementById("id").value;

    let book = books.find(b => b.id == id);

    if (book) {
        document.getElementById("result").innerHTML =
            "Book Found: " + book.name;
    } else {
        document.getElementById("result").innerHTML =
            "Book Not Found";
    }
}
