const { Jimp } = require("jimp");
async function cropLogo() {
  const image1 = await Jimp.read("public/COMMERCE ALLIANCE CALL CARD.jpg.jpeg");
  image1.crop({x: 250, y: 300, w: 1000, h: 800});
  await image1.write("public/logo_crop1.jpg");

  const image2 = await Jimp.read("public/COMMERCE ALLIANCE CALL CARD.jpg.jpeg");
  image2.crop({x: 350, y: 350, w: 800, h: 600});
  await image2.write("public/logo_crop2.jpg");

  const image3 = await Jimp.read("public/COMMERCE ALLIANCE CALL CARD.jpg.jpeg");
  image3.crop({x: 400, y: 400, w: 900, h: 700});
  await image3.write("public/logo_crop3.jpg");

  console.log("Cropped successfully");
}
cropLogo().catch(console.error);
