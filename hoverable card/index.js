const card = document.querySelector(".card");
const cardTitles = document.querySelectorAll(".card-title");
const colorLines = document.querySelectorAll(".color-line");

const numberOfCharacters = 50;

(() => {
	Array.from(cardTitles).map((title, index) => {
		const text = title.innerHTML;
		title.innerHTML =
			text.length > numberOfCharacters ? text.substring(0, numberOfCharacters) + "..." : text;
		const titleWidth = window.getComputedStyle(title).width;
		colorLines[index].style.setProperty("width", `calc(var(--padding) + ${titleWidth})`);
	});
	console.log("bruh");
})();
