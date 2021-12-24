{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    //public(default), private, protected
    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7 // class level

        public constructor( private coffeeBeans: number = 0) {}

        fillCoffeeBeans(beans: number) {
            if(beans < 0) {
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

        protected abstract extract(shots: number): CoffeeCup;

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
        constructor(beans: number) {
            super(beans);
        }
        private steamMilk(): void {
            console.log('steaming milk')
        }
        protected extract(shots: number): CoffeeCup {
            this.steamMilk();
            return {
                shots,
                hasMilk: true
            }
        }
    }
    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup {
            return {
                shots,
                hasSugar: true
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 'as23'),
        new SweetCoffeeMaker(16, 4),
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 'as23'),
        new SweetCoffeeMaker(16, 4)
    ];
    machines.forEach(machine => {
        console.log('---------------------------')
        machine.makeCoffee(1)
    })
}
