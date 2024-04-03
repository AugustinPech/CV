
class Item {
    container
    title
    description
    imgPath
    constructor(title, description, imgPath){
        this.title=title
        this.description=description
        this.image=imgPath
        console.log(title, description, imgPath)
    }
}
class Skill {
    container = document.querySelector("#skillsContainer")
    constructor(title, description, imgPath) {
        this.title=title
        this.description=description
        this.image=imgPath
        cardElement(this, this.container)
    }
}
let js= new Skill("JavaScript" , "bla bla bla" ,"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png")
let python = new Skill("Python ", "blabla bla ", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png")
let VSCode = new Skill("VSCode", "Maîtrise du travail dans l'IDE VSCode","https://www.svgrepo.com/show/374173/vscode3.svg" )