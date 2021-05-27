import users from './output.json'

// TODO: Add code to allow users to be accessed as a key/value pair. The key is
// the user id, and the value is whole user object. Remember to export any
// variable that you need to use in other components.

let allUsers = []
users.forEach(element => {
    allUsers.push({'userId': element.id, 'userObject': element})
});

export default allUsers
