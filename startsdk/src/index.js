// const hello = require('./lib/hello.js')
// const beaconapi = require('./lib/beaconapi.js')
import { hello }  from './lib/hello';
import { beaconapi }  from './lib/beaconapi';
import { sendLog }  from './lib/sendLog';
import config from './config';
import mergeConfig from './lib/mergeConfig';
axios.init = function init(instanceConfig) {
    // 处理默认配置和个性化配置，值得借鉴
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

export {
    hello,
    beaconapi,
    sendLog  // 缺乏配置的载入
}

