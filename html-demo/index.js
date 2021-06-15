let rtcVideo = new RctVideo({
    videoWrapper: 'videoParent', //页面中镶嵌video元素的位置
    width: "320px",
    height: "320px",
    token: '2418778864d674bcbb18383b19167587',   //用户服务器端请求getToken返回的token
    colorListener: (color, status, index, sum) => {
        console.log(color, status, index, sum);
        document.body.setAttribute("style", `background: ${color}`);
        if (status == 'COLORING') {
            document.getElementById('color').innerText = `当前颜色为第${index}: ${color}, 共${sum}个，状态为${status}`;
        } else {
            document.getElementById('color').innerText = `当前颜色为第${color}，状态为${status}`;
        }
    }, //传递color给用户，用户监听color变化，修改页面背景颜色
    tipListener: (tipCode, tipTxt) => {
        console.log(tipCode, tipTxt)
        document.getElementById('tip').innerText = tipTxt;
    }, //提示语信息
    statusListener: (data) => {
        document.getElementById('status').innerText = data;
        console.log(data, 'statusListener');
    }, //状态的改变，需要调用方对各个状态做相应处理
    successCallback: (data) => { 
        console.log(data, 'successCallback'); console.log('采集完成，允许请求结果'); 
    },  //验证完毕后，回调
    failCallback: (data) => { console.log(data, 'failCallback'); console.log(`失败，错误代码为:${data}`) } // webrtc初始化不支持或中途不支持情况降级回调
})
rtcVideo.start();