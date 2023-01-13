const containerRef = document.getElementById('widget');
console.log("🚀 containerRef", containerRef);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
