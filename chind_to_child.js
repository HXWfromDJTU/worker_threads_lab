// worker_thread 可以实现子进程之间的直接通信，而不需要通过主进程

const { isMainThread, parentPort, workerData, threadId, MessageChannel, MessagePort, Worker } = require('worker_threads')

function mainThread() {
  const worker = new Worker(__filename, {workerData: 0})
  
  // 主进程监听退出事件
  worker.on('exit', code => {

  })

  // 主进程监听消息
  worker.on('message', msg => {
    cosnole.log('主进程收到信息：'+ msg)
    worker.postMessage(msg + 1)
  })
}
