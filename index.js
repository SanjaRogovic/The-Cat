//  Create a class that represents a cat. It should have properties for `tiredness`, `hunger`, `loneliness` and `happiness`

class Cat {
    constructor(name){
        this.name = name,

        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }


    // Create methods that increase/decrease these properties

    play(happinessValue){
        this.happiness += happinessValue;
      
    }

    pet(value){
        // this.loneliness += lonelinessValue

        return this.loneliness = Math.max(0, this.loneliness -= value)
    }

    feed(foodAmount){
        // if (this.hunger > foodAmount){
        //     this.hunger -= foodAmount; 
        // } 

        // another example with Math
        return this.hunger = Math.max(0, this.hunger -= foodAmount) 
    }

    sleep(sleepHours){
        return this.tiredness = Math.max(0, this.tiredness -= sleepHours)


    // added not only decreasing the tiredness but also increasing hunger (it happens after a nap right?)
    // return (this.tiredness = Math.max(0, this.tiredness - hours), this.hunger++);

    }


    // write a method that prints out the cat’s status in each area

    printStatus(){
        console.log('Cat status');
        console.log(`Tiredness: ${this.getTiredness()}`)
        console.log(`Hunger: ${this.getHungerStatus()}`)
        // console.log()

    }

    getTiredness(){
        if(this.tiredness === 0){
            return `${this.name} is not sleepy`;
        } else if (this.tiredness > 0 && this.tiredness < 4){
            return `${this.name} is sleepy`;
        } else {
            return `${this.name} is exhausted`;
        }
    }

    getHungerStatus(){
        if (this.hunger === 0){
            return 'Fluffy is full';
        } else if (this.hunger <= 5) {
            return 'Fluffy is a bit hungry';
        } else {
            return 'Fluffy is really hungry!';
        }
    }
    
}

const myCat = new Cat('Fluffy');
console.log(myCat)

myCat.play(9)
myCat.feed(2)
myCat.pet(4)
myCat.sleep(5)
console.log(myCat.printStatus())