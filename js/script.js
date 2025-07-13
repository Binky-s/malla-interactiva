// Datos completos de la malla
const malla = {
    "Semestre 1": [
        { nombre: "Matemática", desbloquea: ["Estadística", "Introducción a la física", "Cálculo"], prerreq: [] },
        { nombre: "Introducción a las ciencias farmacéuticas", desbloquea: [], prerreq: [] },
        { nombre: "Psicología general", desbloquea: [], prerreq: [] },
        { nombre: "Química general", desbloquea: ["Química inorgánica", "Química orgánica"], prerreq: [] },
        { nombre: "Biología general", desbloquea: ["Fisiología humana", "Microbiología general", "Farmacognosia y fitoterapia", "Bioquímica general"], prerreq: [] }
    ],
    // ... (Agrega aquí todos los semestres restantes igual que en el ejemplo anterior)
    "Semestre 10": [
        { nombre: "Internado a elección", desbloquea: [], prerreq: [] },
        { nombre: "Seminario de título", desbloquea: [], prerreq: [] }
    ]
};

// Función para renderizar la malla
function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';

    for (const [semestre, cursos] of Object.entries(malla)) {
        const semestreDiv = document.createElement('div');
        semestreDiv.className = 'semester';
        semestreDiv.innerHTML = `<h2><i class="fas fa-book"></i> ${semestre}</h2>`;
        
        cursos.forEach((curso, index) => {
            const cursoId = semestre.replace(/\s+/g, '-') + '-' + index;
            const cursoDiv = document.createElement('div');
            cursoDiv.className = 'course';
            cursoDiv.id = cursoId;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'check-' + cursoId;
            checkbox.dataset.nombre = curso.nombre;
            checkbox.checked = localStorage.getItem(curso.nombre) === 'true';
            checkbox.disabled = !checkPrereqs(curso.prerreq);
            
            checkbox.addEventListener('change', function() {
                localStorage.setItem(this.dataset.nombre, this.checked);
                updateMalla();
            });
            
            const label = document.createElement('label');
            label.htmlFor = 'check-' + cursoId;
            label.textContent = curso.nombre;
            label.addEventListener('click', function(e) {
                if (e.target.tagName !== 'INPUT') {
                    this.classList.toggle('active');
                    const prereq = this.parentNode.querySelector('.prereq');
                    const unlocks = this.parentNode.querySelector('.unlocks');
                    prereq.classList.toggle('visible');
                    unlocks.classList.toggle('visible');
                }
            });
            
            const prereqSpan = document.createElement('div');
            prereqSpan.className = 'prereq';
            prereqSpan.textContent = curso.prerreq.length > 0 ? 
                `Prerrequisitos: ${curso.prerreq.join(', ')}` : 'Sin prerrequisitos';
            
            const unlocksSpan = document.createElement('div');
            unlocksSpan.className = 'unlocks';
            unlocksSpan.textContent = curso.desbloquea.length > 0 ? 
                `Desbloquea: ${curso.desbloquea.join(', ')}` : 'No desbloquea ramos';
            
            cursoDiv.appendChild(checkbox);
            cursoDiv.appendChild(label);
            cursoDiv.appendChild(prereqSpan);
            cursoDiv.appendChild(unlocksSpan);
            
            if (checkbox.disabled) {
                cursoDiv.classList.add('locked');
            } else {
                cursoDiv.classList.add('unlocked');
            }
            
            semestreDiv.appendChild(cursoDiv);
        });
        
        container.appendChild(semestreDiv);
    }
}

// Función para verificar prerrequisitos
function checkPrereqs(prerreq) {
    return prerreq.every(req => {
        return localStorage.getItem(req) === 'true';
    });
}

// Actualizar la malla
function updateMalla() {
    renderMalla();
}

// Inicializar
document.addEventListener('DOMContentLoaded', renderMalla);
