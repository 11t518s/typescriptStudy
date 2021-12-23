{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }


    interface ICoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;


    }

    //public(default), private, protected
    class CoffeeMachine implements ICoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7 // class level
        private coffeeBeans = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans
        }

        static makeMachine(coffeeBeans: number):CoffeeMachine {
            return new CoffeeMachine(coffeeBeans)
        }

        fillCoffeeBeans(beans: number) {if(beans < 0) {
                throw new Error('value for beans should be greater than 0')
            }
            this.coffeeBeans += beans
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`)
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('not enough coffee beans')
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT
        }

        private prepreheat(): void {
            console.log('heating up...')
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...`)
            return {
                shots,
                hasMilk: false,
            }
        }
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.prepreheat();
            return this.extract(shots)
        }

        clean() {
            console.log('clean')
        }
    }
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(23)

    maker.fillCoffeeBeans(123123);
    maker.makeCoffee(2);


    const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(23)

    maker2.fillCoffeeBeans(123123); // invalid
    maker2.makeCoffee(2);
    maker2.clean()

    class AmateurUser {
        constructor(private machine: ICoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2)
            console.log(coffee)
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2)
            console.log(coffee)
            this.machine.fillCoffeeBeans(3);
            this.machine.clean()
        }
    }

    const amateur = new AmateurUser(maker)
    amateur.makeCoffee()
    const pro = new ProBarista(maker)
    console.log('------------')
    pro.makeCoffee()


}