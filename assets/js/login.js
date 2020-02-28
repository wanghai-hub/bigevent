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

form.verify({
  psd:[],
  same:function(value){
    if(value !==$().val()){

    }
  }
})


$('#form-reg').on('submit',function(e){
  e.preventdefault();
  $.ajax({
    type:'post',
    url:'http://www.liulongbin.top:3007/api/reguser',
    data:$(this).serialize(),
    success:function(res){
      if(res.status !== 0){
        // return console.log(res.message);
        return layer.msg(res.message)
      }
      //传送成功
      layer.msg('注册成功')
      //模拟点击
      $('#toreg').click()
    }
  })

})

//登陆表单提交事件
$('#form-login').on('submit',function(e){
  e.preventdefault();

    $.ajax({
      type:'post',
      url:'http://www.liulongbin.top:3007/api/login',
      data:$(this).serialize();
      success:function(res){
        if(res.status !==0){
          return layer.msg('shibai')
        }
        // 登陆成功并跳转到后台首页
        localStorage.setItem('token',res.token)
        window.location.href='/index.html'

      }

    })  

})



})