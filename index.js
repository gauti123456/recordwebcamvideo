const express = require('express')

const app = express()

const PORT = process.env.PORT || 2000

app.use(function (req, res, next) {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT,() => {
    console.log("App is running perfectly")
})