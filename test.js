import { createClient } from 'redis';

const client = createClient({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    socket: {
        host: process.env.HOST,
        port: process.env.PORT
    }
});

client.on('error', (err) => {
    console.log('Redis Client Error', err)
});

await client.connect();