function userCreator(name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = function () {
        newUser.score++;
    };
    return newUser;
};

const user1 = userCreator("will", 46);
const user2 = userCreator("tim", 57);
const user3 = userCreator("Lukas", 77);
user1.increment()

console.log(user3.score)
