import "./style.css";

import { Physics, Vector, Stadium, Circle, Entity as PhysicsEntity } from "@peasy-lib/peasy-physics";
import { UI } from "@peasy-lib/peasy-ui";
import { Input } from "@peasy-lib/peasy-input";

/********************************************** */
//PEASY-UI
/************************************************/
const template = `
<div class="game">
  <div class="player" \${ ==> player.element} style="translate: \${player.position.x}px \${player.position.y}px; left: -25px; top: -25px; rotate: \${player.angle}deg;"></div>
  <div class="asteroid" \${ ==> asteroid.element} style="translate: \${asteroid.position.x}px \${asteroid.position.y}px; left: -40px; top: -40px;"></div>
  <canvas \${ ==> canvas}></canvas>
</div>
`;

const THRUSTFORCE = 20;

const model = {
  canvas: <HTMLCanvasElement | null>null,
  player: {
    element: <any>null,
    position: { x: 50, y: 50 },
    angle: 0,
  },
  asteroid: {
    element: <any>null,
    position: { x: 120, y: 50 },
  },
};
UI.create(document.body, template, model);
UI.initialize(false);

let screenWidth: number;
let screenHeight: number;

window.addEventListener("DOMContentLoaded", () => {
  model.canvas.setAttribute("width", window.innerWidth.toString());
  model.canvas.setAttribute("height", window.innerHeight.toString());
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
});

window.addEventListener("resize", () => {
  model.canvas.setAttribute("width", window.innerWidth.toString());
  model.canvas.setAttribute("height", window.innerHeight.toString());
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;
});

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
asteroidShape.radius = 40;

class Entity {
  public shapes = <any>[];
  public forces = <any>[];
  public mass: number = 1;
  public color? = "";
  public maxSpeed?: any;
  public constructor(public position: Vector, public orientation = 0) {}
}

Physics.initialize({
  ctx: model.canvas.getContext("2d"),
  showAreas: true,
});

let player = new Entity(new Vector(250, 250));
player.shapes = [playerShape];
player.forces = [];
player.maxSpeed = 500;
player.color = "blue";

let asteroid = new Entity(new Vector(450, 450));
asteroid.shapes = [asteroidShape];
asteroid.forces = [];
asteroid.maxSpeed = 500;
asteroid.color = "red";

let entities = Physics.addEntities([player, asteroid]);
player = entities[0];
asteroid = entities[1];
player.mass = 3;
asteroid.mass = 10;

const ang2Rad = (a: number): number => {
  return a * (Math.PI / 180);
};

const thrust = () => {
  const tempX = THRUSTFORCE * Math.cos(ang2Rad(Physics.entities[0].orientation));
  const tempY = THRUSTFORCE * Math.sin(ang2Rad(Physics.entities[0].orientation));
  const dir = new Vector(tempX, tempY);

  Physics.entities[0].addForce({
    name: "thrust",
    direction: dir,
    duration: 0,
    magnitude: 500,
  });
};

const reverse = () => {
  const currentAngle = Physics.entities[0].orientation;
  let reverseAngle = currentAngle + 180;

  const tempX = THRUSTFORCE * Math.cos(ang2Rad(reverseAngle));
  const tempY = THRUSTFORCE * Math.sin(ang2Rad(reverseAngle));
  const dir = new Vector(tempX, tempY);

  Physics.entities[0].addForce({
    name: "reverse",
    direction: dir,
    duration: 0,
    magnitude: 500,
  });
};

const turnLeft = () => {
  Physics.entities[0].orientation += -3;
  console.log("turn L");
};

const turnRight = () => {
  Physics.entities[0].orientation += 3;
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

/**************************************************
 *  Screen Collision Management
 **************************************************/

const playerScreenCollision = () => {
  //check for screen collision
  if (model.player.position.x > screenWidth) {
    Physics.entities[0].position.x = -10;
    model.player.position.x = -10;
  }
  if (model.player.position.x < -25) {
    Physics.entities[0].position.x = screenWidth;
    model.player.position.x = screenWidth;
  }
  if (model.player.position.y > screenHeight) {
    Physics.entities[0].position.y = -10;
    model.player.position.y = -10;
  }
  if (model.player.position.y < -25) {
    Physics.entities[0].position.y = screenHeight;
    model.player.position.y = screenHeight;
  }
};

const asteroidScreenCollision = () => {
  //check for screen collision
  if (model.asteroid.position.x > screenWidth) {
    Physics.entities[1].position.x = -10;
    model.asteroid.position.x = -10;
  }
  if (model.asteroid.position.x < -25) {
    Physics.entities[1].position.x = screenWidth;
    model.asteroid.position.x = screenWidth;
  }
  if (model.asteroid.position.y > screenHeight) {
    Physics.entities[1].position.y = -10;
    model.asteroid.position.y = -10;
  }
  if (model.asteroid.position.y < -25) {
    Physics.entities[1].position.y = screenHeight;
    model.asteroid.position.y = screenHeight;
  }
};

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

  //check inputs
  if (Input.is("thrust")) thrust();
  if (Input.is("reverse")) reverse();
  if (Input.is("turnL")) turnLeft();
  if (Input.is("turnR")) turnRight();

  Physics.update(deltaTime, timestamp);
  model.player.position = Physics.entities[0].position;
  model.player.angle = Physics.entities[0].orientation;
  model.asteroid.position = Physics.entities[1].position;

  playerScreenCollision();
  asteroidScreenCollision();

  UI.update();
  requestAnimationFrame(game_loop);
  lasttime = timestamp;
};

requestAnimationFrame(game_loop);
