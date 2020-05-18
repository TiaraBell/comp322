/* Source: https://www.superhi.com/video/how-to-make-a-hover-slideshow Retrieved on 02/01/2020 */

const slideshow = document.querySelector("section.slideshow");
const images = slideshow.querySelectorAll("img");

slideshow.addEventListener("mousemove", function(event) {
  //console.log(event);
  const x = event.offsetX;
  const width = 900;
  const percentage = x / width;
  const imageNumber = Math.floor(percentage * images.length);
  images.forEach(function(image) {
    image.style.zIndex = 0;
   });
   images[imageNumber].style.zIndex = 1;

});
