const path = require('path')
const glob = require('glob')

//controla el ciclo de vida de la aplicación
//acceso al gestor de ventanas de Chromium
const {app, BrowserWindow, Menu} = require('electron')

//referencia global a la ventana principal
var mainWindown = null;

//Terminamos el proceso de la aplicación cuando todas las ventanas se han cerrado
app.on('window-all-closed', function(){
	if(process.platform != 'darwin')
		app.quit();
});

let template = [{
	label: 'Menu Tecsup',
	submenu: [{
		label: 'Hola DAWA',
		accelerator: 'CmdOrCtrl+Z',
		role: 'undo'
	}, {
		type: 'separator'
	}, {
		label: 'View',
		submenu: [{
			label: 'Reload',
			accelerator: 'CmdOrCtrl+R',
			click: (item, focusedWindow) => {
				if (focusedWindow){
					if (focusedWindow.id === 1){
						BrowserWindow.getAllWindows().forEach(win =>{
							if (win.id > 1) win.close()
						})
					}
					focusedWindow.reload()
				}
			}
		},{
			label: 'Toggle Full Screen',
			accelerator: (() =>{
				if (process.platform === 'darwin'){
					return 'CmdOrCtrl+F'
				}else{
					return 'F11'
				}
			})(),
			click: (item, focusedWindow) => {
				if (focusedWindow){
					focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
				}
			}
		},{
			type: 'separator'
		},{
			label: 'Toggle Developer Tools',
			accelerator: (() => {
				if (process.platform === 'darwin'){
					return 'CmdOrCtrl+I'
				}else{
					return 'CmdOrCtrl+I'
				}
			})(),
			click: (item, focusedWindow) => {
				focusedWindow.toggleDevTools()
			}
		}]
	}]
}];

//Cuando todo se haya cargado, mediante el evento ready empezaremos a definir la aplicación
app.on('ready', function(){
	const menu = Menu.buildFromTemplate(template)
	Menu.setApplicationMenu(menu)
	//creamos una nueva ventana de 800x600
	mainWindown = new BrowserWindow({
		width: 800,
		height: 600
	});

	//vinculamos el index.html a dicha ventana
	mainWindown.loadURL(`file://${__dirname}/index.html`);

	//abrimos las opciones de desarrollo
	mainWindown.openDevTools();

	//cuando la ventana principal se cierre....
	mainWindown.on('closed', function(){
		//liberamos los recursos referentes a la ventana
		mainWindown = null;
	});
});