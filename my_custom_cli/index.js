#!/usr/bin/env node  
const yargs = require('yargs');
const  {argv}  = yargs(process.argv);
//const inquirer = require('inquirer');
const pokemoves = async (name)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon= await response.json();
    const moves = pokemon.moves.map(({move})=>move.name);
    console.log(moves.slice(0,5));
}

pokemoves(argv.pokemon);
// const prompt = inquirer.createPromptModule();
// prompt([{
//     type: 'input',
//     name: 'poke',
//     message: 'Enter the name of the pokemon'
// }]).then((response)=>{
//     const pokemon = response.poke;
//     pokemoves(pokemon);
// })

