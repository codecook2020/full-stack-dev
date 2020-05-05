// const hello = require('./lib/hello.js')
// const beaconapi = require('./lib/beaconapi.js')
import { hello }  from './lib/hello';
import { beaconapi }  from './lib/beaconapi';
import { sendLog }  from './lib/sendLog';
import logDb from './lib/logDb';
import config from './config';
const logdb = new logDb('aa', 2);


 function asyncLog () {
    logdb.pushLog({
        "data": { 
          "event_id":"Expose.modal51",
          "page_id": "H5",
          "page_extend": {
          }
        },
        "label": "new_log",
        "_id": "ActionEvent",
        "page_id": "H5",
        "_deviceId": "pctest123333333"
    });    
}

async function getone() {
   return await logdb.getOneLog();
}

export {
    hello,
    beaconapi,
    sendLog,  // 缺乏配置的载入
    asyncLog,
    getone
}

