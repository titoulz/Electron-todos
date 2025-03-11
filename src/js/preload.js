//ce script sera executé avant le chargement de la page
//on va recuperer les versions d'electron, de node et de chromium
//ce script a un acces direct aux api node /electron mais index.js n'y a plus accès 
const {contextBridge, ipcRenderer} = require('electron') //on importe le module contextBridge
contextBridge.exposeInMainWorld('versions',{//on expose un objet electron dans le rendu
  //fonctions qui recupere les fct via IPC(communication entre le processus principal et le processus de rendu)
  //dans ce canal on va envoyer une requete pour recuperer les versions 
  getVersions:()=>ipcRenderer.invoke('get-versions')//on expose dans index.js via un objet versions la fonction getVersions via IPC
})
console.log("preload chargé avec succès") 