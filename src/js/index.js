//processsus de rendu en js
//je recherche dans le dom un element avec l'id Electron-Version
const electronVersion = document.querySelector("#Electron-Version")
const NodeVersion = document.querySelector("#Node-Version")
const ChromiumVersion = document.querySelector("#Chromium-Version")
//je vais recuperer la version d'electron et l'afficher
electronVersion.textContent = versions.electron
NodeVersion.textContent = versions.node
ChromiumVersion.textContent = versions.chromium
