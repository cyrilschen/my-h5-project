document.getElementById('requestPermission').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            document.getElementById('status').innerHTML = '获取成功，经度：' + position.coords.longitude + '，纬度：' + position.coords.latitude;
        }, function(error) {
            document.getElementById('status').innerHTML = '获取失败，错误代码：' + error.code + '，错误信息：' + error.message;
        });
    } else {
        document.getElementById('status').innerHTML = '抱歉，您的设备不支持地理位置功能';
    }
});