class UserCreator {
    constructor(name1, score1) {
        this.name = name1;
        this.score = score1;
    }
    increment() {
        this.score++
    }
    login() {
        console.log('login');

    }
}
const user1 = new UserCreator('Eva', 78);
user1.increment();
console.log(user1)
