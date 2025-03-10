//on s'interesse auprocessus principal
//Processus principal

//le but est de creer la fenetre principale de notre application
//on va devoir faire appel aux api electron
const {app,BrowserWindow }= require("electron")
//on va creer une fct qui va creer une fenetre
function CreateWindow(){
    const window = new BrowserWindow({
        width:800,
        height:600,
        webPreferences:{
            nodeIntegration:true, //acces aux api node depuis les processus de rendu (cela permet d'acceder aux api node)
            contextIsolation:false
        }
       
    })
    window.loadFile("src/pages/index.html")
}
console.log("leconsollogymarchesamere")
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