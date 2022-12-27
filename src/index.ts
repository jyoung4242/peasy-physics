import "./style.css";

import { Physics, Vector, Stadium, Circle, Entity as PhysicsEntity } from "@peasy-lib/peasy-physics";
import { UI } from "@peasy-lib/peasy-ui";

/********************************************** */
//PEASY-UI
/************************************************/
const template = `
<div class="game">
    <div class="player" \${ ==> player.element} style="top: \${player.position.y}px;left: \${player.position.x}px;"></div>
    <div class="asteroid" \${ ==> asteroid.element} style="top: \${asteroid.position.y}px;left: \${asteroid.position.x}px;"></div>
</div>
`;

const model = {
  player: {
    element: <any>null,
    position: { x: 50, y: 50 },
  },
  asteroid: {
    element: <any>null,
    position: { x: 120, y: 50 },
  },
};
UI.create(document.body, template, model);
UI.initialize(false);

/********************************************** */
//PEASY-Physics
/************************************************/
const playerShape = {
  position: { x: 0, y: 0 },
  radius: <any>undefined,
  size: <any>undefined,
  alignment: <any>undefined,
};
playerShape.size = new Vector(50, 50);

const asteroidShape = {
  position: { x: 0, y: 0 },
  radius: <any>undefined,
  size: <any>undefined,
  alignment: <any>undefined,
};
asteroidShape.radius = new Vector(40, 40);

class Entity {
  public shapes = <any>[];
  public forces = <any>[];
  public mass: number = 1;
  public color? = "";
  public maxSpeed?: any;
  public constructor(public position: Vector, public orientation = 0) {}
}

Physics.initialize();

let player = new Entity(new Vector(50, 50));
player.shapes = [playerShape];
player.forces = [];
player.maxSpeed = 500;

player = Physics.addEntities(player)[0];
player.mass = 3;

let asteroid = new Entity(new Vector(120, 50));
asteroid.shapes = [asteroidShape];
asteroid.forces = [];
asteroid.maxSpeed = 500;

asteroid = Physics.addEntities(asteroid)[1];
asteroid.mass = 10;

/********************************************** */
//Game Loop
/************************************************/
let startime: number, lasttime: number;

const game_loop = (timestamp: number) => {
  if (startime == undefined) {
    startime = timestamp;
    lasttime = timestamp;
  }
  let deltaTime = (timestamp - lasttime) / 1000;
  if (deltaTime > 1.5) {
    deltaTime = 0;
    lasttime = timestamp;
  }

  UI.update();
  Physics.update(deltaTime, timestamp);
  requestAnimationFrame(game_loop);
};

requestAnimationFrame(game_loop);
