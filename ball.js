/* Source: https://www.superhi.com/video/smooth-movements-with-javascript Retrieved on 02/01/2020 */

const ball = document.querySelector("div.ball");

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.03;

function animate() {
	let distX = mouseX - ballX;
	let distY = mouseY - ballY;

	ballX = ballX + (distX * speed);
	ballY = ballY + (distY * speed);

	ball.style.left = ballX + "px";
	ball.style.top = ballY + "px";

	requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", function(event) {
	mouseX = event.pageX;
	mouseY = event.pageY;
})
