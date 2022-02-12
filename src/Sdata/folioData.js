import oneImg1 from '../assets/userImgs/hero_001.png'
import oneImgBG1 from '../assets/userImgs/hero_002.jpg'
import oneImg2 from '../assets/userImgs/about_002.jpg'

import projectIcon from '../assets/userImgs/project-icon.jpg'
import projectImg1 from '../assets/userImgs/work1.jpg'
import projectImg2 from '../assets/userImgs/work2.jpg'
import projectImg3 from '../assets/userImgs/work3.jpg'
import projectImg4 from '../assets/userImgs/work4.jpg'
import projectImg5 from '../assets/userImgs/work5.jpg'
import projectImg6 from '../assets/userImgs/work6.jpg'
// import oneImg4 from '../assets/img/f004.png'
// import oneImg5 from '../assets/img/f009.png'
// import oneImg6 from '../assets/img/f006.png'
// import oneImg7 from '../assets/img/f008.png'
// import oneImg8 from '../assets/img/f005.png'
// import oneImg9 from '../assets/img/f010.png'
// import oneImg10 from '../assets/img/tissot-multifunction~1.jpg'
// import oneImg11 from '../assets/img/hiphop-gold~1.jpg'
// import oneImg12 from '../assets/img/mesh-genova~1.jpg'


const FolioData = 
  { id: 1,
    onglets : [
      {name:"home", visible:true, link:"#home", value:"Accueil"},
      {name:"about", visible:true, link:"#about", value:"A propos"},
      {name:"skills", visible:true, link:"#skills", value:"Compétences"},
      {name:"work", visible:true, link:"#work", value:"Expérience"},
      {name:"education", visible:true, link:"#education", value:"Education"},
      {name:"services", visible:true, link:"#services", value:"Services"},
      {name:"contact", visible:true, link:"#contact", value:"Contacts"},
    ],
    sectionHome: {
      username: "D'avila",
      userFunction: "Experte Comptable",
      userShortDescription: "Motivée, Dynamique, Polyvalente",
      userHomePhoto: {value: oneImg1, visible: true, svgShape:"###"},
      userHomeBgImage: {value: oneImgBG1, visible: false},
      buttons: [
        {name:"Me Contacter", icon:"paper-plane", link:"#contact", visible: true},
        {name:"Mon CV", icon:"download", link:"#", visible: true},
      ],
      socialLinks:[        
        {name:"Facebook", icon:"facebook-f", link:"#", visible: true},
        {name:"Whatsapp", icon:"whatsapp", link:"#", visible: true},
        {name:"Linkedin", icon:"linkedin-in", link:"#", visible: true},
        {name:"Twitter", icon:"twitter", link:"#", visible: true},
        {name:"Instagram", icon:"instagram", link:"#", visible: true},
        {name:"Github", icon:"github", link:"#", visible: true},
        {name:"Behance", icon:"behance", link:"#", visible: true},
        {name:"Dribbble", icon:"dribbble", link:"#", visible: true}, 
      ],
      // facebook: {visible: true, link:"#"},
      // linkedin:  {visible: true, link:"#"},
      // twitter: {visible: true, link:"#"},
      // instagram:  {visible: true, link:"#"},
      // github:  {visible: true, link:"#"},
      // behance:  {visible: true, link:"#"},
      // dribble:  {visible: true, link:"#"},
    },
    sectionAbout: {
      userDescription: "Mon principal but est de devenir un expert en Cyber-sécurité en vue de contribuer au développement dans le secteur numérique de mon pays le Cameroun. Pour ce faire, je compte tirer profit du maximum d'opportunité de formations qui me seront présentées tout en offrant le meilleur des compétences acquises durant ma formation.",
      userAboutPhoto: {value: oneImg2, visible: true},
      caracteristics: [
        {name:"Age", visible:true, value:"23"},
        {name:"Pays", visible:true, value:"Cameroun"},
        {name:"Ville", visible:true, value:"Douala"},
        {name:"Email", visible:true, value:"davilamanuellamanga@email.com"},
        {name:"Telephone", visible:true, value:"6xx xxx xxx"},
        {name:"Genre", visible:true, value:"Féminin"},
        {name:"Disponibilité", visible:true, value:"Immédiate"},
        {name:"Dernier diplome", visible:true, value:"Master en comptabilité"},
        {name:"Années d'expérience", visible:true, value:"3"},
        {name:"Mobilité", visible:true, value:"Internationale"},
        {name:"Permis de conduire", visible:true, value:"B"},
        // age: "23",
        // birthDate: "01-01-1998",
        // lieuResidence: "Douala - Akwa",
        // email: "davila@email.com",
        // telephone: "6xx xxx xxx",
        // nationalite: "Camerounaise",
        // genre:"Feminin",
        // disponibilite: "Immediate", // Immediate/Pas disponible/Dans 1 semaine/Dans 2 semaines/Dans 1 mois
        // centresDinteret: "Entrepreneuriat, Economie, Business Intelligence",
      ],      
      languages:{
        visible:true,
        value:[ // 20-40-60-80-100
          {name:"Francais", value:4},
          {name:"Anglais", value:4},
          {name:"Allemand", value:3},
          {name:"Espagnol", value:2},
        ]
      },
      certifications: {
        visible:true,
        value: [
        "Microsoft Office Specialist 2013 - Word",
        "Microsoft Office Specialist 2013 - Excel",
        "Microsoft Office Specialist 2013 - Powerpoint",
        ]
      }
    },
    sectionSkills:{ 
    skills: [
      {name:"Comptabilite analytique", value:95},
      {name:"Etablissement DSF", value:87},
      {name:"Suivi comptabilité et Conseils ", value:80},
      {name:"Mise sur pied des procédures comptables et de gestion", value:90},
      {name:"Suivi des engagements bancaires et rapprochements bancaires", value:90},
      {name:"Suivi des déclarations fiscales et sociales mensuelles et annuelles", value:90},
      {name:"Gestion des ressources humaines (recrutements, contrats en cours, paie, déclarations CNPS...)", value:90},
      {name:"Audit des comptes", value:90},
    ],
    softwares: [      
      {name:"Microsoft Excel", value:80},
      {name:"Microsoft Word", value:80},
      {name:"Microsoft Powerpoint", value:80},
      {name:"Sage SAARI", value:95},      
    ],
    },
    sectionEducation: [
      {
        startDate:"05-01-2021",
        endDate:"05-01-2022",
        duration:"05 ans",
        title: "Master 2 en Comptabilité",
        school:"Université AlphaLabo"
      },
      {
        startDate:"05-01-2021",
        endDate:"05-01-2022",
        duration:"01 an",
        title: "Baccalaureat C",
        school:"Lycee de Makepe"
      }
    ],
    sectionExperience: [  // type: Temps plein, Temps partiel, Independant, Freelance, CDD, Saisonier, Stage academique, Stage professionnel, Contrat en alternance, Saisonier
      {
        startDate:"05-01-2021",
        endDate:"05-01-2022",
        duration:"01 an",
        type: "CDI",
        entreprise: "ALpha Labo",
        poste:"Responsable Finances",
        lieu: "Douala, Cameroun",
        posteActuel: true,
      },
      {
        startDate:"05-01-2021",
        endDate:"05-01-2022",
        duration:"01 an",
        type: "Stage professionnel",
        entreprise: "Africa Foods",
        poste:"Comptable",
        lieu: "Douala, Cameroun",
        posteActuel: false,
      }
    ],
    sectionProjects: [
      {
        startDate:"05-01-2021",
        endDate:"05-01-2022",
        duration:"03 mois",
        statut: 'Terminé',
        title: "Création d'un assistant vocal. Algorithme de reconnaissance d'objet",
        content:"Conception d’un support de vidéo projeteur (Dispositif permettant de relever les angles et les variations hauteur du vidéo pour une meilleure projection sans encombrement.",
        img: projectImg1
      },
      {
        startDate:"05-01-2021",
        endDate:"05-01-2022",
        duration:"03 mois",
        statut: 'En cours',
        title: "Etablissement DSF pour PME",
        content:"Conception d’un support de vidéo projeteur (Dispositif permettant de relever les angles et les variations hauteur du vidéo pour une meilleure projection sans encombrement.",
        img: projectIcon
      },
      {
        startDate:"05-01-2021",
        endDate:"05-01-2022",
        duration:"03 mois",
        statut: 'En cours',
        title: "Etablissement DSF pour PME",
        content:"Conception d’un support de vidéo projeteur (Dispositif permettant de relever les angles et les variations hauteur du vidéo pour une meilleure projection sans encombrement.",
        img: projectImg3
      },
      {
        startDate:"05-01-2021",
        endDate:"05-01-2022",
        duration:"03 mois",
        statut: 'En cours',
        title: "Etablissement DSF pour PME",
        content:"Conception d’un support de vidéo projeteur (Dispositif permettant de relever les angles et les variations hauteur du vidéo pour une meilleure projection sans encombrement.",
        img: projectImg4
      },
      {
        startDate:"05-01-2021",
        endDate:"05-01-2022",
        duration:"03 mois",
        statut: 'En cours',
        title: "Etablissement DSF pour PME",
        content:"Conception d’un support de vidéo projeteur (Dispositif permettant de relever les angles et les variations hauteur du vidéo pour une meilleure projection sans encombrement.",
        img: projectImg5
      },
      {
        startDate:"05-01-2021",
        endDate:"05-01-2022",
        duration:"03 mois",
        statut: 'En cours',
        title: "Etablissement DSF pour PME",
        content:"Conception d’un support de vidéo projeteur (Dispositif permettant de relever les angles et les variations hauteur du vidéo pour une meilleure projection sans encombrement.",
        img: projectImg6
      },
    ],
    sectionContacts: {
      email: "davila@email.com",
      telephone: "6xx xxx xxx",
      address:"Makepe-Douala, Cameroun",
      website:"www.alphafolio.com"
    },
  }

  export default FolioData;
