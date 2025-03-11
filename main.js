//on s'interesse auprocessus principal
//Processus principal

//le but est de creer la fenetre principale de notre application
//on va devoir faire appel aux api electron
const {app,BrowserWindow, ipcMain }= require("electron")
const path = require("path")
//on va creer une fct qui va creer une fenetre
function CreateWindow(){
    const window = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:false, //acces aux api node depuis les processus de rendu (cela permet d'acceder aux api node)
            contextIsolation:true, //isoler le contexte de l'application (on isole le render du preload)
            preload: path.join(__dirname,'src/js/preload.js'), //script qui sera executé avant le chargement de la page (on precise qu'on utilise un preload)
            sandbox:true //on active le mode bac à sable pour securiser l'application
        }
       
    })
    window.loadFile("src/pages/index.html")
}
console.log("leconsollogymarche")
//attendre l'initialisation de l'application
app.whenReady().then( () => {
    CreateWindow()

app.on('activate',()=>{
    if(BrowserWindow.getAllWindows().length === 0){
        CreateWindow()
    }
})})

//gerer la fermerture de l'application
app.on('window-all-closed',()=>{
if (process.platform !== 'darwin'){
    app.quit()
}})

//ecouter les evenements sur le canal get-versions
ipcMain.handle('get-versions',()=>{
    //renvoyer un objet "versions" qui contient les versions d'electron, de node et de chromium
    return {
        electron: process.versions.electron,
        node: process.versions.node,
        chrome: process.versions.chrome
    }
})