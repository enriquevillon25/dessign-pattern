interface IPersons {
  name: string;
}
class Persons implements IPersons {
  name: string;
  constructor(pName: string) {
    this.name = pName;
  }
}

class Developer extends Persons {
  constructor(name: string) {
    super(name);
  }
}
class SingletonGonzalo {
  constructor() {
    return new Developer("Gonzalo");
  }
}
