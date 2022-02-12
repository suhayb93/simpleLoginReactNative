const USERBANE = 'admin';
const PASSWORD = '12345';

export const fakeApi = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === USERBANE && password === PASSWORD) {
        resolve({Status: 200, Data: {msg: 'success ...'}})
      } else {
        resolve({Status: 404, Data: {msg: 'login faild ...'}})
      }
    }, 1000)
  })


}
