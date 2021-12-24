{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    //
    class CheapMilkSteamer implements MilkFrother{
        private steamMilk() {
            console.log('steaming some milk');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }
    class FancyMilkSteamer implements MilkFrother{
        private steamMilk() {
            console.log('steaming fancy milk');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }
    class ColdMilkSteamer implements MilkFrother{
        private steamMilk() {
            console.log('cold milk');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true,
            }
        }
    }
    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    //
    class CandySugarMixer implements SugarProvider{
        private getSugar() {
            console.log('getting some sugar from jar')
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            this.getSugar();
            return {
                ...cup,
                hasSugar: true,
            }
        }
    }
    class SugarMixer implements SugarProvider{
        private getSugar() {
            console.log('jar')
        }
        addSugar(cup: CoffeeCup): CoffeeCup {
            this.getSugar();
            return {
                ...cup,
                hasSugar: true,
            }
        }
    }
    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup
        }
    }

    //public(default), private, protected
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7 // class level
        public constructor(
            private coffeeBeans: number = 0,
            private milk: MilkFrother,
            private sugar: SugarProvider,
        ) {}


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
            const coffee = this.extract(shots);
            const sugarAdded = this.sugar.addSugar(coffee)
            return this.extract(shots)
        }

        clean() {
            console.log('clean')
        }
    }
    //
    const cheapMilkMaker = new CheapMilkSteamer();
    const fancyMilkMaker = new FancyMilkSteamer();
    const coldMilkMaker = new ColdMilkSteamer();
    const noMilk = new NoMilk();

    //
    const candySugar = new CandySugarMixer();
    const sugar = new SugarMixer();
    const noSugar = new NoSugar();



    const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar)
    const sweetMachine = new CoffeeMachine(12, noMilk, sugar)

    const latteMachine = new CoffeeMachine(12,fancyMilkMaker, noSugar)
    const coldLatteMachine = new CoffeeMachine(12,cheapMilkMaker, candySugar)
    const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, sugar);

}
