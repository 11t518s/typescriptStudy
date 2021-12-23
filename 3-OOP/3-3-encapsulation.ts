{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }


    //public(default), private, protected
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7 // class level
        private coffeeBeans = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number):CoffeeMaker {
            return new CoffeeMaker(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('not enough coffee beans')
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT
            return {
                shots,
                hasMilk: false,
            }
        }
    }
    const maker = CoffeeMaker.makeMachine(23)

    maker.fillCoffeeBeans(123123) // invalid

    class User {
        get fullName() : string {
            return `${this.firstName} ${this.lastName}`
        }
        private internalAge =4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            if (num < 0) {
                throw
            }
            this.internalAge = num
        }
        constructor(private firstName: string, private lastName: string) {}
    }
    const user = new User('steve', 'jobs');
    console.log(user.fullName)
    user.age = 5;
}