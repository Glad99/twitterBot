import express  from "express";
import 'dotenv/config';
import rwClient from "./twitterClient.js";
import { CronJob } from "cron";
import { error } from "console"

const port = 5000
const app = express();

app.listen(port, () => console.log(`port is running on ${port}`))
const tweet = async() => {
    try{
        await rwClient.v2.tweet(
            "it's 5:20pm. Good Morning and have a very productive day! Testing servers :)"
        );
        console.log("tweeted");
    } catch (error) {
        console.error(error);
    }
};

const job = new CronJob("45 12 * * *", ()=> {
    tweet();
});

job.start();