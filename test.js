import * as redis from 'redis';

const client = redis.createClient({
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