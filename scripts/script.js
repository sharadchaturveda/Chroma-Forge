// script.js
document.getElementById('generate').addEventListener('click', generatePalette);
document.getElementById('download').addEventListener('click', downloadPalette);

function generatePalette() {
    const baseColor = document.getElementById('baseColor').value;
    const paletteContainer = document.getElementById('palette');
    const suggestionsContainer = document.getElementById('suggestions');
    
    paletteContainer.innerHTML = ''; // Clear previous palette
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    const colors = [];
    for (let i = 0; i < 5; i++) {
        const color = getColorFromBase(baseColor, i);
        colors.push(color);
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        paletteContainer.appendChild(colorDiv);
    }

    provideSuggestions(colors);
}

function getColorFromBase(baseColor, index) {
    let color = baseColor;
    return adjustColorBrightness(color, index * 20 - 40); // Adjust brightness by index
}

function adjustColorBrightness(hex, percent) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    r = Math.min(255, Math.max(0, r + percent));
    g = Math.min(255, Math.max(0, g + percent));
    b = Math.min(255, Math.max(0, b + percent));

    return `#${(1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase()}`;
}

function provideSuggestions(colors) {
    const suggestionsContainer = document.getElementById('suggestions');
    
    const suggestions = [
        "Use these colors to create a visually appealing website.",
        "Incorporate these shades into your app’s UI design.",
        "These palettes are great for graphic design and branding.",
        "Experiment with these colors for your next creative project.",
        "Combine these colors to make a stylish and cohesive look."
    ];

    suggestionsContainer.innerHTML = '<h2>Suggestions:</h2>';
    suggestions.forEach(suggestion => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.textContent = suggestion;
        suggestionsContainer.appendChild(suggestionDiv);
    });
}

function downloadPalette() {
    html2canvas(document.getElementById('palette')).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'palette.png';
        link.click();
    });
}
function generatePalette() {
    const baseColor = document.getElementById('baseColor').value;
    const paletteContainer = document.getElementById('palette');
    const suggestionsContainer = document.getElementById('suggestions');
    
    paletteContainer.innerHTML = ''; // Clear previous palette
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions

    const colors = [];
    for (let i = 0; i < 5; i++) {
        const color = getColorFromBase(baseColor, i);
        colors.push(color);
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        colorDiv.dataset.color = color;
        colorDiv.addEventListener('click', copyColorToClipboard);
        paletteContainer.appendChild(colorDiv);
    }

    provideSuggestions(colors);
}

function copyColorToClipboard(event) {
    const color = event.target.dataset.color;
    navigator.clipboard.writeText(color).then(() => {
        alert(`Color ${color} copied to clipboard!`);
    });
}
// script.js
particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        }
    },
    "retina_detect": true
});
