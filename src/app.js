import * as PIXI from 'pixi.js'

const app = new PIXI.Application({ transparent: true });
document.body.appendChild(app.view);

var centrX = app.screen.width / 2;
var centrY = app.screen.height / 2;
var rat=0;

var container = new PIXI.Container();
container.x = centrX;
container.y = centrY;


var count =20;
var r = count*10;
for (let i = 0; i < count; i++) {
    let alpha =  i*360 / count;
    var radian=180/Math.PI;
    var x = r * Math.cos(alpha/radian);
    var y = r * Math.sin(alpha/radian);
    creatBunny( x, y);
    x=Math.cos(alpha);
    y=0;

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
//bunny.rotation+=rotation;
    container.addChild(bunny);

}
function rotationBunny(count){
    for (let i = 0; i < count; i++) {
        container.children[i].rotation-=0.01;


    }


}

app.ticker.add(() => {
    // just for fun, let's rotate mr rabbit a little
    container.rotation += 0.01;
    rotationBunny(count);

});
