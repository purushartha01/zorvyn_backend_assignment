
import express from "express";
import config from "@/shared/config/config.js";

const app = express();




app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port} in ${config.env} mode.`);
});