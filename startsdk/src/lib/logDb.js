//  https://w3c.github.io/IndexedDB/
export default class logDB {

    constructor(...args) {
        console.log(...args);
        this.init('log');
    }

    init(dataname) {
        try {
            if (!logDB.support) {
                return false;
            }
            logDB._database = dataname || 'mylog';
            // IndexedDBLogger.status = super.STATUS.INITING; // 未知

            // 打开数据库 
            logDB.request = window.indexedDB.open(logDB._database);
            logDB.request.onerror = event => console.error('数据库连接失败');
            // 创建成功
            logDB.request.onsuccess = event => {
                console.log('创建成功');
                logDB.db = event.target.result;
             //   logDB.db 
                logDB.db.onerror = event => util.throwError(event.target.error);
            };
            // 升级
            logDB.request.onupgradeneeded = event => {
                console.log('升级');
                logDB.db = event.target.result;
                let store = logDB.db.createObjectStore('logs', { autoIncrement: true });
                //  objectStore.createIndex('name', 'name', { unique: false }); 分别对应索引名称，索引属性，是否重复 
            };
        } catch (e) {
            console.error('数据库init失败',e);
        }
     }

     pushLog(onelogOdj) {
        let store = logDB._getStore(IDBTransaction.READ_ONLY);
        console.log('path', store);
        const request = store.add(onelogOdj);
        request.onsuccess = function (e) {
            console.log('write log success')	
          }
        
        request.onerror = function (e) {
            console.error('write log fail')	
        }
     }
     
     getOneLog() {
        return new Promise((resolve, reject) => {
            let store = logDB._getStore(IDBTransaction.READ_ONLY);
           // console.log('getOnelog===>',store);
            let request= store.get(1);
            request.onsuccess = (e) => {
                // console.log(e.target.result)
                resolve(e.target.result);
            }

            request.onerror = (e) => {
             //   console.log('get log success')
              //  console.log(e.target.result)
              reject('获取数据失败');
            }
        });
     }


    static get support() {
       return window.indexedDB;
    } 

    static  _getStore(mode) {
        try {
            if (logDB.db) {
                console.log('logDB.db', logDB.db);
                let transaction = logDB.db.transaction('logs', mode || 'readwrite');
                transaction.onerror = event => console.log('logs',event);
                return transaction.objectStore('logs');
            }
            // else {
            //     util.throwError('log database is not created or connections are closed, considering init it.');
            // }
        } catch (e) {
            console.log('eee', e);
            // util.throwError('failed to generate new transaction, ' + e.message);
            return false;
        }
    }
}

