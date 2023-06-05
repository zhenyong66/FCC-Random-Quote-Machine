// Global Variable used to store the quotes
// fetched from the API
var data;

// Getting the front and the back author boxes
const authors = document.querySelectorAll("#author");

// Getting the front and the back texts
const texts = document.querySelectorAll("#quote-text");

const quoteAuthor = authors[0];

const quoteText = texts[0];

// An arrow function used to get a quote randomly
const displayQuote = () =>{
	// Generates a random number between 0
	// and the length of the dataset
	let index = Math.floor(Math.random()*data.length);

	// Stores the quote present at the randomly generated index
	let quote = data[index].text;

	// Stores the author of the respective quote
	let author = data[index].author;

	// Making the author anonymous if no author is present
	if(!author){
		author = "Anonymous"
	}

	// Replacing the current quote and the author with a new one
		quoteText.innerHTML = quote;
		quoteAuthor.innerHTML = author;
}

// Fetching the quotes from the type.fit API using promises
fetch("https://type.fit/api/quotes")
	.then(function(response) {
		return response.json();
	}) // Getting the raw JSON data
	.then(function(data) {

		// Storing the quotes internally upon
		// successful completion of request
		this.data = data;

		// Displaying the quote When the Webpage loads
		displayQuote()
});

// Adding an onclick listener for the button
function newQuote(){
	// Displaying a new quote when the webpage loads
	displayQuote();
}
