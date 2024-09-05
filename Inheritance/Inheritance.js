class Animals {
    alive = true;

     eat(){
        console.log(`This ${this.name} is eating`);
     }

     sleep(){
        console.log(`This ${this.name} is sleeping`);
     }
}
class Shark extends Animals {
    name = "Shark";
    
    swim(){
        console.log(`This ${this.name} is swimming`);
        
    }
}

class Cheetah extends Animals {
    name = "Cheetah";
    
    run(){
        console.log(`This ${this.name} is running`);
        
    }
}

class Pigeon extends Animals {
    name = "Pigeon";
    
    fly(){
        console.log(`This ${this.name} is flying`);
        
    }
}

const shark = new Shark();
console.log(shark.alive);
shark.eat();
shark.sleep();
shark.swim();

const cheetah = new Cheetah();
console.log(cheetah.alive);
cheetah.eat();
cheetah.sleep();
cheetah.run();

const pigeon = new Pigeon();
console.log(pigeon.alive);
pigeon.eat();
pigeon.sleep();
pigeon.fly();
