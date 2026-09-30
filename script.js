const tasks=[
["📘","Data Structures","Binary Trees — 45 min"],
["💻","Java Programming","OOP concepts — 40 min"],
["🧮","Allied Mathematics","Practice problems — 30 min"],
["📝","Quick Revision","Review today's notes — 20 min"]
];
const list=document.getElementById("tasks");
tasks.forEach(t=>{
 const row=document.createElement("div");row.className="task";
 row.innerHTML=`<div class="task-left"><div class="task-icon">${t[0]}</div><div><b>${t[1]}</b><br><small>${t[2]}</small></div></div><input class="check" type="checkbox" onchange="toggleTask(this)">`;
 list.appendChild(row);
});
function toggleTask(x){x.closest(".task").classList.toggle("completed",x.checked)}
const tips=["Try active recall: close your notes and explain the topic from memory.","Study the hardest topic first while your attention is fresh.","After every session, write three things you learned.","Use practice questions instead of only rereading notes.","Keep your phone away for one focused study block."];
function newTip(){document.getElementById("tip").textContent=tips[Math.floor(Math.random()*tips.length)]}
function resource(x){const m={notes:"Smart Notes opened — create concise topic summaries.",quiz:"AI Quiz opened — generate practice questions from your subject.",exam:"Exam Prep opened — organize your revision by priority."};alert(m[x])}
function quick(x){document.getElementById("question").value=x;askAI()}
function addBubble(text,type){const c=document.getElementById("chat"),d=document.createElement("div");d.className="bubble "+type;d.textContent=text;c.appendChild(d);c.scrollTop=c.scrollHeight}
function askAI(){const i=document.getElementById("question"),q=i.value.trim();if(!q)return;addBubble(q,"user");i.value="";setTimeout(()=>addBubble(reply(q),"bot"),300)}
function reply(q){const s=q.toLowerCase();if(s.includes("oop"))return"OOP means Object-Oriented Programming. Its main ideas are class, object, inheritance, polymorphism, abstraction and encapsulation. Think of a class as a blueprint and an object as something built from that blueprint.";if(s.includes("quiz"))return"Sure! Try these: 1) What is inheritance? 2) Define a binary tree. 3) What is an algorithm? 4) What is polymorphism? 5) What is the time complexity of binary search?";if(s.includes("plan"))return"Try this 2-hour plan: 30 min concept study, 10 min break, 30 min practice, 10 min break, 30 min revision, then 10 min self-test.";return"I can explain subjects in simple words, create study plans, generate quizzes, summarize notes and help you prepare for exams. Ask me about a specific topic!";}
