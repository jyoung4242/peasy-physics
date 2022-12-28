import "./style.css";

import { Physics, Vector, Stadium, Circle, Entity as PhysicsEntity } from "@peasy-lib/peasy-physics";
import { UI } from "@peasy-lib/peasy-ui";
import { Input } from "@peasy-lib/peasy-input";

/********************************************** */
//PEASY-UI
/************************************************/
const template = `
<div>
  <div class="game">
      <div class="player" \${ ==> player.element} style="translate: \${player.position.x}px \${player.position.y}px; left: -25px; top: -25px;"></div>
      <div class="asteroid" \${ ==> asteroid.element} style="translate: \${asteroid.position.x}px \${asteroid.position.y}px; left: -40px; top: -40px;"></div>
  </div>
  <canvas \${ ==> canvas}></canvas>
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
  canvas: <any>undefined,
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
  color: 'blue',
};
playerShape.size = new Vector(50, 50);

const asteroidShape = {
  position: { x: 0, y: 0 },
  radius: <any>undefined,
  size: <any>undefined,
  alignment: <any>undefined,
  color: 'red',
};
asteroidShape.radius = 40;

class Entity {
  public entity: any;
  public shapes = <any>[];
  public forces = <any>[];
  public mass: number = 1;
  public color? = "";
  public maxSpeed?: any;
  public constructor(public position: Vector, public orientation = 0) {}
}

Physics.initialize({
  ctx: model.canvas.getContext('2d'),
  showAreas: true,
  // resolver: 'spatial-hash-grid',
});

let player = new Entity(new Vector(50, 50));
player.shapes = [playerShape];
player.forces = [];
player.maxSpeed = 500;
player.color = 'blue';
// player.entity = model.player;

let asteroid = new Entity(new Vector(120, 50));
asteroid.shapes = [asteroidShape];
asteroid.forces = [];
asteroid.maxSpeed = 500;
asteroid.color = 'red';

let entities = Physics.addEntities([player, asteroid]);
player = entities[0];
asteroid = entities[1];
player.mass = 3;
asteroid.mass = 10;

console.log(player, asteroid);

const ang2Rad = (a: number): number => {
  return a * (Math.PI / 180);
};

const thrust = () => {
  const tempX = Math.cos(ang2Rad(Physics.entities[0].orientation));
  const tempY = Math.sin(ang2Rad(Physics.entities[0].orientation));
  const dir = new Vector(tempX, tempY).multiply(50);
  console.log("thrust");
  Physics.entities[0].addForce({
    name: "thrust",
    direction: dir,
    duration: 0,
  });
  console.log(Physics.entities[0].forces);
};

const reverse = () => {
  const tempX = Math.cos(ang2Rad(Physics.entities[0].orientation));
  const tempY = Math.sin(ang2Rad(Physics.entities[0].orientation));
  const dir = new Vector(-tempX, -tempY);

  Physics.entities[0].addForce({
    name: "reverse",
    direction: dir,
    duration: 0,
  });
  console.log("reverse thrust");
};

const turnLeft = () => {
  Physics.entities[0].orientation += -1;
  console.log("turn L");
};

const turnRight = () => {
  Physics.entities[0].orientation += 1;
  console.log("turn R");
};

/*************************************************/
// Peasy-Input
/*************************************************/

const mapping = Input.map({
  ArrowUp: "thrust",
  ArrowDown: "reverse",
  ArrowLeft: "turnL",
  ArrowRight: "turnR",
});

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
  }
  lasttime = timestamp;

  //check inputs
  if (Input.is("thrust")) thrust();
  if (Input.is("reverse")) reverse();
  if (Input.is("turnL")) turnLeft();
  if (Input.is("turnR")) turnRight();

  Physics.update(deltaTime, timestamp);
  model.player.position = Physics.entities[0].position;
  model.asteroid.position = Physics.entities[1].position;
  UI.update();
  requestAnimationFrame(game_loop);
};

requestAnimationFrame(game_loop);
