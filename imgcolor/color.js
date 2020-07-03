// // 方案一览 https://www.deanhan.cn/js-main-and-revert-color.html

// var sobel = require("sobel");
// var Canvas = require("canvas");
// var ImageSobel = Canvas.Image;
// var canvas = new Canvas();
// var PNG = require("pngjs").PNG;



// var imgs = new ImageSobel();


// var ctx = canvas.getContext("2d");
// var chunk = require("chunk");

// var fs = require("fs");


// imgs.src = "./output.jpg";
// // console.log(image);
// var width = imgs.width;
// var height = imgs.height;
// var newfile = new PNG({width: width, height: height});

// canvas.width = width;
// canvas.height = height;
// ctx.drawImage(imgs, 0, 0);

// var imageData = ctx.getImageData(0, 0, width, height);
// // console.log(imageData);
// var sobelData = sobel(imageData);
// // console.log(sobelData);
// var final_image = chunk(sobelData, 4);

// var sobelImageData = sobelData.toImageData();
// for (var y = 0; y < newfile.height; y++) {
//   for (var x = 0; x < newfile.width; x++) {
//     var idx = (newfile.width * y + x) << 2;

//     var col =
//         x < (newfile.width >> 1) ^ y < (newfile.height >> 1) ? 0xe5 : 0xff;

//     newfile.data[idx] = sobelData[idx];
//     newfile.data[idx + 1] = sobelData[idx + 1];
//     newfile.data[idx + 2] = sobelData[idx + 2];
//     newfile.data[idx + 3] = sobelData[idx + 3];
//   }
// }

// newfile.pack()
//     .pipe(fs.createWriteStream("sobel.png"))
//     .on("finish", function(err) {
//       if (!err) {
//         console.log("logrado :D");
//       }
//     });

const { getPaletteFromURL } = require('color-thief-node');

// const thmclrx = require("thmclrx");
// thmclrx.octree(file, [maxColors], [callback], [frameNumber]);

// (async () => {
//   const colorPallete = await getPaletteFromURL(imageURL);
// })();
  
function rgbToHex(rgb) {
  let hexs = [];
  for(let k in rgb) {
      console.log(k + '---' + rgb[k]);
      let hex = rgb[k].toString(16);
      hexs.push(hex.length == 1 ? "0" + hex : hex);
  } 
  return "#" + hexs.join('');
}


let color2 = getPaletteFromURL('https://sss.staging.qingting.fm/qt-sleep-common/upload_11a1223153d05f8f509c10cc5165f73f.png');
color2.then(res => {console.log('2color==>', res, rgbToHex(res[0]));});


let color5 = getPaletteFromURL('https://sss.qingting.fm/qt-sleep-common/upload_93fa8bb47219cf5d83dfb8212fb5ac24.jpg');
color5.then(res => {console.log('5color==>', res, rgbToHex(res[0]));});



let color3 = getPaletteFromURL('https://sss.qingting.fm/qt-sleep-common/upload_cfc7f0c7789d7445fde06b0dc3974d54.jpg');
color3.then(res => {console.log('3color==>', res, rgbToHex(res[0]));});

let color4 = getPaletteFromURL('https://sss.qingting.fm/qt-sleep-common/upload_5cc1f91ae5f7fe9a71e30056047f62cc.jpg');
color4.then(res => {console.log('4color==>', res, rgbToHex(res[0]));});