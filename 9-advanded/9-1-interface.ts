{
  type PositionType = {
    x: number;
    y: number;
  };

  interface PositionInterface {
    x: number;
    y: number;
  }

  // 둘다 되는 것
  const obj1: PositionType = {
    x: 1,
    y: 2,
  };
  const obj2: PositionInterface = {
    x: 3,
    y: 4,
  };

  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;
  }

  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // interface만 머지가능

  interface PositinoInterface {
    z: number;
  }

  // type만 가능 computed properties,,,

  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"];

  type NumberType = number;
  type Dircetion = "left" | "right";
}
