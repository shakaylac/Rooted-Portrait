const dropdown = document.createElement('div');
dropdown.classList.add('dropdown');
//droupdown.style.display = 'none'; // Initially hidden
dropdown.style.width = '60%';
dropdown.style.height = 'auto';
dropdown.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
dropdown.style.backgroundColor = '#ffffff';
dropdown.style.padding = '10px 0';
dropdown.style.position = 'absolute';
dropdown.style.top = '60px';
dropdown.style.left = '20%';
dropdown.style.zIndex = '5';
dropdown.style.textAlign = 'left';
dropdown.style.borderRadius = '10px';

document.body.appendChild(dropdown);

function toggleNav() {
dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';      
}
dropdown.innerHTML = `
    <a href="#">Home</a>
    <a href="#">Gallery</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <a href="#">Book Now</a>
`;

