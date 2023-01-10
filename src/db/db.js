const fs = require('fs')

const DB = require('./db.json')

const getAll = ()=>{
    return [...DB]
}

const addUsers = (data)=>{
    fs.writeFileSync('./src/db/db.json', JSON.stringify(data),'utf-8', (err)=>{
        console.log(err);
    })
}

module.exports = {
    getAll,
    addUsers
}