import express from "express"
import cors from "cors"
const app = express()

//configs
app.use(cors())
app.use(express.json())
app.listen(5000)

const usuarios = []
const tweet = [
    {
        username: "bobesponja",
        tweet: "Eu amo hambúrguer de siri!"
    }
]

app.get("/tweets" , (req, res) =>{
    res.send([
        {
            username: "bobesponja",
            avatar: "https://cdn.shopify.com/s/files/1/0150/0643/3380/files/Screen_Shot_2019-07-01_at_11.35.42_AM_370x230@2x.png",
            tweet: "Eu amo hambúrguer de siri!"
        }
    ])
})

app.post("/sign-up" , (req, res) => {
    const {username , avatar} = req.body
    const newUser = {
        username,
        avatar
    }
    usuarios.push(newUser)
    console.log(req.body)
    res.send("OK")
})

app.post("/tweets" , (req , res)=> {

})