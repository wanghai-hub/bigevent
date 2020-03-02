$(function(){
    var form=layui.form;
//新密码的校验规则
    form.verify({
        pad: [
            /^[\S]{6,12}$/
            ,'密码必须6到12位，且不能出现空格'
          ] ,
        newpsd:function(value){
            let val=$('#oldPwd').val();
            if(val==value){
                return '心就密码不能一致'
            }
        },
        //确认密码的校验规则
        same:function(value){
            let val=$('#newPwd').val();
            if(value !== val){
                return '两次输入密码不一致'
            }
        }

    })

$.ajax({
    type:'post',
    url:'/my/updatepwd',
    data:$(this).serialize(),
    success:function(res){
        if(res.status !==0){
            return layui.layer.msg('更新密码失败')
        }
        //更新成功
        $('form')[0].reset()
    }
})






})