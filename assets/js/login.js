$(function(){

$('#toreg').on('click',function(){
    $('.login-box').hide()
    $('.reg-box').show()
})

$('#tologin').on('click',function(){
    $('.login-box').show()
    $('.reg-box').hide()
})

// 倒入了layui的js文件，就能引入layui的对象
 var form =layui.form;
 var layer=layui.layer;

// 输入码验证

form.verify({
  psd: [
    /^[\S]{6,12}$/
    ,'密码必须6到12位，且不能出现空格'
  ] ,
  same:function(value){
    if(value !==$('.re').val()){
      return '两次的密码不一致';
    }
  }
})

// 注册盒子提交
$('#form-login').on('submit',function(e){
  e.preventDefault();
// 发送请求
  $.ajax({
    url:'http://www.liulongbin.top:3007/api/reguser',
    type:'post',
    data:$(this).serialize(),
    success:function(res){
        if(res.status !== 0){
          return layer.msg(res.message);
          
        }
        // 请求成功
        layer.msg(res.message)
       $('#toreg').click()
        
    }
  })


})


//登陆盒子提交
$('#form-reg').on('submit',function(e){
  e.preventDefault();
  $.ajax({
    type:'post',
    url:'http://www.liulongbin.top:3007/api/login',
    data:$(this).serialize(),
    success:function(res){
      if(res.status !==0){
        return layer.msg(res.message)
      }
      // 成功

      layer.msg(res.message)
      localStorage.setItem('token',res.token)
      // 跳转到后台首页
      window.location.href='/index.html'

    }



  })



})









})