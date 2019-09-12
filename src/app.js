import * as PIXI from 'pixi.js'

const app = new PIXI.Application({ transparent: true });
document.body.appendChild(app.view);

var centrX = app.screen.width / 2;
var centrY = app.screen.height / 2;


var container = new PIXI.Container();
container.x = centrX;
container.y = centrY;

var r = 100;
var count = 20;
for (let i = 0; i < count; i++) {
    var alpha = i * 360 / count;
    var x = r * Math.cos(alpha);
    var y = r * Math.sin(alpha);
    creatBunny( x, y);
}


app.stage.addChild(container);

function creatBunny(x, y) {
    // create a new Sprite from an image path.
    const bunny = PIXI.Sprite.from('assets/bunny.png');

// center the sprite's anchor point
    bunny.anchor.set(0.5);

// move the sprite to the center of the screen
    bunny.x = x;
    bunny.y = y;

    container.addChild(bunny);

}

app.ticker.add(() => {
    // just for fun, let's rotate mr rabbit a little
    container.rotation += 0.01;
});
