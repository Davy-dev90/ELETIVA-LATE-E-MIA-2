const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const homeButton = document.getElementById('home-btn');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const feedbackElement = document.getElementById('feedback');
const resultsElement = document.getElementById('results');
const scoreTextElement = document.getElementById('score-text');
const attemptsTextElement = document.getElementById('attempts-text');
const startScreenElement = document.getElementById('start-screen');
const quizElement = document.getElementById('quiz');
const progressElement = document.getElementById('progress');

let questions, currentQuestionIndex, score, attempts;

const questionSet = [{
    question: "Qual é a temperatura corporal normal de um cão saudável?", 
    answers: [{ text: "37,5°C - 39,2°C", correct: true },
            { text: "35,5°C - 36,5°C", correct: false },
            { text: "40,5°C - 41,5°C", correct: false },
            { text: "42,0°C - 43,0°C", correct: false }
        ],
        explanation: "A temperatura normal para cães varia entre 37,5°C e 39,2°C. Valores abaixo podem indicar hipotermia e acima, febre. A aferição deve ser feita via retal com termômetro digital.",
},
{
        question: "Qual destes animais é um herbívoro??",
        answers: [
            { text: "Gato", correct: false },
            { text: "Coelho", correct: true },
            { text: "Cão", correct: false },
            { text: "Furão", correct: false }
        ],
        explanation: "Coelhos são herbívoros estritos, com sistema digestivo adaptado para fibras."
    },
     {
      question: "Qual é o período de gestação médio de uma gata?",
      answers: [
        {text: "30 dias",correct:false},
        {text: "120 dias",correct:false},
        {text: "90 dias",correct:false},
       { text: "58-67 dias",correct:true}
      ],
      explanation: "O período gestacional em gatas varia de 58 a 67 dias (média de 63 dias). Menos que isso caracteriza prematuridade e mais pode indicar distocia.",
    },
    {
      question: "Qual vitamina é produzida na pele de animais quando exposta à luz solar?",
      answers: [
    {text:"Vitamina A",correct: false},
    {text:"Vitamina C",correct:false},
    {text:"Vitamina D",correct: true},
    {text: "Vitamina K",correct: false}
      ],
      explanation: "A vitamina D3 (colecalciferol) é sintetizada na pele através da ação dos raios UVB. É essencial para metabolismo cálcio-fósforo e saúde óssea."
    },
    {
      question: "Qual destes é um sinal clínico comum de dor em animais?",
      answers: [
        {text: "Apetite aumentado",correct: false},
        {text: "Lamência", correct: true},
        {text: "Hiperatividade", correct: false},
        {text: "Latidos constantes", correct:false}
      ],
      explanation: "A lamência é um sinal universal de dor musculoesquelética. Animais com dor geralmente apresentam redução de apetite e atividade, não aumento."
    },
    {
        question: "Qual é o principal agente etiológico da cinomose canina?",
        answers: [
            {text: "Bactéria", correct:false},
            {text: "Fungo", correct: false},
            {text:"Vírus", correct:true},
            {text: "Protozoário", correct:false}
        ],
        explanation: "A cinomose é causada por um Morbillivirus da família Paramyxoviridae. É altamente contagiosa e afeta múltiplos sistemas (respiratório, digestivo, nervoso)."
    },
    {
        question: "Qual destas raças caninas é mais predisposta à displasia coxofemoral?",
        answers: [
            {text: "Chihuahua", correct:false},
            {text: "Pastor Alemão", correct:true},
            {text: "Greyhound",correct:false},
            {text: "Dachshund",correct:false}
        ],
        explanation: "Raças grandes como Pastor Alemão têm maior predisposição devido ao rápido crescimento e peso. A displasia é uma má-formação da articulação quadril-fêmur."
    },
    {
        question: "Qual é o antídoto para intoxicação por warfarina em animais?",
        answers: [
            {text: "Vitamina K",correct:true},
            {text: "Atropina", correct:false},
            {text: "Carvão ativado", correct: false},
            {text: "Ácido acetilsalicílico", correct: false}
        ],
        explanation: "A warfarina é um anticoagulante que inibe a vitamina K. Seu antídoto é a vitamina K1 (fitomenadiona), que restaura os fatores de coagulação II, VII, IX e X."
    },
    {
        question: "Qual destes parasitas é transmitido pelo carrapato?",
        answers: [
            {text: "Dirofilaria immitis",correct: false},
            {text: "Ehrlichia canis", correct:true},
            {text: "Toxocara canis", correct:false},
            {text: "Giardia lamblia", correct: false}
        ],
        explanation: "Ehrlichia canis causa erliquiose, transmitida pelo carrapato Rhipicephalus sanguineus. Dirofilaria é por mosquito, Toxocara por via oral e Giardia por água/alimento contaminado."
    },
    {
        question: "Em qual espécie animal a torção gástrica é mais comum?",
        answers: [
            {text: "Gatos siameses", correct:false},
            {text: "Pássaros canoros", correct: false},
            {text: "Coelhos anões",correct:false},
            {text: "Cães de grande porte", correct:true}
        ],
        explanation: "Cães de grande porte com tórax profundo (como Dogue Alemão, São Bernardo) têm maior risco. A torção requer intervenção cirúrgica imediata e é potencialmente fatal."
    },
    {
        question: "Qual é o mecanismo de ação do propofol como anestésico?",
        answers: [
            {text: "Bloqueio dos canais de sódio", correct:false},
            {text: "Ativação dos receptores GABA-A", correct:true},
            {text: "Inibição da acetilcolinesterase", correct: false},
            {text: "Bloqueio dos receptores NMDA", correct:false}
        ],
        explanation: "O propofol potencia a ação inibitória do GABA no SNC, causando hiperpolarização neuronal. É um anestésico intravenoso de ação rápida e recuperação rápida."
    },
    {
        question: "Qual destes parâmetros é usado para classificar o estágio da doença renal crônica em gatos segundo a IRIS?",
        answers: [
            {text: "Nível de glicose sanguínea", correct:false},
            {text: "Contagem de plaquetas", correct:false},
            {text: "Tempo de protrombina", correct:false},
            {text: "Creatinina sérica", correct:true}
        ],
        explanation: "A IRIS (International Renal Interest Society) classifica a DRC em 4 estágios baseados na creatinina sérica: <1.6 (I), 1.6-2.8 (II), 2.9-5.0 (III), >5.0 mg/dL (IV)."
    },
    {
        question: "Qual é o principal neurotransmissor envolvido na síndrome do tremor branco em cães?",
        answers: [
            {text: "Dopamina", correct:false},
            {text: "Serotonina", correct:false},
            {text: "Glicina", correct:true},
            {text: "Glutamato", correct:false}
        ],
        explanation: "A síndrome do tremor branco (ou shaker syndrome) envolve deficiência de glicina, neurotransmissor inibitório. Causa tremores generalizados respondendo a corticosteroides."
    },
    {
        question: "Em medicina veterinária, qual técnica de imagem utiliza radiofármacos como o tecnécio-99m?",
        answers: [
            {text: "Cintilografia", correct:true},
            {text: "Ultrassonografia Doppler", correct:false},
            {text: "Ressonância magnética", correct:false},
            {text: "Radiografia digital", correct:false}
        ],
        explanation: "A cintilografia (medicina nuclear) usa radiofármacos emissores de radiação gama. O Tc-99m é usado para avaliar perfusão óssea, tireoide e função renal."
    },
    {
        question: "Qual destas enzimas cardíacas tem meia-vida mais longa e é útil para diagnóstico tardio de infarto do miocárdio em animais?",
        answers: [
            {text: "CK-MB", correct:false},
            {text: "AST", correct:false},
            {text: "LDH", correct:false},
            {text: "Troponina I", correct:true}
        ],
        explanation: "A troponina I cardíaca (cTnI) permanece elevada por 5-7 dias pós-infarto, enquanto CK-MB normaliza em 24-48h. É o marcador mais específico de lesão miocárdica."
    },
    {
        question: "Qual a vacina anual obrigatória para cães?",
        answers: [
            { text: "Febre amarela", correct: false },
            { text: "V8 ou V10 e antirrábica", correct: true },
            { text: "Tétano", correct: false },
            { text: "Brucelose", correct: false }
        ],
        explanation: "Vacinas V8 e V10 para cães protegem contra doenças como cinomose, parvovirose e leptospirose. A V10 cobre mais tipos de leptospirose (4) que a V8 (2), sendo ideal para áreas de risco. Filhotes começam a vacinação com 6-8 semanas (reforços até 16 semanas) e adultos precisam de dose anual. V8 para cães urbanos, V10 para áreas com roedores/água parada – ambas essenciais, já que leptospirose também afeta humanos."
    },
    {
    question: "Os gatos são carnívoros, onívoros ou herbívoros?",
        answers: [
            { text: "Carnívoros estritos", correct: true },
            { text: "Onívoros", correct: false },
            { text: "Herbívoros", correct: false },
            { text: "Frugívoros", correct: false }
            ],
        explanation: "Gatos são carnívoros estritos, ou seja, dependem essencialmente de proteína animal para sobreviver. Seu organismo não metaboliza bem vegetais e necessita de nutrientes como taurina (encontrada apenas em carne) para manter a saúde."
    },
    {
        question: "Qual o método mais comum para castração de cadelas?",
        answers: [
            { text: "Laparoscopia", correct: false },
            { text: "Vasectomia", correct: false },
            { text: "Ovariohisterectomia", correct: true },
            { text: "Hormônios anticoncepcionais", correct: false }
        ],
        explanation: "O método mais comum de castração em cadelas é a ovariohisterectomia (retirada do útero e ovários) por cirurgia tradicional (aberta), feita sob anestesia geral. É seguro, previne doenças e reprodução. "
    },
    {
        question: "Qual desses alimentos é tóxico para cães?",
        answers: [
            { text: "Maçã", correct: false },
            { text: "Uva", correct: true },
            { text: "Cenoura", correct: false },
            { text: "Arroz cozido", correct: false }
        ],
        explanation: "Sim, uvas (e passas) são tóxicas para cães, podendo causar insuficiência renal aguda mesmo em pequenas quantidades. Nunca ofereça!"
    },
    {
        question: "Qual a frequência cardíaca normal para um gato adulto?",
        answers: [
            { text: "60-80 bpm", correct: false },
            { text: "120-140 bpm", correct: false },
            { text: "140-220 bpm", correct: true },
            { text: "40-60 bpm", correct: false }
        ],
        explanation: "A frequência cardíaca normal de um gato adulto é entre 140 e 220 batimentos por minuto (em repouso). Valores fora dessa faixa exigem avaliação veterinária. "
    },
    {
        question: "Qual parasita causa 'verme do coração' em cães?",
        answers: [
            { text: "Giardia", correct: false },
            { text: "Ancylostoma", correct: false },
            { text: "Toxocara canis", correct: false },
            { text: "Dirofilaria immitis", correct: true }
        ],
        explanation: "O parasita que causa o 'verme do coração' em cães é o Dirofilaria immitis, transmitido por picada de mosquito. Prevenção com antiparasitários é essencial!"
    },
    {
    question: "Qual anestésico pode causar hipertermia maligna em porcos?",
        answers: [
            { text: "Succinilcolina", correct: true },
            { text: "Halotano", correct: false },
            { text: "Propofol", correct: false },
            { text: "Isoflurano", correct: false }
        ],
        explanation: "A succinilcolina pode desencadear hipertermia maligna em porcos, uma reação grave com risco de vida. Evite seu uso nessa espécie!"
    },
    {
        question: "Em aves, qual estrutura é usada para administração de fluidos intraósseos?",
        answers: [
            { text: "Fêmur", correct: false },
            { text: "Úmero", correct: false },
            { text: "Quilha do esterno", correct: false },
            { text: "Crista tibial", correct: true }
        ],
        explanation: "A crista tibial é o local preferido para acesso intraósseo em aves."
    },
    {
        question: "Qual desses é um marcador precoce de lesão renal em gatos?",
        answers: [
            { text: "Uréia", correct: false },
            { text: "Creatinina", correct: false },
            { text: "SDMA", correct: true },
            { text: "ALT", correct: false }
        ],
        explanation: "A SDMA (dimetilarginina simétrica) é um marcador precoce de lesão renal em gatos, detectando alterações antes da creatinina. "
    },
    {
        question: "Qual a dose de atropina para reanimação cardiopulmonar em cães (mg/kg)?",
        answers: [
            { text: "0,01-0,02", correct: false },
            { text: "0,04-0,06", correct: true },
            { text: "0,1-0,2", correct: false },
            { text: "1-2", correct: false }
        ],
        explanation: "Dose de atropina em PCR é maior (0,04-0,06 mg/kg IV) que a convencional."
    },

]



startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', startGame);
homeButton.addEventListener('click', goHome);

function startGame() {
    score = 0;
    attempts = 0;
    questions = [...questionSet];
    currentQuestionIndex = 0;
    
    startScreenElement.classList.add('hide');
    resultsElement.classList.add('hide');
    quizElement.classList.remove('hide');
    
    showQuestion();
}

function goHome() {
    quizElement.classList.add('hide');
    resultsElement.classList.add('hide');
    startScreenElement.classList.remove('hide');
}

function showQuestion() {
    resetState();
    const question = questions[currentQuestionIndex];
    progressElement.textContent = `Pergunta ${currentQuestionIndex + 1}/${questions.length}`;
    questionElement.textContent = question.question;
    
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    feedbackElement.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    attempts++;

    if (correct) {
        score++;
        selectedButton.classList.add('correct');
        
        // Mostra feedback explicativo
        feedbackElement.textContent = questions[currentQuestionIndex].explanation;
        feedbackElement.classList.remove('hide');
        
        // Desabilita todos os botões
        Array.from(answerButtonsElement.children).forEach(button => {
            button.disabled = true;
            button.classList.add('disabled');
        });
        
        // Mostra botão próxima pergunta
        nextButton.classList.remove('hide');
    } else {
        selectedButton.classList.add('incorrect');
        selectedButton.disabled = true;
        selectedButton.classList.add('disabled');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizElement.classList.add('hide');
    resultsElement.classList.remove('hide');
    scoreTextElement.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
    attemptsTextElement.textContent = `Total de tentativas: ${attempts}`;
}