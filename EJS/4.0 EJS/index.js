var express = require('express');
const app = express();

app.set('view engine', 'ejs');


const d = new Date();
let dayIdx = d.getDay();

function checkDay(dayIdx) {
    if (dayIdx == 0 || dayIdx == 6){
        return "Weekend"
    }
    else {
        return "Weekday"
    }
}

const port = 3000


app.get("/" , (req, res) =>{
    const dayType = checkDay(dayIdx)
    const data = {dayType: dayType};
    res.render("index.ejs" , data)
} )


app.listen(port , ()=>{
    console.log(`Server is listening on port ${port}`);

});