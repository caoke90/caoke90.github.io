const axios = require("axios")

async function init(){
  const resp=await axios.get('https://i.cnblogs.com/')
  console.log(resp.data)
}
init()
