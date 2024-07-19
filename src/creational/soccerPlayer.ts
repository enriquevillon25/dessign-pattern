abstract class IPlayer {
  abstract name: string;
  abstract profesional: boolean;
}

abstract class ISoccerPlayer {
  abstract pace: number;
  abstract shooting: number;
}

class Player implements IPlayer {
  name: string;
  profesional = true;
  constructor(name: string) {
    this.name = "";
  }
}

class SoccerPlayer extends Player implements ISoccerPlayer {
  pace: number;
  shooting: number;
  constructor(name: string) {
    super(name);
    this.pace = 0;
    this.shooting = 0;
  }
}

class SoccerBuider {
  soccerPlayer: SoccerPlayer;
  constructor(pName: string) {
    this.soccerPlayer = new SoccerPlayer(pName);
  }
  setPace(pPace: number) {
    this.soccerPlayer.pace = pPace;
    return this;
  }
  setShooting(pShooting: number) {
    this.soccerPlayer.shooting = pShooting;
    return this;
  }
  setName(pName: string) {
    this.soccerPlayer.name = pName;
    return this;
  }
  trainPace() {
    this.soccerPlayer.pace += 10;
  }
  getSoccer() {
    return this.soccerPlayer;
  }
}

const messi = new SoccerBuider("Messi");

messi.setShooting(90).setPace(90).trainPace();

console.log("messi", messi);
