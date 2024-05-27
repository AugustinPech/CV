class Skill {
    container = document.querySelector("#skillsContainer")
    constructor(object) {
        this.title=object.title
        this.description =object.description
        this.longDesc=object.longDesc
        this.ressources=object.ressources
        this.tags=object.tags

        if (object.imgPath==null || object.imgPath==""){
            this.image="https://placehold.co/125x75?text="+object.title
        } else {
            this.image=object.imgPath
        }
        cardElement(this, this.container)
    }
}
let skills=[
    { // VSCode
        title : "VSCode",
        description:"Maîtrise de l'IDE VSCode",
        longDesc:[],
        imgPath: "https://www.svgrepo.com/show/374173/vscode3.svg",
        tags:["IDE", "DevSkill"],
        ressources : [
            "https://augustinpech.github.io/CV/",
            "https://augustinpech.github.io/JS_formation_campus/"
        ]
    },
    {// Git
        title:"Git",
        description:"Versioning de code",
        longDesc:[
            "Pratique du versioning de code avec Git sur GitHub.",
            "Déploiement du contenu grace à l'outil GitHubPages.",
            "Résolution de conflits Dans L'IDE ou via GitHub",
            "Méthodes AGILE-SCRUM grace aux outils de GitHub-Project"
        ],
        imgPath:"https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png",
        tags:["IDE", "DevSkill"],
        ressources : [
            {
                description:"Mon profil sur GitHub",
                link:["https://github.com/AugustinPech"]
            },
            {
                description:"Mon CV interactif sur GitHub",
                link:["https://augustinpech.github.io/CV/"]
            },
            {
                description:"Un petit catalogue d'applications en JS",
                link:["https://augustinpech.github.io/JS_formation_campus/"]
            },
            {
                description:"RoadMap et BackLog d'un projet de développement JS",
                link:["https://github.com/users/AugustinPech/projects/1/views/3"]
            },
            {
                description:"Quelques rendus de cours sur php",
                link:[
                    "https://github.com/AugustinPech/cours_PHP_Boutique",
                    "https://github.com/AugustinPech/Cours_laravel",
                    "https://github.com/AugustinPech/Cours_3_PHP",
                    "https://github.com/AugustinPech/Cours-php"
                ]
            },
            {
                description: "Premier projet avec LARAVEL",
                link:["https://github.com/charlyol/ECommerce-SCHA"]
            }
        ]
    },
    { // "PHP",
        title:"PHP",
        description:"Developper un site web de type MVC avec 8.3",
        longDesc:[
            "Développement en PHP Vanilla d'un site respectant une structure RMVC",
            "Déploiement d'un site de E-commerce grace à LARAVEL"
        ],
        imgPath:"https://files.phpclasses.org/files/blog/file/PHP%208.3.png",
        tags:[ "FrontEnd", "BackEnd", "DataBase", "Algo", "DevSkill"],
        ressources : [
            {
                description:"quelques rendus de cours sur php",
                link:[
                    "https://github.com/AugustinPech/cours_PHP_Boutique",
                    "https://github.com/AugustinPech/Cours_laravel",
                    "https://github.com/AugustinPech/Cours_3_PHP",
                    "https://github.com/AugustinPech/Cours-php"
                ]
            },
            ]
    },
    { // "Virtual Box tools",
        title:"Virtual Box tools",
        description:"Utilisation de VMs pour simuler un serveur distant",
        longDesc:[
            "Configuration de l'interface réseau de VMs pour simuler un serveur distant",
            "Utilisation de VMs pour documenter un processus pour un client"
        ],
        imgPath: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png",
        tags:["IDE", "BackEnd","NetWork", "DevSkill"],
        ressources : [
            {
                description:"Différentes documentations autour du thème 'Système et réseau' ainsi que la réalisation des exercices lors de ma formation.",
                link:["https://github.com/AugustinPech/VirtualBox-Documentation"]
            },
        ]
    },
    { // "MD & Mermaid",
        title:"MD & Mermaid",
        description:"Documentation des projets en MarkDown & mermaid",
        longDesc:[
            "La documentation produite en MarkDown est distillée à travers tous mes projets. Avec systèmatiquement des diagrammes mermaid.",
        ],
        imgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Markdown-mark.svg/2560px-Markdown-mark.svg.png",
        tags:["Documentation", "DevSkill"],
        ressources : [
            {
                description:"Différentes documentations autour du thème 'Système et réseau' ainsi que la réalisation des exercices lors de ma formation.",
                link:["https://github.com/AugustinPech/VirtualBox-Documentation"]
            },
            {
                description:"Documentation de l'installation d'un logiciel pro de recherche en biologie.",
                link:["https://github.com/AugustinPech/VirtualBox-Documentation/blob/main/notice_deepbgc_install.md"]
            },
        ]
    },
    {// "JavaScript",
        title:"JavaScript",
        description:"Dynamiser des éléments d'un page Web",
        longDesc:[
            "Développement d'applications web simples",
            "Appelle d'API",
            "Affichage dynamique"
        ],
        imgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png",
        tags:["FrontEnd", "Algo", "DevSkill"],
        ressources : [
            {
                description:"Catalog d'applications simples développées en JS vanilla",
                link:["https://augustinpech.github.io/JS_formation_campus/"]
            },
        ]
    },
    {// "SIG avec QGIS",
        title:"SIG avec QGIS",
        description:"Gestion et exploitation de géodata",
        longDesc:[
            "Réalisation de carte à but illustratif ou utilitaire",
            "Export de ces cartes en block HTML intéractifs",
            "Gestion de Databases grâce à PostGIS SQL"
        ],
        imgPath: "https://upload.wikimedia.org/wikipedia/commons/9/91/QGIS_logo_new.svg",
        tags:[ "SIG", "DevSkill"],
        ressources : [
        ]
    },
    {//"HTML 5"
        title:"HTML 5",
        description:"Création de vue pour un RMVC",
        longDesc:[
            "Création de pages Web en HTML pure",
            "génération dynamique de HTML avec PHP ou JS"
        ],
        imgPath: "data:image/png;base64,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",
        tags:["FrontEnd", "DevSkill"],
        ressources : [
            {
                description:"mon CV interactif sur GitHub",
                link:["https://augustinpech.github.io/CV/"]
            },
        ]
    },
    {// "Python",
        title:"Python",
        description:"TDD, POO & Data science",
        longDesc:[
            "Programmation Orientée Objet",
            "Test Driven Development",
            "Analyse de données d'expériences scientifiques",
            "Création de documents et figures pour des publications",
            "Traitement de données",
            "Traitement d'images satellites de Mars et de la Terre"
        ],
        imgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
        tags:["FrontEnd", "BackEnd","Algo", "DataBase", "SIG", "Documentation","NetWork","DevSkill"],
        ressources : [
            {
                description:"Mon profil sur GitHub",
                link:["https://github.com/AugustinPech/python-campus"]
            },
        ]
    },
    {// "UX/UI avec Figma"
        title:"UX/UI avec Figma",
        description:"Maquettage et création de logos",
        longDesc:[
            "Création de Mokups pour des applications",
            "Création d'icones et de logos"
        ],
        imgPath: "https://cdn.worldvectorlogo.com/logos/figma-5.svg",
        tags:[ "FrontEnd",  "DevSkill"],
        ressources : [
            {
                description:"Maquette d'un projet sur LARAVEL",
                link:["https://www.figma.com/file/08MkHfT3OG7ySLs72u8GYM/SCHA-Doc.-(Copy)?type=design&mode=design&t=31orA3J1gR9usV2x-1"]
            },
        ]
    },
    {//"DAO avec AutoCAD"
        title:"DAO avec AutoCAD",
        description:"Création de plan, maquette et documents",
        longDesc:[],
        imgPath: "https://i.pinimg.com/originals/58/6b/be/586bbe06de2d9896b8ef4dda71caa13c.png",
        tags:["IDE", "FrontEnd", "Documentation"],
        ressources : [
        ]
    },
    {// Algorythmique
        title:"Algorythmique",
        description:"Théorisation d'algorythmes / pseudocode / logigrammes ",
        longDesc:[],
        imgPath: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Processing_2021_logo.svg",
        tags:["IDE", "BackEnd","Algo", "DevSkill"],
        ressources : [
        ]
    },
    {// SQL
        title:"SQL",
        description:"Requètage de données grace au langage SQL",
        longDesc:[],
        imgPath: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
        tags:["BackEnd", "DataBase", "SIG", "DevSkill"],
        ressources : [
        ]
    },
    {// "Bootstrap 5",
        title:"Bootstrap 5",
        description:"Styliser rapidement une page HTML",
        longDesc:[
        ],
        imgPath: "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
        tags:[ "FrontEnd",  "DevSkill"],
        ressources : [
            {
                description:"Mon CV interactif sur GitHub",
                link:["https://augustinpech.github.io/CV/"]
            },
        ]
    },
    {// "CSS 3"
        title:"CSS 3",
        description:"Styliser rapidement une page HTML",
        longDesc:[
        ],
        imgPath: "https://cdn.iconscout.com/icon/free/png-256/free-css3-9-1175237.png",
        tags:[ "FrontEnd",  "DevSkill"],
        ressources : [
            {
                description:"Mon CV interactif sur GitHub",
                link:["https://augustinpech.github.io/CV/"]
            },
        ]
    },
    {// Java
        title:"Java",
        description: "Programmation Orientée Objet",
        longDesc:[
            "Programmation Orientée Objet",
            "Utilisation de la JavaDoc",
            "Utilisation de Maven",
            "Test Driven Development",
        ],
        imgPath:"https://cdn.worldvectorlogo.com/logos/java.svg",
        tags:["IDE", "BackEnd","Algo", "DataBase", "Documentation", "DevSkill"],
        ressources : [
            {
                description:"Mon rendu de cours sur Java",
                link:["https://github.com/AugustinPech/Java_cours_campus"]
            },
        ]
    },
]
let exemple =
{
    title:"title",
    description:"description courte",
    longDesc:["Ullamco est culpa irure ea id aute aute proident eiusmod aliquip ea incididunt velit. Amet dolore qui non fugiat. Ipsum pariatur anim minim id ullamco ut. Aliquip velit enim do minim."],
    imgPath: "",
    tags:["IDE", "FrontEnd", "BackEnd","Algo", "DataBase", "SIG", "Documentation","NetWork", "DevSkill"],
    ressources : [
        {
            description:"mon profil sur GitHub",
                link:["https://github.com/AugustinPech"]
            },
            {
                description:"mon CV interactif sur GitHub",
                link:["https://augustinpech.github.io/CV/"]
            },
        ]
    }

skills.forEach((item) => new Skill(item))
