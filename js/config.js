let respecConfig = {
//  useLogo: true,
//  useLabel: true,
//  license: "eupl",
  shortName: "RSGB",
  pubDomain: "cim",

  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane specificatie-types
  specType: "IM",
  
  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane specificatie-statussen
  specStatus: "IO",
  publishDate: "juni 2026",
  publishVersion: "2.021",

  // Zie de globale property 'localizationStrings/nl' voor de lijst met toegestane maturities
  //previousMaturity: "IO",
  //previousPublishDate: "2022-06-24",
  //previousPublishVersion: "0.0.4",
  
  title: "Referentiemodel Stelsel van Gemeentelijke Basisgegevens",
  subtitle: "onderdeel van de GEMeentelijke Model Architectuur (GEMMA)",
//  content: {"mermaid": "", "ch01": "informative", "ch02": ""},
//  authors:
//    [
//      {
//        name: "Robert Melskens",
//        company: "VNG Realisatie",
//        companyURL: "https://vng.nl/artikelen/vng-realisatie",
//      }
//    ],
  editors:
    [
      {
        name: "Robert Melskens",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      },
      {
        name: "Johan Boer",
        company: "VNG Realisatie",
        companyURL: "https://vng.nl/artikelen/vng-realisatie",
      }
    ],

//  github: "https://github.com/VNG-Realisatie/RSGB-Respec",
  edDraftURI: "https://vng-realisatie.github.io/RSGB-Respec/",
  latestVersion: "https://vng-realisatie.github.io/RSGB-Respec/",

//  issueBase: "https://github.com/VNG-Realisatie/Actualisering-RSGB",

  otherLinks: [{
    key: "Doe mee",
    data: [{
      value: "VNG-Realisatie/Actualisering-RSGB",
      href: "https://github.com/VNG-Realisatie/Actualisering-RSGB"
    },
    {
      value: "All issues",
      href: "https://github.com/VNG-Realisatie/Actualisering-RSGB/issues"
    },
    {
      value: "Dien een melding in",
      href: "https://github.com/VNG-Realisatie/Actualisering-RSGB/issues/new/choose"
    },
    {
      value: "Revisiehistorie",
      href: "https://github.com/VNG-Realisatie/Actualisering-RSGB/commits"
    },
    {
      value: "Pull requests",
      href: "https://github.com/VNG-Realisatie/Actualisering-RSGB/pulls"
    },
    ]
  }],

  maxTocLevel: 3,

  // Creëer PDF en link deze aan de file in de header van het html document (optioneel). Het is (nog) niet mogelijk hier een globale property van te maken:
//  alternateFormats: [
//      {
//          label: "pdf",
//          uri: "hl-Respec-template-0.2.0.pdf",
//      },
//    ],
  localBiblio: {
        "MIM": {
           "href": "https://docs.geostandaarden.nl/mim/mim/",
           "publisher": "Geonovum",
           "title": "MIM - Metamodel Informatie Modellering",
           "date": "Oktober 2023",
           "rawDate": "2023"
        },
        "SemVer": {
           "href": "https://semver.org/lang/nl/",
           "title": "Semantisch Versioneren 2.0.0",
           "date": "December 19, 2023",
           "rawDate": "2023"
        },
    },
}
