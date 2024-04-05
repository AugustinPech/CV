
function newChild(block, className, htmlType, object) {
    let values = Object.values(object)
    let keys = Object.keys(object)
    let newChild=block.appendChild(document.createElement(htmlType))
    switch (htmlType){
        case "a" :
            newChild.href=values[keys.findIndex(item => item==className)]
            break
        case "img" :
            newChild.src=values[keys.findIndex(item => item==className)]
            newChild.style = "max-height:100%; max-width:60%"
            break
        default :
        if(values[keys.findIndex(item => item==className)]!=null){
            newChild.innerHTML=values[keys.findIndex(item => item==className)]
        }
    }
    newChild.className=className
    return newChild
}
function modalContentDisplay(object,modalContent){
    let newChild=modalContent.appendChild(document.createElement("div"))
    newChild.appendChild(document.createElement("h2")).innerHTML=object.title
    newChild.appendChild(document.createElement("div")).innerHTML=object.description
    newChild.lastChild.className="ms-3 text-secondary fst-italic"
    newChild.appendChild(document.createElement("ul"))
    object.longDesc.forEach((item)=> {
        let puceType=""
        puceType="li"
        newChild.lastChild.appendChild(document.createElement(puceType)).innerHTML=item
    })
    newChild.appendChild(document.createElement("ul"))
    object.ressources.forEach((obj)=> {
        puceType="li"
        newChild.lastChild.appendChild(document.createElement(puceType)).innerHTML=obj.description +" : "
        puceType="ul"
        newChild.lastChild.lastChild.appendChild(document.createElement(puceType))
        obj.link.forEach(item => {
            puceType="li"
            newChild.lastChild.lastChild.lastChild.appendChild(document.createElement(puceType)).innerHTML='<a href="'+item+'">'+item+'</a>'
        })
    })
    return newChild
}
function modalBoxOf(block,object){
    let newChild=block.appendChild(document.createElement("div"))
    let modalBox= newChild.appendChild(document.createElement("div"))
    modalBox.className="modal"
    modalBox.setAttribute('id',"myModal")
    let modalContent= modalBox.appendChild(document.createElement("div"))
    modalContent.className= "modal-content"
    modalContent.appendChild(modalContentDisplay(object,modalContent))
    modalBox.style.display="none"
    block.addEventListener("click", ()=>{
        modalBox.style.display="block"
    })
    window.addEventListener("click",(event) =>{
        if (event.target == modalBox) {
            modalBox.style.display = "none";
        }
    })
}

function shadowOnHover(block){
    let newChild=block.appendChild(document.createElement("div"))
    let innerImg=newChild.appendChild(document.createElement("img"))
    innerImg.className=" w-25"
    innerImg.style.display="none"
    innerImg.src="/CV/img/plus-svgrepo-com.svg"
    newChild.addEventListener("mouseover", ()=>{
        newChild.firstChild.style.display="block"
    })
    newChild.addEventListener("mouseout", ()=>{
        newChild.firstChild.style.display="none"
    })
    newChild.addEventListener("click", ()=>{
        newChild.lastChild.style.display="block"
    })
    newChild.className="shadowOnHover d-flex flex-row justify-content-center align-items-center"
}
function cardElement(object, parentBlock) {
    let newBlock = parentBlock.appendChild(document.createElement("div"))
    newBlock.setAttribute('class', 'card d-flex flex-column m-1 col-2')
    newBlock.style="width: 150px; height: 200px"
    let values = Object.values(object)
    let keys = Object.keys(object)
    let divTop= newChild(newBlock, "imgPath", "div", object)
    let blockImg= newChild(divTop, "imgPath", "img", object)
    blockImg.src=values[keys.findIndex(item => item=="image")]
    divTop.className+=" topDiv d-flex flex-column justify-content-center h-50 align-items-center"
    let strStyle ="background-image: url('" + values[keys.findIndex(item => item=="image")] +"');background-size: cover;"
    let divBottom= newChild(newBlock, "bottomDiv", "div", object)
    divBottom.className+= " d-flex flex-column align-items-center"
    
    newChild(divBottom, 'title', "h3", object)
    newChild(divBottom, 'description', "div", object)
    newBlock.children.style="z-index:0"

    if(object.longDesc.length!=0){
        shadowOnHover(newBlock)
        modalBoxOf(newBlock,object)
    }
    
    
}



