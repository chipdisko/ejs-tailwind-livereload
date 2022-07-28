const express = require('express')
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 50);
});
const app = express()
app.use(connectLiveReload());

const path = require('path')
const PORT = process.env.PORT || 3000
const { router } = require('./routes/routes')

//setup view engine using ejs and tailwind
app.set('views', path.join(__dirname, './views/'))
app.set('view engine', 'ejs')
app.use("/public", express.static('public'))

//routes
app.use('/', router)

//listen to port
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT},
    http://localhost:${PORT}`)
})