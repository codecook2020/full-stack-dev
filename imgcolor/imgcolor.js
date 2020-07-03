const { createCanvas, Image } = require('canvas');

let request = require('request');
const pixelUtil = require('pixel-util');
// https://github.com/hubingliang/colorfulImg
// 八插树获取法
// function getImageURLBackroudColor(url) {
    
// }

// async function loadImg(url) {
//   const img = new Image();
//   await new Promise((resolve, reject) => {
//     img.onload = () => resolve()
//     img.onerror = err => reject(err)
//   });
//   img.src = url;
// }

function loadImage (url) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image'));

    //img.src = buffer;

    request.get(url, (err, res) => {
      if (err) return reject(err)

      img.src = res.body
    })
  })
}

async function getImagecontextData(image) {
  let width, height;
//   let image = await loadImage(URL);

  let canvas = createCanvas(1080, 2340)
  const context =  canvas.getContext && canvas.getContext('2d');
  context.drawImage(image, 0, 0);
  height = canvas.height = image.naturalHeight || image.offsetHeight || image.height;
  width = canvas.width = image.naturalWidth || image.offsetWidth || image.width;
  console.log('', width, height); // 1080x2340
  return context.getImageData(0, 0, width, height);
}

// https://stackoverflow.com/questions/32666458/node-js-canvas-image-data
async function getImageURLBackroudColor(url) {
  let blockSize = 5, i = -4,  count = 0, rgb = { r: 0, g: 0, b: 0 };

    // const image = new Image();
    // await new Promise((resolve, reject) => {
    //   image.onload = () => resolve()
    //   image.onerror = err => reject(err)
    // });
    // image.src = url;
  console.log('出门');
  let buffer = await pixelUtil.createBuffer(url);
  console.log('22222222');
  let image = await loadImage(url);
  console.log('2222333');
  // let image = new Image();
  // let buffer = await pixelUtil.createBuffer(url);
  // image.src = buffer;

  const data = await getImagecontextData(image);
  length = data.data.length;
  console.log('==>\n',image, data.data);
    for (let row = 0; row < image.height; row++) {
        for (let col = 0; col < image.width; col++) {
            rgb.r += data.data[((image.width * row) + col) * 4];
            rgb.g += data.data[((image.width * row) + col) * 4 + 1];
            rgb.b += data.data[((image.width * row) + col) * 4 + 2];
        }
    }

    // 求取平均值
    rgb.r /= (image.width * image.height);
    rgb.g /= (image.width * image.height);
    rgb.g /= (image.width * image.height);

    // 将最终的值取整
    rgb.r = Math.round(rgb.r);
    rgb.g = Math.round(rgb.g);
    rgb.b = Math.round(rgb.b);
    return rgb;
}
  
function rgbToHex(rgb) {
    let hexs = [];
    for(let k in rgb) {
        console.log(k + '---' + rgb[k]);
        let hex = rgb[k].toString(16);
        hexs.push(hex.length == 1 ? "0" + hex : hex);
    } 
    return "#" + hexs.join('');
}



// let color = getImageURLBackroudColor('https://pic.qingting.fm/rms/2019/09/03/968499f4edfff151dfb1c97ae7a9ea2b.jpg');
// color.then(res => {console.log('1color==>', res, rgbToHex(res));});

let color2 = getImageURLBackroudColor('https://sss.qingting.fm/qt-sleep-common/upload_4de4ec9dc52ab4f477f07910b9b2a5cc.jpg');
color2.then(res => {console.log('2color==>', res, rgbToHex(res));});

// let color3 = getImageURLBackroudColor('https://sss.qingting.fm/qt-sleep-common/upload_cfc7f0c7789d7445fde06b0dc3974d54.jpg');
// color3.then(res => {console.log('3color==>', res, rgbToHex(res));});

// let color4 = getImageURLBackroudColor('https://sss.qingting.fm/qt-sleep-common/upload_5cc1f91ae5f7fe9a71e30056047f62cc.jpg');
// color4.then(res => {console.log('4color==>', res, rgbToHex(res));});


// let color5 = getImageURLBackroudColor('https://sss.qingting.fm/qt-sleep-common/upload_93fa8bb47219cf5d83dfb8212fb5ac24.jpg');
// color5.then(res => {console.log('4color==>', res, rgbToHex(res));});









