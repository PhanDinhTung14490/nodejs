import express from 'express';
const route = express.Router();

route.get('/', (request,response)=>{
    response.send(`
        <h1>Home Page</h1>
        <p>content text</p>
        <img src="https://kenh14cdn.com/thumb_w/620/2017/photo-1-1503945084922.jpg">
    `)
});

export default route;