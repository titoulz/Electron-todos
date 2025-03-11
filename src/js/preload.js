//ce script sera executé avant le chargement de la page
//on va recuperer les versions d'electron, de node et de chromium
//ce script a un acces direct aux api node /electron mais index.js n'y a plus accès 
const {contextBridge} = require('electron') //on importe le module contextBridge
contextBridge.exposeInMainWorld('versions',{//on expose un objet electron dans le rendu
   electron: process.versions.electron,
    node: process.versions.node,
    chrome: process.versions.chrome
})
console.log("preload chargé avec succès") 