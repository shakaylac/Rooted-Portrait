const navBtn = document.querySelector('.nav-btn');
const dropdown = document.createElement('div');
dropdown.classList.add('dropdown');
dropdown.style.display = 'none'; // Initially hidden
dropdown.style.width = '25%';
dropdown.style.height = '40vh';
dropdown.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
dropdown.style.backgroundColor = '#ffffff';
dropdown.style.padding = '10px 0';
dropdown.style.position = 'absolute';
dropdown.style.top = '15vh';
dropdown.style.right = '0px';
dropdown.style.zIndex = '5';
dropdown.style.textAlign = 'left';
dropdown.style.borderRadius = '10px';
dropdown.innerHTML = `
    <a href="#">Home</a>
    <a href="#">Gallery</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
    <a href="#">Book Now</a>
`;
const links = dropdown.querySelectorAll('a');
links.forEach(a => {
    a.style.display = 'block';
    a.style.width = '100%';
    a.style.padding = '10px 20px';
    a.style.textDecoration = 'none';
    a.style.color = '#333333';
    a.style.fontSize = '18px';
    a.style.hoverBackgroundColor = '#f0f0f0';
    a.addEventListener('mouseover', () => {
        a.style.backgroundColor = '#f0f0f0';
    });
    a.addEventListener('mouseout', () => {
        a.style.backgroundColor = 'transparent';
    });
});

document.body.appendChild(dropdown);

function toggleNav() {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}



