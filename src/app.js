import express from "express"
import cors from "cors"
const app = express()

//configs
app.use(cors())
app.use(express.json())
app.listen(5000)

const usuarios = []
const tweets =[]

app.post("/sign-up" , (req, res) => {
    const {username , avatar} = req.body
    if(!username || username === ""|| typeof username !== "string" || !avatar || avatar === "" || typeof avatar !== "string"){
        res.sendStatus(400)
        return 
    }

    const newUser = {
        username,
        avatar
    }
    usuarios.push(newUser)
    res.send(usuarios)
})

app.post("/tweets" , (req , res)=>{
    const {username , tweet} = req.body
    const usuarioCadastrado = usuarios.find(cadastro => cadastro.username === username)
    if(!username || username === ""|| typeof username !== "string" || !tweet || tweet === "" || typeof tweet !== "string"){
        res.sendStatus(400)
        return 
    }

    if(!usuarioCadastrado){
        return res.send("UNAUTHORIZED")
    }

    const newTweet = {username , tweet}
    tweets.push(newTweet)
    res.send("OK")
})


app.get("/tweets" , (req, res) => {
    // const {username , tweet} = req.params

    const userAtual = tweets.map((t) => {
        const userAv = usuarios.find((i) => i.username === t.username)
        return {username:t.username , tweet: t.tweet, avatar: userAv.avatar}
    })
    const avatar = userAtual.avatar

    res.send(userAtual.slice(-10))
})

