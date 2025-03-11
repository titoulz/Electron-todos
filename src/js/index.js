

//je recherche dans le dom un element avec l'id Electron-Version
const electronVersion = document.querySelector("#Electron-Version")
const NodeVersion = document.querySelector("#Node-Version")
const ChromiumVersion = document.querySelector("#Chromium-Version")
//appel de la fct get-versions

async function lesVersions(){
//appel de la fct get-versions avec await
const v= await versions.getVersions()

electronVersion.textContent = v.electron
NodeVersion.textContent= v.node
ChromiumVersion.textContent = v.chrome

}
lesVersions()