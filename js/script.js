// Datos completos de la malla (Semestres 1 al 10)
const malla = {
    "Semestre 1": [
        { nombre: "Matemática", desbloquea: ["Estadística", "Introducción a la física", "Cálculo"], prerreq: [] },
        { nombre: "Introducción a las ciencias farmacéuticas", desbloquea: [], prerreq: [] },
        { nombre: "Psicología general", desbloquea: [], prerreq: [] },
        { nombre: "Química general", desbloquea: ["Química inorgánica", "Química orgánica"], prerreq: [] },
        { nombre: "Biología general", desbloquea: ["Fisiología humana", "Microbiología general", "Farmacognosia y fitoterapia", "Bioquímica general"], prerreq: [] }
    ],
    "Semestre 2": [
        { nombre: "Estadística", desbloquea: ["Epidemiología y salud pública"], prerreq: ["Matemática"] },
        { nombre: "Introducción a la física", desbloquea: ["Fisicoquímica"], prerreq: ["Matemática"] },
        { nombre: "Química inorgánica", desbloquea: ["Química analítica cuali-cuantitativa", "Fisicoquímica"], prerreq: ["Química general"] },
        { nombre: "Química orgánica", desbloquea: ["Química orgánica avanzada", "Microbiología general"], prerreq: ["Química general"] },
        { nombre: "Anatomía", desbloquea: ["Fisiología humana"], prerreq: ["Biología general"] }
    ],
    "Semestre 3": [
        { nombre: "Epidemiología y salud pública", desbloquea: [], prerreq: ["Estadística"] },
        { nombre: "Cálculo", desbloquea: ["Fisicoquímica"], prerreq: ["Matemática"] },
        { nombre: "Química analítica cuali-cuantitativa", desbloquea: ["Análisis químico instrumental"], prerreq: ["Química inorgánica"] },
        { nombre: "Química orgánica avanzada", desbloquea: ["Farmacognosia y fitoterapia", "Bioquímica general"], prerreq: ["Química orgánica"] },
        { nombre: "Fisiología humana", desbloquea: ["Fisiopatología"], prerreq: ["Biología general", "Anatomía"] },
        { nombre: "Estrategias para el aprendizaje (formación integral I)", desbloquea: [], prerreq: [] }
    ],
    "Semestre 4": [
        { nombre: "Fisicoquímica", desbloquea: ["Tecnología farmacéutica I"], prerreq: ["Introducción a la física", "Química inorgánica", "Cálculo"] },
        { nombre: "Análisis químico instrumental", desbloquea: ["Tecnología farmacéutica I", "Fármaco química I"], prerreq: ["Química analítica cuali-cuantitativa"] },
        { nombre: "Farmacognosia y fitoterapia", desbloquea: ["Análisis de la evidencia científica I", "Fármaco química I", "Práctica atención primaria"], prerreq: ["Química orgánica avanzada"] },
        { nombre: "Microbiología general", desbloquea: ["Farmacología I", "Bioquímica clínica"], prerreq: ["Biología general", "Química orgánica"] },
        { nombre: "Fisiopatología", desbloquea: ["Farmacología I"], prerreq: ["Fisiología humana"] },
        { nombre: "Antropología (formación integral II)", desbloquea: [], prerreq: [] }
    ],
    "Semestre 5": [
        { nombre: "Tecnología farmacéutica I", desbloquea: ["Tecnología farmacéutica II"], prerreq: ["Fisicoquímica", "Análisis químico instrumental"] },
        { nombre: "Fármaco química I", desbloquea: ["Fármaco química II"], prerreq: ["Análisis químico instrumental", "Farmacognosia y fitoterapia"] },
        { nombre: "Análisis de la evidencia científica I", desbloquea: ["Análisis de la evidencia científica II"], prerreq: ["Farmacognosia y fitoterapia"] },
        { nombre: "Bioquímica general", desbloquea: ["Bioquímica clínica"], prerreq: ["Química orgánica avanzada"] },
        { nombre: "Farmacología I", desbloquea: ["Farmacología II"], prerreq: ["Microbiología general", "Fisiopatología"] },
        { nombre: "Ética (formación integral III)", desbloquea: [], prerreq: [] }
    ],
    "Semestre 6": [
        { nombre: "Tecnología farmacéutica II", desbloquea: ["Tecnología cosmética"], prerreq: ["Tecnología farmacéutica I"] },
        { nombre: "Fármaco química II", desbloquea: ["Práctica farmacia comunitaria"], prerreq: ["Fármaco química I"] },
        { nombre: "Análisis de la evidencia científica II", desbloquea: ["Práctica atención primaria", "Farmacia asistencial"], prerreq: ["Análisis de la evidencia científica I"] },
        { nombre: "Bioquímica clínica", desbloquea: ["Nutrición clínica", "Farmacocinética clínica", "Toxicología", "Farmacia clínica I"], prerreq: ["Bioquímica general"] },
        { nombre: "Farmacología II", desbloquea: ["Nutrición clínica", "Farmacocinética clínica", "Toxicología", "Farmacia clínica I", "Práctica atención primaria", "Farmacia asistencial"], prerreq: ["Farmacología I"] }
    ],
    "Semestre Verano 1": [
        { nombre: "Práctica atención primaria", desbloquea: ["Administración y gestión"], prerreq: ["Análisis de la evidencia científica II", "Farmacología II", "Farmacognosia y fitoterapia"] }
    ],
    "Semestre 7": [
        { nombre: "Tecnología cosmética", desbloquea: ["Control de calidad", "Bioequivalencia"], prerreq: ["Tecnología farmacéutica II"] },
        { nombre: "Nutrición clínica", desbloquea: ["Farmacia clínica II"], prerreq: ["Bioquímica clínica", "Farmacología II"] },
        { nombre: "Farmacocinética clínica", desbloquea: ["Bioequivalencia"], prerreq: ["Bioquímica clínica", "Farmacología II"] },
        { nombre: "Toxicología", desbloquea: ["Práctica farmacia comunitaria", "Farmacovigilancia y atención farmacéutica"], prerreq: ["Bioquímica clínica", "Farmacología II"] },
        { nombre: "Farmacia clínica I", desbloquea: ["Farmacia clínica II"], prerreq: ["Bioquímica clínica", "Farmacología II"] }
    ],
    "Semestre 8": [
        { nombre: "Control de calidad", desbloquea: ["Aseguramiento y gestión de calidad"], prerreq: ["Tecnología cosmética"] },
        { nombre: "Bioequivalencia", desbloquea: [], prerreq: ["Tecnología cosmética", "Farmacocinética clínica"] },
        { nombre: "Administración y gestión", desbloquea: ["Práctica farmacia comunitaria"], prerreq: ["Práctica atención primaria"] },
        { nombre: "Farmacia asistencial", desbloquea: [], prerreq: ["Análisis de la evidencia científica II", "Farmacología II"] },
        { nombre: "Farmacia clínica II", desbloquea: ["Farmacovigilancia y atención farmacéutica"], prerreq: ["Nutrición clínica", "Farmacia clínica I"] }
    ],
    "Semestre Verano 2": [
        { nombre: "Práctica farmacia comunitaria", desbloquea: ["Legislación farmacéutica y bioética"], prerreq: ["Fármaco química II", "Toxicología", "Administración y gestión"] }
    ],
    "Semestre 9": [
        { nombre: "Aseguramiento y gestión de calidad", desbloquea: [], prerreq: ["Control de calidad"] },
        { nombre: "Farmacovigilancia y atención farmacéutica", desbloquea: [], prerreq: ["Toxicología", "Farmacia clínica II"] },
        { nombre: "Legislación farmacéutica y bioética", desbloquea: [], prerreq: ["Práctica farmacia comunitaria"] },
        { nombre: "Internado farmacia asistencial", desbloquea: [], prerreq: ["Farmacia asistencial"] },
        { nombre: "Seminario de título", desbloquea: [], prerreq: [] }
    ],
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
            
            // Evento para toggle del acordeón
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

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', renderMalla);
