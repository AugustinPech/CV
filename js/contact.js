let form = document.querySelector("#contactForm")

function modalContactForm(block){
    let newChild=block.appendChild(document.createElement("div"))
    let modalBox= newChild.appendChild(document.createElement("div"))
    modalBox.className="modal "
    modalBox.setAttribute('id',"contactFormModal")
    let modalContent= modalBox.appendChild(document.createElement("div"))
    modalContent.className= "modal-content"
    modalContent.innerHTML=form.innerHTML
    modalBox.style.display="none"
    block=document.querySelector("#contactBTN")
    block.addEventListener("click", ()=>{
        modalBox.style.display="block"
    })
    window.addEventListener("click",(event) =>{
        if (event.target == modalBox) {
            modalBox.style.display = "none";
        }
    })
}


function contactMe(){

}

modalContactForm(document.querySelector("#contactBTN"))
