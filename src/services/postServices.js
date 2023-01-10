const getPosts = (start)=>{
    const response = fetch(`https://jsonplaceholder.typicode.com/posts?start=${start}&size=15`)
    return response
}

const getUsers =  ()=>{
    const response = fetch(`https://jsonplaceholder.typicode.com/users`)
    return response
}

const getComments = async (id)=>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    const data = await response.json()
    return data
}

module.exports = {
    getComments,
    getPosts,
    getUsers
}