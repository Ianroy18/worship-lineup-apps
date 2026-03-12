function login(){
  window.location.href="dashboard.html"
}

// modal helper: the DOM element is injected once the page loads

function showModal({title = '', body = ''}) {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.querySelector('.modal-title').innerText = title;
  overlay.querySelector('.modal-body').innerHTML = body;
  overlay.style.display = 'flex';
}

function hideModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay) overlay.style.display = 'none';
}

// create the overlay when the document is ready

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('modal-overlay')) {
    const overlay = document.createElement('div');
    overlay.id = 'modal-overlay';
    overlay.innerHTML = `
      <div id="modal">
        <div class="modal-header">
          <span class="modal-title"></span>
          <span class="close">&times;</span>
        </div>
        <div class="modal-body"></div>
      </div>
    `;
    document.body.appendChild(overlay);
    overlay.querySelector('.close').addEventListener('click', hideModal);
    overlay.addEventListener('click', e => {
      if (e.target === overlay) hideModal();
    });
  }
});

function addMember(){

let name=document.getElementById("memberName").value
let instrument=document.getElementById("instrument").value

let li=document.createElement("li")
li.innerText=name+" - "+instrument

document.getElementById("teamList").appendChild(li)

}

function addSong(){

let title=document.getElementById("songTitle").value
let key=document.getElementById("songKey").value

let li=document.createElement("li")
li.innerText=title+" (Key "+key+")"

document.getElementById("songList").appendChild(li)

}

function addLineup(){

let song=document.getElementById("lineupSong").value

let li=document.createElement("li")
li.innerText=song

document.getElementById("lineupList").appendChild(li)

}

function addPractice(){

let date=document.getElementById("practiceDate").value
let team=document.getElementById("practiceTeam").value

let li=document.createElement("li")
li.innerText=date+" - "+team

document.getElementById("practiceList").appendChild(li)

}

function addEvent(){

let date=document.getElementById("eventDate").value
let name=document.getElementById("eventName").value

let li=document.createElement("li")
li.innerText=date+" - "+name

document.getElementById("calendarList").appendChild(li)

}