 const app=require('express')();
 const port=8080;
 const basicAuth = require('express-basic-auth');
 
 app.get('/', (q, s) => {
     var songs=["P.S. I Love You", "Accidents Will Happen", "Now Is the Hour", "Ad-Lib Blues", "An Affair to Remember (Our Love Affair)", "That Great Come and Get It Day", "Ain't She Sweet", "The Brooklyn Bridge", "You'll Always Be the One I Love", "My Way of Life", "All Alone", "Spring Is Here", "The Moon Got in My Eyes", "Faithful", "The Best of Everything", "Come Back to Me", "Golden Moment", 
 "Every Man Should Marry", "Goodbye Lover, Goodbye", "Body and Soul", "You're Part of My Heart"];
     s.send(`${songs[Math.floor(Math.random()*21)]}`)
 })
 
 app.get('/birth_date', (q, s) => {
     s.send("December 12, 1915")
 })
 
 app.get('/birth_city', (q, s) => {
     s.send("Hoboken, New Jersey, U.S.")
 })
 
 app.get('/wives', (q, s) => {
     s.send("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx")
 })
 
 app.get('/picture', (q, s) => {
     s.sendFile("/home/docode/project/Frank_Sinatra_'57.jpg")
 })
 
 app.get('/public', (q, s) => {
     s.send("Everybody can see this page")
 })
 
 app.use(basicAuth({
     users: {'admin':'admin'},
     challenge: true,
     unauthorizedResponce: "401 Not authorized"
     }
 ))
 
 app.get('/protected', (q, s) => {
     s.send("Welcome, authenticated client")
 })
 
 app.listen(port, () =>{
     console.log(`go to http://web-k4b24b263-b7cf.docode.qwasar.io`)
 }
 
 )
