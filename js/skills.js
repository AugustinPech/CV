let skills=[]
class Item {
    container
    title
    description
    imgPath
    constructor(title, description, imgPath){
        this.title=title
        this.description=description
        this.image=imgPath
    }
}

class Skill {
    container = document.querySelector("#skillsContainer")
    constructor(title, description, imgPath) {
        this.title=title
        this.description=description
        this.image=imgPath
        skills.push(this)
        cardElement(this, this.container)
    }
}

class IDE extends Skill {
    container = document.querySelector("#IDESkillsContainer")
}
class Front extends Skill {
    container = document.querySelector("#frontSkillsContainer")
}
class Back extends Skill {
    container = document.querySelector("#backSkillsContainer")
}
let VSCode = new IDE("VSCode", "Maîtrise du travail dans l'IDE VSCode","https://www.svgrepo.com/show/374173/vscode3.svg" )
let git = new IDE ("Versioning de code", "", "https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png")
let php8 = new Skill("PHP 8.3","","https://files.phpclasses.org/files/blog/file/PHP%208.3.png")
let laravel = new Skill("PHP - Laravel", "" , "https://www.logo.wine/a/logo/Laravel/Laravel-Logo.wine.svg")
let VM = new Skill("Virtual Box tools", "", "https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png")
let md = new Skill("MD & Mermaid", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/2560px-Markdown-mark.svg.png" )
let js= new Skill("JavaScript" , "" ,"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png")
let QGIS= new Skill("SIG avec QGIS","","https://upload.wikimedia.org/wikipedia/commons/9/91/QGIS_logo_new.svg")
let bootstrap =new Front("Bootstrap 5", "", "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png")
let html = new Front("HTML 5", "", "data:image/png;base64,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")
let css = new Front("CSS 3", "", "https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png")
let python = new Skill("Python", "", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png")
let UXUI = new Front ("UX/UI avec Figma", "", "https://cdn.worldvectorlogo.com/logos/figma-5.svg")
let DAO = new Front ("DAO avec AutoCAD", "", "https://i.pinimg.com/originals/58/6b/be/586bbe06de2d9896b8ef4dda71caa13c.png")
let javaProcessing = new Skill ("Algorythmique", "", "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg")
let data= new Back("SQL" , "" , "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png")