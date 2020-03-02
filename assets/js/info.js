$(function(){

 var form=layui.form
    //进入页面获取用户信息
    initdata();

    function initdata(){
        $.ajax({
            type:'get',
            url:'/my/userinfo',
            success:function(res){
                if(res.status !==0){
                    return layer.msg('fail to fetch info')
                }
                //成功拿到用户信息表单赋值
                form.val('f1',res.data)
            }
        })
    }

    //重置按钮的监听事件
    $('#btn-reset').on('click',function(e){
        e.preventDefault();
        initdata()
    })

    //发起请求修改信息
    $('form').on('submit',function(e){
        e.preventDefault();
        //发送请求
        $.ajax({
            type:'post',
            url:'/my/userinfo',
            data:$(this).serialize(),
            success:function(res){
                if(res.status !==0){
                    return layer.msg('fail to render')
                }
                //更新成功
                layer.msg('succeed to render')
                //还需要更改index中的用户姓名
                window.parent.getuserinfo()

            }


        })

    })


    
})