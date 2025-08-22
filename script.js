

// ================== QUESTIONS =================
// Copy your easyQuestions, mediumQuestions, hardQuestions here (same as before)
// ================== EASY QUESTIONS (30) =================
const easyQuestions = [
  { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "None"], answer: 0 },
  { q: "Which tag is used to display an image in HTML?", options: ["&lt;image&gt;", "&lt;img&gt;", "&lt;src&gt;", "&lt;pic&gt;"], answer: 1 },
  { q: "Which tag creates a hyperlink?", options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"], answer: 0 },
  { q: "HTML5 introduced which semantic tag?", options: ["&lt;div&gt;", "&lt;section&gt;", "&lt;font&gt;", "&lt;center&gt;"], answer: 1 },
  { q: "Which attribute is used for alternate text in &lt;img&gt;?", options: ["src", "alt", "title", "href"], answer: 1 },
  { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style System", "Colorful Style Script", "None"], answer: 0 },
  { q: "Which property sets the text color?", options: ["font", "color", "background", "text"], answer: 1 },
  { q: "Which symbol is used for an ID selector?", options: [".", "#", "*", "&"], answer: 1 },
  { q: "Which property controls the text size?", options: ["font-size", "text-style", "size", "font"], answer: 0 },
  { q: "Which property makes text bold?", options: ["style", "font-weight", "bold", "text"], answer: 1 },
  { q: "Which class makes a button blue in Bootstrap?", options: ["btn btn-blue", "btn btn-primary", "btn main", "btn btn-info"], answer: 1 },
  { q: "Which Bootstrap grid system uses how many columns?", options: ["10", "12", "16", "8"], answer: 1 },
  { q: "Which class makes text center aligned?", options: ["text-left", "text-center", "align-center", "center"], answer: 1 },
  { q: "Bootstrap is mainly a?", options: ["CSS Framework", "JS Framework", "Database", "Programming Language"], answer: 0 },
  { q: "Which class makes an image responsive?", options: ["img-fluid", "img-responsive", "img-auto", "img-scale"], answer: 0 },
  { q: "Which symbol is used for comments in JS?", options: ["#", "//", "/*", "&lt;!--"], answer: 1 },
  { q: "Which keyword declares a variable?", options: ["int", "var", "string", "def"], answer: 1 },
  { q: "Which method shows an alert box?", options: ["alert()", "msg()", "popup()", "show()"], answer: 0 },
  { q: "Which operator checks equality without type conversion?", options: ["==", "===", "=", "!="], answer: 1 },
  { q: "JavaScript is executed in?", options: ["Server", "Database", "Browser", "Compiler"], answer: 2 },
  { q: "Java was developed by?", options: ["Microsoft", "Oracle", "Sun Microsystems", "Google"], answer: 2 },
  { q: "Which keyword defines a class in Java?", options: ["function", "define", "class", "object"], answer: 2 },
  { q: "Which method is the entry point in Java?", options: ["start()", "init()", "main()", "run()"], answer: 2 },
  { q: "Java is?", options: ["Compiled", "Interpreted", "Both", "None"], answer: 2 },
  { q: "Which symbol is used to end statements in Java?", options: [".", ",", ";", ":"], answer: 2 },
  { q: "Which tag creates a table row in HTML?", options: ["&lt;td&gt;", "&lt;tr&gt;", "&lt;table&gt;", "&lt;th&gt;"], answer: 1 },
  { q: "CSS property for background color?", options: ["color", "bg-color", "background", "background-color"], answer: 3 },
  { q: "Which class adds padding in Bootstrap?", options: ["m-3", "p-3", "padding-3", "pad-3"], answer: 1 },
  { q: "Which function converts string to int in JS?", options: ["toInt()", "parseInt()", "int()", "convert()"], answer: 1 },
  { q: "Which keyword creates an object in Java?", options: ["new", "create", "make", "init"], answer: 0 }
];

// ================== MEDIUM QUESTIONS (30) =================
const mediumQuestions = [
  { q: "Which tag is used for embedding JavaScript in HTML?", options: ["&lt;link&gt;", "&lt;script&gt;", "&lt;style&gt;", "&lt;js&gt;"], answer: 1 },
  { q: "Which attribute opens link in new tab?", options: ["target='_blank'", "href='new'", "open='tab'", "window='new'"], answer: 0 },
  { q: "Which input type is used for selecting multiple options?", options: ["radio", "checkbox", "select", "dropdown"], answer: 1 },
  { q: "Which HTML tag defines a navigation link?", options: ["&lt;nav&gt;", "&lt;navigate&gt;", "&lt;menu&gt;", "&lt;dir&gt;"], answer: 0 },
  { q: "Which attribute is used in forms to send data?", options: ["send", "method", "action", "url"], answer: 2 },
  { q: "Which CSS property sets element spacing inside border?", options: ["margin", "padding", "spacing", "gap"], answer: 1 },
  { q: "Which CSS position keeps element relative to browser window?", options: ["relative", "absolute", "fixed", "static"], answer: 2 },
  { q: "Which CSS unit is relative to parent font size?", options: ["px", "em", "rem", "%"], answer: 1 },
  { q: "Which CSS selector selects all &lt;p&gt; inside &lt;div&gt;?", options: ["div+p", "div p", "div&gt;p", "div:p"], answer: 1 },
  { q: "Which CSS property sets text shadow?", options: ["shadow", "box-shadow", "text-shadow", "filter"], answer: 2 },
  { q: "Which class makes a button red in Bootstrap?", options: ["btn-danger", "btn-red", "btn-error", "btn-stop"], answer: 0 },
  { q: "Which class makes content responsive container?", options: ["container-fluid", "container", "container-responsive", "fluid"], answer: 0 },
  { q: "Which class hides element only on small devices?", options: ["d-none d-sm-block", "d-sm-none", "invisible", "hidden-sm"], answer: 1 },
  { q: "Which Bootstrap component is used for navigation?", options: ["navbar", "menu", "list", "navlink"], answer: 0 },
  { q: "Bootstrap uses which CSS preprocessor?", options: ["LESS", "SASS", "Stylus", "None"], answer: 1 },
  { q: "Which method converts JSON string to object?", options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "parseJSON()"], answer: 0 },
  { q: "Which keyword defines a block-scoped variable?", options: ["var", "let", "const", "both let and const"], answer: 3 },
  { q: "Which function is used to delay execution in JS?", options: ["setTimeout()", "setInterval()", "delay()", "sleep()"], answer: 0 },
  { q: "Which array method removes last element?", options: ["shift()", "pop()", "remove()", "delete()"], answer: 1 },
  { q: "Which JS framework is maintained by Facebook?", options: ["Angular", "Vue", "React", "Node"], answer: 2 },
  { q: "Which keyword prevents inheritance in Java?", options: ["static", "final", "const", "sealed"], answer: 1 },
  { q: "Which package contains Scanner class?", options: ["java.io", "java.util", "java.lang", "java.text"], answer: 1 },
  { q: "Which Java collection allows duplicates?", options: ["Set", "Map", "List", "TreeSet"], answer: 2 },
  { q: "Which concept allows methods with same name but different parameters?", options: ["Overriding", "Overloading", "Polymorphism", "Abstraction"], answer: 1 },
  { q: "Which keyword is used for inheritance?", options: ["extends", "implements", "inherit", "super"], answer: 0 },
  { q: "Which HTML attribute specifies inline styles?", options: ["style", "css", "design", "font"], answer: 0 },
  { q: "CSS property to change cursor?", options: ["cursor", "pointer", "mouse", "hover"], answer: 0 },
  { q: "Which Bootstrap class creates a dropdown?", options: ["dropdown", "menu", "select", "drop"], answer: 0 },
  { q: "Which JS loop executes at least once?", options: ["for", "while", "do-while", "for-in"], answer: 2 },
  { q: "Which Java access modifier gives maximum visibility?", options: ["private", "protected", "default", "public"], answer: 3 }
];

// ================== HARD QUESTIONS (30) =================
const hardQuestions = [
  { q: "Which HTML5 API allows offline web apps?", options: ["Cache API", "Web Workers", "Web Storage", "Service Workers"], answer: 3 },
  { q: "Which input type provides a date picker?", options: ["text", "date", "calendar", "datetime"], answer: 1 },
  { q: "Which tag is used for scalable vector graphics?", options: ["&lt;svg&gt;", "&lt;canvas&gt;", "&lt;vector&gt;", "&lt;graphics&gt;"], answer: 0 },
  { q: "Which HTML5 feature supports real-time communication?", options: ["WebSocket", "LocalStorage", "Cookies", "SessionStorage"], answer: 0 },
  { q: "Which attribute in &lt;form&gt; specifies character encoding?", options: ["charset", "enctype", "encoding", "method"], answer: 1 },
  { q: "Which CSS property creates a grid layout?", options: ["display: flex", "display: grid", "grid-template", "layout: grid"], answer: 1 },
  { q: "Which CSS feature allows variables?", options: ["CSS3 Vars", "Custom Properties", "SASS only", "None"], answer: 1 },
  { q: "Which CSS function applies transformations?", options: ["transform", "translate", "skew", "rotate"], answer: 0 },
  { q: "Which pseudo-class selects the first child?", options: [":first", ":first-child", ":child-first", ":nth(1)"], answer: 1 },
  { q: "Which property defines stacking order?", options: ["z-index", "stack", "order", "layer"], answer: 0 },
  { q: "Which Bootstrap class makes a table responsive?", options: ["table-responsive", "table-fluid", "table-auto", "table-mobile"], answer: 0 },
  { q: "Which Bootstrap utility sets flexbox direction?", options: ["flex-row", "flex-direction", "flex", "row"], answer: 0 },
  { q: "Which class creates modal dialogs?", options: ["modal", "dialog", "popup", "window"], answer: 0 },
  { q: "Bootstrap 5 dropped support for?", options: ["jQuery", "CSS Grid", "Flexbox", "SASS"], answer: 0 },
  { q: "Which Bootstrap class makes content hidden visually but accessible for screen readers?", options: ["sr-only", "invisible", "hidden", "d-none"], answer: 0 },
  { q: "Which JS feature allows async operations?", options: ["Promises", "Callbacks", "Async/Await", "All"], answer: 3 },
  { q: "Which method stops event bubbling?", options: ["stopPropagation()", "preventDefault()", "stopBubble()", "cancel()"], answer: 0 },
  { q: "Which data type is returned by typeof null?", options: ["null", "undefined", "object", "string"], answer: 2 },
  { q: "Which operator is used for exponentiation?", options: ["^", "**", "exp()", "pow"], answer: 1 },
  { q: "Which method is used to bind 'this' keyword?", options: ["bind()", "apply()", "call()", "all of these"], answer: 3 },
  { q: "Which Java keyword is used for multiple inheritance (interfaces)?", options: ["extends", "implements", "inherits", "super"], answer: 1 },
  { q: "Which Java feature ensures security from pointers?", options: ["Garbage Collection", "JVM", "Bytecode", "No explicit pointers"], answer: 3 },
  { q: "Which collection doesn’t allow duplicates?", options: ["List", "Set", "Queue", "ArrayList"], answer: 1 },
  { q: "Which keyword is used to call parent constructor?", options: ["super", "this", "parent", "base"], answer: 0 },
  { q: "Which exception is checked?", options: ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"], answer: 1 },
  { q: "Which HTML element is used for client-side storage (5MB)?", options: ["localStorage", "sessionStorage", "cookies", "cache"], answer: 0 },
  { q: "CSS Grid property to define rows?", options: ["grid-template-rows", "grid-rows", "row-template", "rows"], answer: 0 },
  { q: "Which Bootstrap class centers content flexibly?", options: ["justify-content-center", "text-center", "align-items-center", "center"], answer: 0 },
  { q: "Which JS object handles regular expressions?", options: ["Regex", "RegExp", "Match", "Pattern"], answer: 1 },
  { q: "Which Java keyword is used for thread synchronization?", options: ["sync", "synchronized", "threadsafe", "lock"], answer: 1 }
];
// ================== VARIABLES =================
let shuffledQuestions = [], currentQuestion = 0, score = 0, warnings = 0, timerInterval, globalInterval;
let timeLeft = 60, globalTime = 1800, answers = [];
const detailsPage = document.getElementById('detailsPage'), rulesPage = document.getElementById('rulesPage');
const quizPage = document.getElementById('quizPage'), questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options'), nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn'), resultEl = document.getElementById('result');
const progressBar = document.getElementById('progressBar'), timerEl = document.getElementById('timer');
const globalTimerEl = document.getElementById('globalTimer'), studentInfo = document.getElementById('studentInfo');
const reviewDiv = document.getElementById('reviewAnswers'), examTypeSelect = document.getElementById('examType');
const resumeOverlay = document.getElementById("resumeOverlay"), webcam = document.getElementById("webcam");
const cameraStatus = document.getElementById("cameraStatus");
let model;

// ================== HELPERS =================
function shuffleArray(array){ return array.sort(()=>Math.random()-0.5); }

// ================== FLOW =================
function showRules(){
    const name = document.getElementById('name').value.trim();
    const roll = document.getElementById('roll').value.trim();
    const examType = examTypeSelect.value;
    if(!name||!roll||!examType){ alert("Please fill all details and select exam type!"); return; }
    localStorage.setItem("studentName", name);
    localStorage.setItem("studentRoll", roll);
    localStorage.setItem("examType", examType);
    detailsPage.classList.add("hidden");
    rulesPage.classList.remove("hidden");
}

async function startExam(){
    await enterFullscreen();
    rulesPage.classList.add("hidden"); quizPage.classList.remove("hidden");
    studentInfo.innerHTML = `<b>${localStorage.getItem("studentName")}</b> (ID: ${localStorage.getItem("studentRoll")}) - <i>${localStorage.getItem("examType").toUpperCase()} Mode</i>`;
    
    let examType = localStorage.getItem("examType");
    if(examType==="easy") shuffledQuestions=shuffleArray([...easyQuestions]);
    else if(examType==="medium") shuffledQuestions=shuffleArray([...mediumQuestions]);
    else shuffledQuestions=shuffleArray([...hardQuestions]);
    
    currentQuestion=0; score=0; answers=[];
    loadQuestion(); tabSecurity(); submitBtn.style.display="block";
    await initCamera();

    // Global timer
    globalInterval = setInterval(()=>{
        globalTime--; let m=Math.floor(globalTime/60), s=globalTime%60;
        globalTimerEl.textContent = `Exam Time: ${m}:${s<10?'0'+s:s}`;
        if(globalTime<=0){ clearInterval(globalInterval); submitTest(); }
    },1000);
}

function loadQuestion(){
    clearInterval(timerInterval); timeLeft=60; timerEl.textContent=`Q Time: ${timeLeft}s`;
    timerInterval = setInterval(updateTimer,1000);
    const q = shuffledQuestions[currentQuestion]; questionEl.textContent = (currentQuestion+1)+". "+q.q;
    optionsEl.innerHTML="";
    let optionObjects = q.options.map((opt,i)=>({text:opt,isCorrect:i===q.answer}));
    optionObjects = shuffleArray(optionObjects);
    optionObjects.forEach(optObj=>{
        const btn = document.createElement('button');
        btn.classList.add('btn','btn-outline-secondary','option-btn');
        btn.textContent=optObj.text;
        btn.onclick=()=>selectAnswer(btn,optObj.isCorrect);
        optionsEl.appendChild(btn);
    });
    nextBtn.style.display="none"; progressBar.style.width=((currentQuestion+1)/shuffledQuestions.length)*100+"%";
}

function updateTimer(){ timeLeft--; timerEl.textContent=`Q Time: ${timeLeft}s`;
    if(timeLeft<=0){ clearInterval(timerInterval);
        answers.push({q:shuffledQuestions[currentQuestion].q, chosen:"Not Answered", correct:shuffledQuestions[currentQuestion].options[shuffledQuestions[currentQuestion].answer]});
        autoNext();
    }
}

function autoNext(){ currentQuestion++;
    if(currentQuestion<shuffledQuestions.length) loadQuestion(); else submitTest();
}

function selectAnswer(selectedBtn,isCorrect){
    clearInterval(timerInterval);
    const buttons=document.querySelectorAll('.option-btn'); buttons.forEach(btn=>btn.disabled=true);
    if(isCorrect){ selectedBtn.classList.remove('btn-outline-secondary'); selectedBtn.classList.add('correct'); score++; 
        answers.push({q:shuffledQuestions[currentQuestion].q, chosen:selectedBtn.textContent, correct:selectedBtn.textContent}); }
    else { selectedBtn.classList.remove('btn-outline-secondary'); selectedBtn.classList.add('wrong'); 
        buttons.forEach(btn=>{ if(btn.textContent===shuffledQuestions[currentQuestion].options[shuffledQuestions[currentQuestion].answer]) btn.classList.add('correct'); });
        answers.push({q:shuffledQuestions[currentQuestion].q, chosen:selectedBtn.textContent, correct:shuffledQuestions[currentQuestion].options[shuffledQuestions[currentQuestion].answer]});
    }
    nextBtn.style.display="block";
}

nextBtn.addEventListener('click',autoNext);

// ================== SUBMIT & RESULTS =================
function submitTest(){
    clearInterval(timerInterval); clearInterval(globalInterval);
    questionEl.style.display="none"; optionsEl.style.display="none"; nextBtn.style.display="none"; submitBtn.style.display="none";
    progressBar.style.width="100%"; timerEl.style.display="none"; globalTimerEl.style.display="none";
    
    let percent=((score/shuffledQuestions.length)*100).toFixed(2);
    resultEl.innerHTML=`Your Score: ${score}/${shuffledQuestions.length} (${percent}%)`;

    reviewDiv.classList.remove("hidden"); reviewDiv.innerHTML="<h4>Review Answers:</h4>";
    answers.forEach((a,i)=>{ reviewDiv.innerHTML+=`<p><b>Q${i+1}:</b> ${a.q}<br>Your Answer: ${a.chosen}<br>Correct Answer: ${a.correct}</p><hr>`; });

    setTimeout(()=>{ if(document.fullscreenElement) document.exitFullscreen().catch(e=>console.log(e)); },200);
    stopCamera();
    downloadPDF();
}

// ================== PDF DOWNLOAD =================
function downloadPDF(){
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text("Tech Aptitude Test Result",10,10);
    doc.text(`Name: ${localStorage.getItem("studentName")}`,10,20);
    doc.text(`Roll/ID: ${localStorage.getItem("studentRoll")}`,10,30);
    doc.text(`Score: ${score}/${shuffledQuestions.length}`,10,40);
    let y=50;
    answers.forEach((a,i)=>{
        doc.text(`Q${i+1}: ${a.q}`,10,y); y+=5;
        doc.text(`Your Answer: ${a.chosen}`,10,y); y+=5;
        doc.text(`Correct Answer: ${a.correct}`,10,y); y+=10;
        if(y>270){ doc.addPage(); y=10; }
    });
    doc.save("Exam_Result.pdf");
}

// ================== TAB & FULLSCREEN SECURITY =================
function tabSecurity(){ document.addEventListener("visibilitychange",()=>{
    if(document.hidden){ warnings++; alert(`⚠ Warning ${warnings}: Do not switch tabs!`);
        if(warnings>=2){ alert("❌ Test auto-submitted due to multiple violations."); submitTest(); }
    }
}); }

async function enterFullscreen(){
    let elem=document.documentElement;
    if(elem.requestFullscreen) await elem.requestFullscreen();
    else if(elem.mozRequestFullScreen) await elem.mozRequestFullScreen();
    else if(elem.webkitRequestFullscreen) await elem.webkitRequestFullscreen();
    else if(elem.msRequestFullscreen) await elem.msRequestFullscreen();
}

function resumeFullscreen(){ enterFullscreen(); resumeOverlay.style.display="none"; }
document.addEventListener("visibilitychange",()=>{ if(!document.hidden&&!document.fullscreenElement) resumeOverlay.style.display="flex"; });
document.addEventListener("fullscreenchange",()=>{ if(!document.fullscreenElement) resumeOverlay.style.display="flex"; });

// ================== CAMERA & HUMAN DETECTION =================
async function initCamera(){
    try{
        const stream = await navigator.mediaDevices.getUserMedia({video:true});
        webcam.srcObject=stream;
        await new Promise(resolve=>{ webcam.onloadedmetadata=()=>{ resolve(); }; });
        cameraStatus.textContent="Camera active";
        model = await cocoSsd.load(); detectHuman();
    } catch(err){ cameraStatus.textContent="Camera access denied!"; alert("Camera access is required for exam security."); }
}

async function detectHuman(){
    const predictions = await model.detect(webcam);
    const humanDetected = predictions.some(pred=>pred.class==='person');
    if(!humanDetected){ warnings++; alert(`⚠ Warning ${warnings}: No human detected in camera!`); if(warnings>=2) submitTest(); }
    requestAnimationFrame(detectHuman);
}

function stopCamera(){
    const stream = webcam.srcObject;
    if(stream){ stream.getTracks().forEach(track=>track.stop()); webcam.srcObject=null; cameraStatus.textContent="Camera stopped"; }
}

// Disable right-click / refresh
document.addEventListener("contextmenu",e=>e.preventDefault());
document.onkeydown=function(e){ if(e.keyCode==123||(e.ctrlKey&&e.shiftKey&&e.keyCode=='I'.charCodeAt(0))) return false;
if(e.ctrlKey&&(e.keyCode===82||e.keyCode===116)) return false; };
window.onbeforeunload=function(){ return "Are you sure you want to leave? Your test will be submitted."; };
