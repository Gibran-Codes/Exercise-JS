class User {

    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`there are ${User.userCount} users are online`);
        
    }

    sayHello(){
        console.log(`hello my username is ${this.username}`);
    }
}

const user1 = new User("Zilong");
user1.sayHello();
const user2 = new User("Alucard");
user2.sayHello();
const user3 = new User("Miya");
user3.sayHello();
const user4 = new User("Layla");
user4.sayHello();

User.getUserCount()