const { Worker, isMainThread, parentPort } = require('worker_threads');

if(isMainThread) {
  const worker = new Worker(__filename)
  // 主进程监听消息传递
  worker.once('message', message => {
    console.log(message)
  })

  worker.postMessage('来自于主进程的消息')
  console.log('SHARE_ENV: ', worker.SHARE_ENV)
  worker.terminate() // 杀死进程
  console.log('threadId: ', worker.threadId)  // 每一个worker都拥有的独立的id
  console.log('workerData :', worker.workerData) //

} else {
  parentPort.once('message', message => {
    parentPort.postMessage(message)
  })
}
// MessageChannel  与 MessagePort
