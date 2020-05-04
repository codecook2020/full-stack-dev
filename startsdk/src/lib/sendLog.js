// 匹配beacon 和 xmr 学习axios

// https://w3c.github.io/beacon/
// https://juejin.im/post/5b694b5de51d4519700fa56a
// https://juejin.im/post/5db66c4b6fb9a020386a32be
function sendByBeaconApi(url, data, option) {  
  // 返回 ture 代表进入浏览器发送队列 返回false代表因为队列长度，数据过大而未能进入  max queue： 64kb
  // max data size 64kb https://github.com/w3c/beacon/issues/38
  const headers = {
    type: 'application/json'
  };
  const blob = new Blob([JSON.stringify(data)], headers);
  return navigator.sendBeacon(url, blob); 
}

// send上传
function sendByXHR(url, data, option) {
  
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true; //带内存 同步发送
    xhr.open("POST", url, true); // 注意此处用了同步
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.responseText || xhr.status);
      }
    };
    xhr.onerror = () => reject(xhr.status);
    xhr.send(
      JSON.stringify(
        data
      )
    );
  });
}


export function sendLog(url, data, option) {  
  // 兼容性判断
  if (navigator.sendBeacon) {
    console.info('send by beaconapi');
    return sendByBeaconApi(url, data, option);
  } else {
    console.info('send by xhr');
    return sendByXHR(url, data, option); 
  } 
}
