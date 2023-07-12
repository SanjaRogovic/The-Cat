//  Create an object that represents a cat. It should have properties for `tiredness`, `hunger`, `loneliness` and `happiness`

class Cat {
    constructor(){
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }


    // Create methods that increase/decrease these properties

    play(happinessValue){
        this.happiness += happinessValue;
      
    }

    pet(lonelinessValue){
        this.loneliness += lonelinessValue
    }

    eat(hungerValue){
        this.hunger += hungerValue;

    }

    sleep(tirednessValue){
        this.tiredness += tirednessValue;
    }


    // write a method that prints out the cat’s status in each area

    printStatus(){
        if(this.tiredness > 5){
            console.log("Fluffy is tired");
        } else {
            console.log('Fluffy is not tired')
        }

        if (this.hunger > 5){
            console.log('Fluffy is hungry.')
        } else {
            console.log('Fluffy is not hungry')
        }

        if (this.loneliness > 5){
            console.log('FLuffy is lonely')
        } else {
            console.log('Fluffy is not lonely')
        }

        if (this.happiness > 5){
            console.log('Fluffy is happy')
        } else {
            console.log('Fluffy is not happy')
        }
    }
    
}

const fluffy = new Cat();
fluffy.play(9)
fluffy.eat(6)
fluffy.sleep(2)
fluffy.pet(4)
fluffy.printStatus()