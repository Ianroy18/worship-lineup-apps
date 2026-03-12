function login(){
window.location.href="dashboard.html"
}

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