// const { Rectangle } = require("pixi.js");

// ----------- Making Aliases -----------
const Application = PIXI.Application;
const loader = PIXI.Loader.shared;
const resources = PIXI.Loader.shared.resources;
const Sprite = PIXI.Sprite;

const Rectangle = PIXI.Rectangle;
const TextureCache = PIXI.utils.TextureCache;

// ----------- Create the canvas -----------
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

// -----------Add the canvas to the HTML-----------
document.body.appendChild(app.view);

// let texture = PIXI.utils.TextureCache["images/download.jpg"];
// let sprite = new PIXI.Sprite(texture);

// ----------- Load an image, we can give a name to the loading file PART 1-----------

// loader
//     .add("images/cat.png")
//     // Tried to add a print on the console, but it does not work with the latest version
//     // .onProgress.add(() => loadProgressHandler())
//     .load(setup);

// function setup() {
//     const sprite = new Sprite(
//         resources["images/cat.png"].texture
//     );
//     // sprite.x = 150;
//     // sprite.y = 150;

//     // Setting up the position in one single line of code
//     sprite.position.set(200, 200); // Shorthand syntax

//     // Size and Scale
//     sprite.width = 80;
//     sprite.height = 120;

//     // Set the scale proportionately
//     // sprite.scale.x = 2;
//     // sprite.scale.y = 2;
//     sprite.scale.set(1.5, 1.5); // Shorthand syntax

//     // Rotation: the default rotation is around the sprite anchor point, which is the top left corner of
//     // the sprite where the x and y start
//     sprite.rotation = 0.5;

//     // Change the anchor point, this way it is centered inside the sprite and it look like it is spinning
//     // sprite.anchor.x = 0.5;
//     // sprite.anchor.y = 0.5;
//     sprite.anchor.set(0.5, 0.5); // Shorthand syntax

//     // The pivot property works similar to the anchor, but it uses pixels
//     // sprite.pivot.set(32, 32); // Shorthand syntax

//     // Add the sprite to Stage
//     app.stage.addChild(sprite);
// }

// ----------- Load a texture atlas PART 2-----------

// loader
//     .add("images/tileset.png")
//     .load(setup)

// function setup() {
//     //----------- Create the `tileset` sprite from the texture. -----------
//     //----------- TextureCache is an alias for PIXI.utils.TextureCache -----------
//     let texture = TextureCache["images/tileset.png"];

//     //----------- Create a rectangle object that defines the position and -----------
//     //----------- size of the sub-image you want to extract from the texture -----------
//     //----------- (`Rectangle` is an alias for `PIXI.Rectangle`) -----------
//     // let rectangle = new Rectangle(192, 128, 64, 64);
//     // let rectangle = new Rectangle(192, 64, 64, 64);
//     let rectangle = new Rectangle(256, 0, 77, 64);


//     //----------- Tell the texture to use that rectangular section -----------
//     texture.frame = rectangle;

//     //----------- Create the sprite from the texture -----------
//     let bee = new Sprite(texture);

//     bee.x = 32;
//     bee.y = 32;

//     app.stage.addChild(bee);
//     app.renderer.render(app.stage);
// }

// ----------- Load a texture atlas PART 3 -----------

// loader
//   .add("images/published/published.json")
//   .load(setup);

// ----------- Create sprites from loaded texture atlas -Way 1 TextureCache -----------
// const texture = TextureCache["images/published/published.png"];
// const sprite = new Sprite(texture);

// ----------- Create sprites from loaded texture atlas -Way 2 Loader's resources -----------
// let sprite = new Sprite(
//     resources["images/published/published.json"].texture["published.png"]
// );

// ----------- Create sprites from loaded texture atlas -Way 3 Alias that points to textures -----------
// const id = PIXI.Loader.shared.resources["images/published/published.json"].textures;
// const sprite = new Sprite(id["blob.png"]);


// ----------- Setup function: combines all methods -----------
loader
  .add("images/published/published.json")
  .load(setup);

let dungeon, explorer, treasure, id;

function setup() {
      //1. Access the `TextureCache` directly
//   let dungeonTexture = TextureCache["dungeon.png"];
//   dungeon = new Sprite(dungeonTexture);
//   app.stage.addChild(dungeon);

//   //2. Access the texture using through the loader's `resources`:
//   explorer = new Sprite(
//     resources["images/treasureHunter.json"].textures["explorer.png"]
//   );
//   explorer.x = 68;

//   //Center the explorer vertically
//   explorer.y = app.stage.height / 2 - explorer.height / 2;
//   app.stage.addChild(explorer);

  //3. Create an optional alias called `id` for all the texture atlas 
  //frame id textures.
  id = PIXI.Loader.shared.resources["images/published/published.json"].textures;; 
  
  //Make the treasure box using the alias
  treasure = new Sprite(id["treasure.png"]);
  app.stage.addChild(treasure);

  //Position the treasure next to the right edge of the canvas
  treasure.x = app.stage.width - treasure.width - 48;
  treasure.y = app.stage.height / 2 - treasure.height / 2;
  app.stage.addChild(treasure);
}
