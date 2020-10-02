// Making Aliases
const Application = PIXI.Application;
const loader = PIXI.Loader.shared;
const resources = PIXI.Loader.shared.resources;
const Sprite = PIXI.Sprite;

// Create the canvas
const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    // backgroundColor: 0x008000,
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1
});

app.renderer.backgroundColor = 0x000000;
// app.renderer.view.style.position = "absolute";
// app.renderer.view.style.display = "block";
// app.renderer.autoDensity = true;
// app.renderer.resize(window.innerWidth, window.innerHeight);

// Add the canvas to the HTML
document.body.appendChild(app.view);

// let texture = PIXI.utils.TextureCache["images/download.jpg"];
// let sprite = new PIXI.Sprite(texture);

// Load an image, we can give a name to the loading file
loader
    .add("images/cat.png")
    // Tried to add a print on the console, but it does not work with the latest version
    // .onProgress.add(() => loadProgressHandler())
    .load(setup);

// function loadProgressHandler() {
//     console.log("loading");
// }

function setup() {
    const sprite = new Sprite(
        resources["images/cat.png"].texture
    );
    // sprite.x = 150;
    // sprite.y = 150;

    // Setting up the position in one single line of code
    sprite.position.set(200, 200); // Shorthand syntax

    // Size and Scale
    sprite.width = 80;
    sprite.height = 120;

    // Set the scale proportionately
    // sprite.scale.x = 2;
    // sprite.scale.y = 2;
    sprite.scale.set(1.5, 1.5); // Shorthand syntax

    // Rotation: the default rotation is around the sprite anchor point, which is the top left corner of
    // the sprite where the x and y start
    sprite.rotation = 0.5;

    // Change the anchor point, this way it is centered inside the sprite and it look like it is spinning
    // sprite.anchor.x = 0.5;
    // sprite.anchor.y = 0.5;
    sprite.anchor.set(0.5, 0.5); // Shorthand syntax

    // The pivot property works similar to the anchor, but it uses pixels
    // sprite.pivot.set(32, 32); // Shorthand syntax

    // Add the sprite to Stage
    app.stage.addChild(sprite);
}




