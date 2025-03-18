import { REDIS_SERVER_NAME, REDIS_SERVER_PORT } from "$env/static/private";
import Redis from "ioredis";




const redis = new Redis({
    host: REDIS_SERVER_NAME,
    port: REDIS_SERVER_PORT
});


export default redis