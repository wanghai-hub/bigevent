$(function(){
  // 定义参数对象
  var q={
    pagenum:1,
    pageseize:2,//每一页显示几条数据
    cate_id:'', //文章的分类
    state:''  //获取哪种文章的类型
  }

  var layer=layui.layer
  var form =layui.form

    //获取文章数据并生成展示列表结构
  function initdata(){
      $.ajax({
        type:'get',
        url:'/my/airicle/list',
        data:q,
        success:function(res){
            if(res.status !== 0){
                layer.msg('fail')
            }
        //成功获取数据
            //先定义过滤器
            template.defaults.imports.add=function(para){
                var time=new Data(res.)

            }
            //调用模板  
            var str=template('pp',res.data)
        //渲染结构


        }
      })
  }

  //补0的函数
     function padzero (num){
    return num>9? num: '0'+num
     }

//初始化文章分类
    function initarticle(){
    $.ajax({
        type:'get',
        url:'/my/a',
        success:function(res){
            if(res.status !== 0){
                return;
            }
            //渲染结构
            var htmlstr=template('oo',res);
            $().html(htmlstr)
            // 通知layui，重新渲染结构
            form.render()
        }
    })
    }

// 筛选表单添加submit事件
    $().on('submit',function(e){
        e.preventDefault();
        
    })



//渲染分页函数
    function renderpage(num){
       laypage.render()
    }






})