import mongoose from "mongoose";
import {DB_NAME} from "./constants"

import express from "express"
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`)
        app.on("error", (error) => {
            consolr.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            consolr.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.error("ERROR: ", error)
        throw err 
    }
})()