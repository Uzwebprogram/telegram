const socket = io()

const name = prompt("ismingizni kiriting")


const newUserDiv = document.querySelector(".new-user")
const NewYou = document.querySelector(".user-you")
NewYou.innerHTML += "You joined"
socket.emit("new-user" , name)
socket.on('joined-user' , data =>{
    const padding = document.createElement("p") 
    padding.innerHTML += `${data} joined`
    newUserDiv.appendChild(padding)
})
form.addEventListener("submit" , e => {
    e.preventDefault()
    const messageschater = document.createElement("div")
    const messageChat = document.createElement("div")
    const spanYou =  document.createElement("div")
    messageChat.className = "col-md-3 offset-md-9"
    messageschater.className = "no-gutters"
    spanYou.innerHTML += `${input.value}`
    spanYou.className = "chat-bubble chat-bubble--right"
    messageChat.appendChild(spanYou)
    messageschater.appendChild(messageChat)
    chatPanel.appendChild(messageschater)
    socket.emit("new-message" , {
        name,
        message : input.value
    })
    e.value = null
    // console.log(message.value, name);
})
socket.on("joined-message" , ({name , message})=>{
    const messageschaters = document.createElement("div")
    const messageChatUpload = document.createElement("div")
    const spanFriend =  document.createElement("div")

    messageChatUpload.className = "col-md-3"
    messageschaters.className = "no-gutters"
    spanFriend.innerHTML += `${name}: ${message}`
    spanFriend.className = "chat-bubble chat-bubble--left"
    messageChatUpload.appendChild(spanFriend)
    messageschaters.appendChild(messageChatUpload)
    chatPanel.appendChild(messageschaters)
})
friendes.addEventListener("click", () =>{
    user.style.display = "none"
    coller.style.display = "block"
})

const closed = document.querySelector("#closed")

closed.addEventListener("click", () =>{
    user.style.display = "block"
    coller.style.display = "none"
})