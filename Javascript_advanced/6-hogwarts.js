// Write a module named studentHogwarts: It contains two variables 
// privateScore set to 0, and name set to null/

const studentHogwarts = {
    privateScore: 0,
    name: null,
    setName: function (newName) {
        this.name = newName;
    },
    rewardStudent: function () {
        this.privateScore += 1;
    },
    penalizeStudent: function () {
        this.privateScore -= 1;
    },
    getScore: function () {
        return this.name + ': ' + this.privateScore;
    }
};

const harry = Object.create(studentHogwarts);
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = Object.create(studentHogwarts);
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore())
 