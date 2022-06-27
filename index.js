const express = require('express')

const app = express()

app.use(function (req, res, next) {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000,() => {
    console.log("App is listening on port 5000")
})