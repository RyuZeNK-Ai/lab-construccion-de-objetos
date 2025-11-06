function FriendsList() {
  this.friends = []
}

const count = parseInt(process.argv[3])
const myList = new FriendsList()

for (let i = 0; i < count; i++) {
  myList.friends.push(process.argv[4 + i])
}

console.log(myList.friends)



