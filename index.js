const cheerio = require('cheerio');
const axios = require('axios');

const username = "ayushraj"

const url="https://codeforces.com/profile/"+username

async function getGenre() {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        const genre = $('.user-rank').text();

        if(genre.trim().split(" ")[0] == "Unrated") console.log("user is unrated")
        else if(genre.trim() == "Newbie") {
            console.log("user is Newbie");
            //const data = $('.user-gray').text();
            //console.log(data.split(" ")[1]);
            //console.log(data);
        }
        else if(genre.trim().split(" ")[0] == "Pupil") {
            console.log("user is Pupil");
        }
        else if(genre.trim().split(" ")[0] == "Specialist") {
            console.log("user is Specialist");
        }
        else if(genre.trim().split(" ")[0] == "Expert") {
            console.log("user is Expert");
        }
        else if(genre.trim().split(" ")[0] == "Candidate") {
            console.log("user is Candidate Master");
        }
        else if(genre.trim().split(" ")[0] == "Master") {
            console.log("user is Master");
        }
        else if(genre.trim().split(" ")[0] == "International") {
            console.log("user is International Master");
        }
        else if(genre.trim().split(" ")[0] == "Grandmaster") {
            console.log("user is Grandmaster");
        }
        else if(genre.trim().split(" ")[0] == "Legendary") {
            console.log("user is Legendary Grandmaster");
            //const data = $('.user-legendary').text();
            //console.log(data.split(" ")[1]);
            //console.log(data);
        }
        else {
            console.log("Errrrrrr.. User Dooont Exists")
        }
        

        // if(genre[2] == undefined) {
        //     console.log("unrated user")
        // }   
        // else {
        //     console.log("User rank : ", genre[1]);
        //     console.log("User rating : ", genre[2].substr([username.length], 4));
        // }
            
        //console.log("genre :", genre )
        //console.log("data :", genre.trim().split(" ")[0]);
        
    }
    catch(error) {
        console.error(error);
    }
}

getGenre();