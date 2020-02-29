$(function(){
    getuserinfo();

    // 别忘记倒入layer
    var layer=layui.layer
  $('#getout').on('click',function(){

    layer.confirm('确认推出吗', {icon: 3, title:'提示'}, function(index){
        // 点击确认
        localStorage.removeItem('token');
        window.location.href='/login.html';

        // 关闭当前页
        layer.close(index);
      });

  })



})



function getuserinfo(){
// 发送请求获取用户的信息
    $.ajax({
        type:'get',
        url:'/my/userinfo',
        // 发送有权限的请求，必须有请求头
        // header:{Authorization:localStorage.getItem('token')},
        success:function(res){
            if(res.status !== 0){
                return layui.layer.msg(res.msg)
            }
            // 获取成功
            // 调用用户头像渲染
           renderavatar(res.data)

        },
       
    })
}

// 定义头像渲染函数
 function renderavatar(data){
    //  欢迎的文字
    var name=data.nickname||data.username
    $('#welcome').html('欢迎'+name)
    // 图片
    if(data.user_pic){
        // 需要渲染图像
        $('.layui-nav-img').attr('src',data.user_pic).show();
        $('.text-avatar').hide()
    }else{
        // 渲染文字头像
        $('.layui-nav-img').hide();
        $('.text-avatar').html(name[0].toUpperCase()).show()
    }



 }