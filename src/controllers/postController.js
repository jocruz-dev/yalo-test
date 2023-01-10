const {
    getPosts,
    getComments,
    getUsers
} = require('../services/postServices')

const {getAll, addUsers} = require('../db/db')

const getAllPosts = async (req, res) => {

    if (req.method == "POST") {
        res.status(500)
        res.send({
            message: "Only gets"
        })
    }

    let arrPosts = []
    let arrComments = []
    let arrUsers = []
    arrPosts = await getPosts()
    arrPosts = await arrPosts.json()

    if (!getAll()) {
        arrUsers = await getUsers()
        arrUsers = await arrUsers.json()
        addUsers(arrUsers)
    }else {
        arrUsers = getAll()
    }

    arrPosts.forEach(async (value, index) => {
        arrComments = await getComments(value.id)
        value.comments = arrComments
        value.user = arrUsers.filter((res)=> res.id == value.id)

        if (index == (arrPosts.length - 1)) {
            res.status(200)
            res.send(arrPosts)
        }
    })
}

module.exports = {
    getAllPosts
}