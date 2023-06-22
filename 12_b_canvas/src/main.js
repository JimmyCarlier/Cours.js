export default function main(stage) {
  stage = createCircle(stage);
  return stage;
}

function createCircle(st) {
  let gr = new createjs.Graphics();
  let circle = new createjs.Shape(gr);

  gr.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;
  st.addChild(circle);
}
