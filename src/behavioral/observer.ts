interface IObserver {
  update: () => void;
}
interface ISubject {
  subscribe: (obvs: IObserver) => void;
  notify: () => void;
  observer: IObserver[];
}

export function observer() {
  class Subject implements ISubject {
    observer: IObserver[];
    constructor() {
      this.observer = [];
    }
    subscribe(observer: IObserver) {
      this.observer.push(observer);
    }
    notify(): void {
      this.observer.forEach((obv) => obv.update());
    }
  }

  class Observer implements IObserver {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    update(): void {
      console.log(`Hola soy ${this.name}`);
    }
  }

  const subject = new Subject();
  const observer = new Observer("Enrique");

  subject.subscribe(observer);
  subject.notify();
}
