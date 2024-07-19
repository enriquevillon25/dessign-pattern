
type screen = 11 | 14 | 18;
type camera = 2 | 3;

interface IiPhone {
  screen: screen | null;
  camera: camera | null;
}

class IPhone implements IiPhone {
  screen: screen | null;
  camera: camera | null;
  constructor() {
    this.screen = null;
    this.camera = null;
  }
  setCamera(camera: camera) {
    this.camera = camera;
  }
  setScreen(screen: screen) {
    this.screen = screen;
  }
}

class BuilderPhone {
  iPhone: IPhone;
  constructor() {
    this.iPhone = new IPhone();
  }
  buildCamera(camera: camera) {
    this.iPhone.setCamera(camera);
    return this;
  }
  buildScreen(screen: screen) {
    this.iPhone.setScreen(screen);
    return this;
  }
}

const iphone15 = new BuilderPhone().buildCamera(2).buildScreen(11);
const iphone15Pro = new BuilderPhone().buildCamera(3).buildScreen(14);
const iphone15ProMax = new BuilderPhone().buildCamera(3).buildScreen(18);
