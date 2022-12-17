const card = document.querySelector(".card");
const angle = 20;

(() => {
	// don't tilt on phone
	if (window.navigator.userAgentData.mobile) return;

	card.addEventListener("mousemove", (e) => {
		// width without margin
		const cardWidth = card.offsetWidth;
		const cardHeight = card.offsetHeight;

		// find center point
		const centerX = card.offsetLeft + cardWidth / 2;
		const centerY = card.offsetTop + cardHeight / 2;

		// find mouse relative position (with center as relative origin)
		const mouseX = e.clientX - centerX;
		const mouseY = e.clientY - centerY;

		// angle * percentage (y-axis is flipped so * -1)
		const rotateX = (angle * mouseY) / (cardHeight / 2);
		const rotateY = (-angle * mouseX) / (cardWidth / 2);

		card.style.setProperty("--rotateX", rotateX.toString() + "deg");
		card.style.setProperty("--rotateY", rotateY.toString() + "deg");
		card.style.setProperty("--scale", "1.05");
	});

	card.addEventListener("mouseout", (e) => {
		card.style.setProperty("--rotateX", "0deg");
		card.style.setProperty("--rotateY", "0deg");
		card.style.setProperty("--scale", "1");
	});
})();
