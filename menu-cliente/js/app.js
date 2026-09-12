/* Archivo: js/app.js (guardar dentro de menu-cliente/js/) */
const baseDeDatos = {
    'el-rey': {
        nombre: '🍔 Lomitería "El Rey"',
        colorPrincipal: '#e65100',
        platos: [
            { id: 1, category: 'lomitos', name: 'Lomito Árabe Completo', desc: 'Carne vacuna, lechuga, tomate, salsa de ajo, papas fritas', price: 'Gs. 25.000', icon: '🌯' },
            { id: 2, category: 'lomitos', name: 'Lomito de Pollo', desc: 'Pechuga grillé, queso muzzarella, huevo, vegetales', price: 'Gs. 22.000', icon: '🍗' },
            { id: 3, category: 'hamburguesas', name: 'Hamburguesa Doble Smash', desc: 'Doble carne de 100g, doble cheddar, panceta, salsa especial', price: 'Gs. 30.000', icon: '🍔' },
            { id: 4, category: 'bebidas', name: 'Coca-Cola 500ml', desc: 'Bien helada', price: 'Gs. 8.000', icon: '🥤' }
        ]
    },
    'roma': {
        nombre: '🍕 Pizzería Roma',
        colorPrincipal: '#d32f2f',
        platos: [
            { id: 1, category: 'pizzas', name: 'Pizza Pepperoni', desc: 'Muzzarella y pepperoni', price: 'Gs. 45.000', icon: '🍕' },
            { id: 2, category: 'bebidas', name: 'Cerveza Pilsen 3/4', desc: 'Retornable', price: 'Gs. 12.000', icon: '🍺' }
        ]
    }
};

const parametrosURL = new URLSearchParams(window.location.search);
let idLocal = parametrosURL.get('local');

if (!idLocal || !baseDeDatos[idLocal]) {
    idLocal = 'el-rey'; 
}

const datosDelCliente = baseDeDatos[idLocal];

document.querySelector('header h1').innerText = datosDelCliente.nombre;
document.documentElement.style.setProperty('--primary-color', datosDelCliente.colorPrincipal);

function renderMenu(items) {
    const container = document.getElementById('menu-container');
    container.innerHTML = ''; 
    items.forEach(item => {
        container.innerHTML += `
            <div class="item-card">
                <div class="item-img">${item.icon}</div>
                <div class="item-info">
                    <h3 class="item-title">${item.name}</h3>
                    <p class="item-desc">${item.desc}</p>
                    <p class="item-price">${item.price}</p>
                </div>
            </div>
        `;
    });
}

function filterMenu(category, clickedBtn) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    clickedBtn.classList.add('active');

    if (category === 'todos') {
        renderMenu(datosDelCliente.platos);
    } else {
        const filtered = datosDelCliente.platos.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

renderMenu(datosDelCliente.platos);