const path=require('path')
const express=require('express')
const hbs=require('hbs')

const app=express()
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        name:'Akshat singh',
        email:'akshatsingh.as09@gmail.com'
    })
})

app.get('/index',(req,res)=>{
    res.render('index')
})

app.get('/home',(req,res)=>{
    res.render('home')
})

app.get('/suggest_movie_solo',(req,res)=>{
    res.render('suggest_movie_solo')
})

app.get('/suggest_movie_friends',(req,res)=>{
    res.render('suggest_movie_friends')
})

app.get('/suggest_movie_friends1',(req,res)=>{
    res.render('suggest_movie_friends1')
})

app.get('/decide_movie_votes',(req,res)=>{
    res.render('decide_movie_votes')
})

app.get('/book_movie',(req,res)=>{
    res.render('book_movie')
})

app.get('/show_movies',(req,res)=>{
    res.render('show_movies')
})

app.listen(5000,()=>{
    console.log("server is up to to 5000")
})



app.get('*',(req,res)=>{
    res.render('404')
})