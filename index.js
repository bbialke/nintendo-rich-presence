const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

//Update ENV for Production
//process.env.NODE_ENV = 'production'

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 760,
    resizable: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.removeMenu();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// Client ID for connection
const clientId = '';

// only needed for discord allowing spectate, join, ask to join
const client = require('discord-rich-presence')(clientId);
const startTimestamp = new Date();
client.on('join', (secret) => {
  console.log('we should join with', secret);
});

client.on('spectate', (secret) => {
  console.log('we should spectate with', secret);
});

client.on('joinRequest', (user) => {
  if (user.discriminator === '4945') {
    client.reply(user, 'YES');
  } else {
    client.reply(user, 'IGNORE');
  }
});

async function setActivity() {
  if (!client || !mainWindow) {
    return;
  }
//Initial "demo" status shown on app load, confirms to the user that the presence can be updated
  client.updatePresence({
    state: 'Getting Ready...',
    largeImageKey: 'mainlogo',
    startTimestamp: Date.now(),
  });
}

//Async to update the current activity
async function updateActivity(matchType){}

//When ready, set an initial status
app.on('ready', () => {
  setActivity();
});

//IPCMain to handle updates to presence
ipcMain.on('updateStatus', function(event, data) {
  console.log(`Recieved ${data}`)
});
