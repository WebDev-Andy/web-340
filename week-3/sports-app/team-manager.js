import moment from "moment";
import { Team } from "./team.js";

// teams variables
let seattle = new Team("Seattle", "Seahawks", "54");
let lA = new Team("Los Angeles", "Rams", "46");
let arizona = new Team("Arizona", "Birdies", "41");
let newE = new Team("New England", "Patriots", "57");
let balt = new Team("Baltimore", "Ravens", "56");

// teams array
let teams = [seattle, lA, arizona, newE, balt];

// a function to find and display teams
export function findTeams()
{
   console.log("-- DISPLAY TEAMS --");

};

export function findTeam(teams)
{
  teams.forEach(() =>
    {
        console.log
        (
        "Name: " + teams.name +
        " Mascot: " + teams.mascot
        );    
    });
};

export function getGame()
{
    console.log("-- CHAMPIONSHIP GAME --");
    console.log( moment().format('MMMM Do YYYY') + " at 7:30 PM CST");
};



