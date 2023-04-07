import express from "express"

const router = express.Router();

router.get("/", (req,res) => {
    res.send("HELLO this is an end point ")
})

router.get("/inside", (req,res) => {
    res.send("HELLO this is an inside point ")
})

export default router;