const homeWriteAndVideos = require('../../homeWriteAndVideos.json')
let shopping = [];
Object.keys(homeWriteAndVideos).map((card) => shopping.push(homeWriteAndVideos[card]));
const homeNews = (req,res,next)=>{
   res.send(shopping)
}
module.exports = {homeNews}