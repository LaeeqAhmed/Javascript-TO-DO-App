let form = document.getElementById("ourform")
let inputf = document.getElementById("inputfield")
let list = document.getElementById("ourlist")
/*form.addEventListener("submit",function(e){
  e.preventDefault()
  alert("Data has been inserted")
})*/
function formkafunc(e){
  e.preventDefault()
  createitem(inputf.value)
  alert("Data has been inserted")
}
form.addEventListener("submit",formkafunc)
//ye ceaet item wala function upar inputf.value k sath call ho ga phir hamaree pass value ai gi
//ap wo wala function bane ga jis k through value below pop ho gi
function createitem(x){
  //list wala variable k through access ho ga
  //the 'this' keyword points on to the selected item that we want to delete
  let html = `<li> ${x} <button onclick="deleteitem(this)" class="button1">Delete</button>`
  list.insertAdjacentHTML("beforebegin",html)
  inputf.value = ""
  inputf.focus()
}

//deleting function
function deleteitem(elementthatdelete){
  elementthatdelete.parentElement.remove()
}
