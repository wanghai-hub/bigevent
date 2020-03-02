$(function(){

// 1.1 获取裁剪区域的 DOM 元素
var $image = $('#image')
// 1.2 配置选项
const options = {
  // 纵横比
  aspectRatio: 1,
  // 指定预览区域
  preview: '.img-preview'
}

// 1.3 创建裁剪区域
$image.cropper(options)


//点击上传按钮
$('#btn-upload').on('click',function(e){
    e.preventDefault();
    $('#file-pic').click();
})

$('#file-pic').on('change',function(e){
    var files=e.target.files  //files是个伪数组
    if(files.length == 0){
        layui.layer.msg('没有上传文件')
    }

    //拿到文件，将文件转成文件路径传给img 的src
    var newImgURL = URL.createObjectURL(files[0]);

    $image
      .cropper('destroy')      // 销毁旧的裁剪区域
      .attr('src', newImgURL)  // 重新设置图片路径
      .cropper(options)        // 重新初始化裁剪区域
})

//点击确定，将裁剪确定的图片提交数据，并且更改头像
 //将裁剪的图片转为base64格式的字符串，即将图片转为字符串
$('#upload').on('click',function(){
    var dataURL = $image
      .cropper('getCroppedCanvas', { // 创建一个 Canvas 画布
        width: 100,
        height: 100
      })
      .toDataURL('image/png')       // 将 Canvas 画布上的内容，转化为 base64 格式的字符串
    //   上传头像到服务器
    $.ajax({
        type:'post',
        url:'/my/update/avatar',
        data:{avatar:dataURL
        },
        success:function(res){
            if(res.status !==0){
                return
            }
            //上传新头像成功，重新渲染index中的头像
        window.parent.getuserinfo()
        }
    })

})






})