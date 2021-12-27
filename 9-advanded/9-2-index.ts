{
  const obj = {
    name: "bongsu",
  };
  obj.name;

  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"];
  const text: Name = "true";

  type Gender = Animal["gender"];
  const gender: Gender = "male";

  type Keys = keyof Animal;
  const keys: Keys = "age";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "bongsu",
    gender: "female",
  };
}
