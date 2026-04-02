const { Jimp } = require("jimp");
async function run() {
  const image = await Jimp.read("public/COMMERCE ALLIANCE CALL CARD.jpg.jpeg");
  console.log(image.bitmap.width, image.bitmap.height);
}
run();
