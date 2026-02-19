const users = [
    {id: 1, firstname: "Alice"},
    {id: 2, firstname: "Bob"},
    {id: 3, firstname: "Charlie"},
]

//traverse με forEach
//meta to fat arrow einai to swma tis sinartisis
//an eixame mono mia entoli mesa sto soma tha mporouse na einai kai mia grammi kai xwris curly braces

users.forEach(user => {
    console.log(user.firstname);
})


//map

const usersWithEmails = [
    {id: 1, firstname: "Alice", email:"alice@aueb.gr"},
    {id: 2, firstname: "Bob", email: "bob@gmail.gr" }
    {id: 3, firstname: "Charlie", email: "charlie@gmail.com"},
]

usersWithEmails.map(user => user.email) // [alice@aueb.gr, bob@gmail.com. charlie@gmail.com]


//filter


const activeUsers = [
    {id: 1, firstname: "Alice", isActive: true},
    {id: 2, firstname: "Bob", isActive: false }
    {id: 3, firstname: "Charlie", isActive: true},
]

const usersWithStatusTrue = activeUsers.filter(users => user.isActive)
console.log(usersWithStatusTrue)


