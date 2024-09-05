class Animals {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    
    move(speed){
        console.log(`this ${this.name} is moving at ${speed}kph`);
    }

}
class Shark extends Animals {

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed); 
    }

}

class Cheetah extends Animals {

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }

}

class Pigeon extends Animals {

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }

}

const shark = new Shark("Shark", 105, 40);
const cheetah = new Cheetah("Cheetah", 10, 130);
const pigeon = new Pigeon("Pigeon", 5, 40, 97);

shark.swim();
cheetah.run();
pigeon.fly();

