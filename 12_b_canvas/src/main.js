let radius = 50;

export default function main(stage) {
  createBackground(stage);
  createCircle(stage);
  return stage;
}

function createCircle(st) {
  let gr = new createjs.Graphics();
  let circle = new createjs.Shape(gr);

  circle.addEventListener("click", onCircleClick);
  circle.addEventListener("tick", onCircleTick);
  
  circle.pace = 5;
  circle.canMove = true;

  gr.beginFill("DeepSkyBlue").drawCircle(0, 0, radius);
  circle.x = 50;
  circle.y = 50;
  //   createjs.Tween.get(circle, { loop: true })
  //   .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
  //   .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
  //   .to({ alpha: 0, y: 225 }, 100)
  //   .to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
  //   .to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));
  st.addChild(circle);
}
function onCircleClick(e) {
    let ps = e.currentTarget

    ps.canMove = !ps.canMove
}
function onCircleTick(e) {
  let tg = e.currentTarget;

  if (!tg.canMove) return;

  tg.x += tg.pace;
  if (tg.x > 600 - radius) {
    tg.pace *= -1;
  }
  if (tg.x < radius) {
    tg.pace = 5;
  }
}

function createBackground(st) {
  let gr = new createjs.Graphics();
  let bg = new createjs.Shape(gr);

  gr.beginFill("#fffff");
  gr.drawRect(0, 0, st.width, st.height);

  st.addChild(bg);
}
