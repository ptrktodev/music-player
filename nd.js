const arrayMusic = [
    {
        name : 'Me & U',
        artist : 'Cassie',
        img : 'https://lh3.googleusercontent.com/em_S1LFkZUvgMpICf6T_6AmW61vHzHuA_IVUH2xJWWFMDCiuaO9FgDtJXV83jjDK5MqR6ND50ZgQUDYC=w544-h544-s-l90-rj',
        bg : '#282000',
        music : './music/CassieMe&You.mp3'
    }, 
    {
        name : 'The Way I Are',
        artist : 'Timbaland',
        img : 'https://lh3.googleusercontent.com/Vb3DAJSbaHZEPGKwWqyVl7BFHGGs6Ov11fONXFzdF9MC8VJZvW0x_QvLOeHw-qjAoI1NDVj300Ht4N7A=w544-h544-s-l90-rj',
        bg : '#a18100',
        music : './music/TheWayIAre.mp3'
    },
    {
        name : 'Give It to Me',
        artist : 'Timbaland',
        img: 'https://lh3.googleusercontent.com/q36YDK8BKWD9p6y-kdK8tP__uqthEBVlOg0A0pThyozlIpacIMqvb95qnfajl-xqnYjlsrVN2GAaaF0=w544-h544-s-l90-rj',
        bg : '#420700',
        music : './music/GiveItToMe.mp3',
    },
    {
        name : 'Last Night',
        artist : 'Keyshia Cole',
        img : 'https://lh3.googleusercontent.com/cLypKWOgqrcMsDL6s_gMP9sT2dsGZQMux350M0D3etEepH1mmYf0L_v7uG0RCPTaFPtWpt4m4u64pFc=w544-h544-l90-rj',
        bg : '#a77e00',
        music : './music/LastNight.mp3'
    }
]

const fs = require('fs')
 //const http = require('http')
const path = require('path')
const url = require('url')
const change = require('./moduleChange')
const changeMod = require('./changemod')
const jsdom = require('jsdom')

const express = require('express')
const app = express()
const port = 8000

// template
const templatePrimary = fs.readFileSync('index.html', 'utf-8')
const templateICONS = fs.readFileSync('icon.html', 'utf-8')

//JSON ICON
const icons = fs.readFileSync('./icon.json', 'utf-8')
const iconsData = JSON.parse(icons)
console.log(iconsData)

// ------------

function temp() {
    const condicional = 0

/*     const TemplateInfo = arrayMusic.map(el => change(templatePrimary, el))
    const newTemplate01 = templatePrimary.replace(templatePrimary, TemplateInfo[condicional]) */

    const iconsLoop = iconsData.map(el => changeMod(templateICONS, el))
    const newTemplate02 = templatePrimary.replace('{%ICONS%}', iconsLoop)
    return newTemplate02
}

// ----------------

app.get('/', (req, res) => {
    res.send(temp())
  })
  
  app.get('/musics', (req, res) => {
      res.send(arrayMusic)
  })
  
  app.get('/musics/{id}', (req, res) => {
      res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

/*  const server = http.createServer((req, res) => {
    const search_ = url.parse(req.url , true)
    const pathname = search_.pathname
    
    if (pathname === '/' || pathname === '/menu') {
        res.writeHead(200, {'Content-type': 'text/html' })

        // ---------------

        res.end(temp())
    }
})  */

/* server.listen(8000, '127.0.0.1', () => {
    console.log('Sucess')
}) */







