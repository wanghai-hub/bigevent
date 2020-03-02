$(function(){
// 发送请求前，先让prefilter拦截操作拼接路径
$.ajaxPrefilter(function(option){

    option.url='http://www.liulongbin.top:3007'+option.url;

    // 判断是否是需要权限的接口
    if(option.url.indexOf('/my') !== -1){
        // 说明是需要权限的接口
        option.headers={Authorization:localStorage.getItem('token')}
    }

    // 统一为有权限的接口，设置complete回调函数
    option.complete=function(res){
        if(res.responseJSON.status ==1 && res.responseJSON.message =='身份验证失败'){
            //说明没有经过登陆
            localStorage.removeItem('token');
            location.href='/login.html'
        }
    }


})


    
})