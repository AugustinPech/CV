
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
            newChild.style = "width:100%"
            break
        default :
            newChild.textContent=values[keys.findIndex(item => item==className)]
    }
    
    newChild.className=className
    return newChild
}

function cardElement(object, parentBlock) {
    let newBlock = parentBlock.appendChild(document.createElement("div"))
    newBlock.setAttribute('class', 'card d-flex flex-column m-1')
    newBlock.style="width:200px"
    let values = Object.values(object)
    let keys = Object.keys(object)
    let divTop= newChild(newBlock, "imgPath", "img", object)
    divTop.src=values[keys.findIndex(item => item=="image")]

    let strStyle ="background-image: url('" + values[keys.findIndex(item => item=="image")] +"');background-size: cover;"
    let divBottom= newChild(newBlock, "bottomDiv", "div", object)
    divBottom.className+= " d-flex flex-column"
    
    newChild(divBottom, 'title', "h3", object)
    newChild(divBottom, 'description', "div", object)

}
