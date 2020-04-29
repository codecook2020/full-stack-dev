// const hello = require('./lib/hello.js')
// const beaconapi = require('./lib/beaconapi.js')
import { hello }  from './lib/hello';
import { beaconapi }  from './lib/beaconapi'
import { pushLog }  from './lib/pushLog'

export {
    hello,
    beaconapi,
    pushLog  // 缺乏配置的载入
}

