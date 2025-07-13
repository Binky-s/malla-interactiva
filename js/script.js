// Datos completos de la malla
const malla = {
    "Semestre 1": [
        { nombre: "Matemática", desbloquea: ["Estadística", "Introducción a la física", "Cálculo"], prerreq: [] },
        { nombre: "Introducción a las ciencias farmacéuticas", desbloquea: [], prerreq: [] },
        { nombre: "Psicología general", desbloquea: [], prerreq: [] },
        { nombre: "Química general", desbloquea: ["Química inorgánica", "Química orgánica"], prerreq: [] },
        { nombre: "Biología general", desbloquea: ["Fisiología humana", "Microbiología general", "Farmacognosia y fitoterapia", "Bioquímica general"], prerreq: [] }
    ],
    // ... (Todos los demás semestres igual que antes)
    "Semestre 10": [
        { nombre: "Internado a elección", desbloquea: [], prerreq: [] },
        { nombre: "Seminario de título", desbloquea: [], prerreq: [] }
    ]
};

// Función para verificar prerrequisitos
function checkPrereqs(prerreq) {
    return prerreq.every(req => localStorage.getItem(req) === 'true');
}

// Función principal para renderizar
function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';

    Object.entries(malla).forEach(([semestre, cursos], semIndex) => {
        const semestreDiv = document.createElement('div');
        semestreDiv.className = 'semester';
        semestreDiv.innerHTML = `<h2>${semestre}</h2>`;
        
        cursos.forEach((curso, cursoIndex) => {
            const cursoId = `curso-${semIndex}-${cursoIndex}`;
            const cursoDiv = document.createElement('div');
            
            // Configurar checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `check-${cursoId}`;
            checkbox.dataset.nombre = curso.nombre;
            checkbox.checked = localStorage.getItem(curso.nombre) === 'true';
            checkbox.disabled = !checkPrereqs(curso.prerreq);
            
            checkbox.addEventListener('change', function() {
                localStorage.setItem(this.dataset.nombre, this.checked);
                updateMalla();
            });

            // Configurar label
            const label = document.createElement('label');
            label.htmlFor = `check-${cursoId}`;
            label.textContent = curso.nombre;
            label.addEventListener('click', function(e) {
                if (e.target.tagName !== 'INPUT') {
                    this.parentNode.querySelector('.prereq').classList.toggle('visible');
                    this.parentNode.querySelector('.unlocks').classList.toggle('visible');
                }
            });

            // Info de prerrequisitos y desbloqueos
            const prereqSpan = document.createElement('div');
            prereqSpan.className = 'prereq';
            prereqSpan.textContent = curso.prerreq.length > 0 
                ? `Prerrequisitos: ${curso.prerreq.join(', ')}` 
                : 'Sin prerrequisitos';

            const unlocksSpan = document.createElement('div');
            unlocksSpan.className = 'unlocks';
            unlocksSpan.textContent = curso.desbloquea.length > 0 
                ? `Desbloquea: ${curso.desbloquea.join(', ')}` 
                : 'No desbloquea ramos';

            // Aplicar clases según estado
            cursoDiv.className = 'course ' + (checkbox.checked ? 'unlocked' : 'locked');
            cursoDiv.appendChild(checkbox);
            cursoDiv.appendChild(label);
            cursoDiv.appendChild(prereqSpan);
            cursoDiv.appendChild(unlocksSpan);
            
            semestreDiv.appendChild(cursoDiv);
        });

        container.appendChild(semestreDiv);
    });
}

function updateMalla() {
    renderMalla();
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderMalla();
    
    // Solución temporal para cache
    const cssLink = document.querySelector('link[href*="styles.css"]');
    if (cssLink) cssLink.href += '?v=' + Date.now();
});
