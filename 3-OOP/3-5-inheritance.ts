{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    //public(default), private, protected
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7 // class level


        public constructor( private coffeeBeans: number = 0) {}


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
    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, private readonly serialNumber: string) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('steaming milk')
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }
    }
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(23)

    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, '123ffw');

    const coffee = latteMachine.makeCoffee(1)
    console.log(coffee)
}
