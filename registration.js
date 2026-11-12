
let books = [];

function registerBook() {
    let name = document.getElementById("book").value;
    let id = document.getElementById("id").value;

    if (name == "" || id == "") {
        alert("Enter book details");
        return;
    }

    books.push({name: name, id: id});

    document.getElementById("result").innerHTML =
        "Book Registered Successfully";
}
