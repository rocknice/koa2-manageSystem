$(function(){
    $('.form-control').bind('keydown',function(e){
        if(e.keyCode == "13") {
            // console.log(e.target.id)
            // console.log(e.target.value)
            window.location.href = `http://localhost:8081/search?${e.target.id}=${e.target.value}`
            // $.ajax({
            //     url: `http://localhost:8081/search?${e.target.id}=${e.target.value}`,
            //     method: 'get',
            //     // dataType: 'json', // 返回json数据
            //     success: function(res) {
            //         if(res) {
            //             $('html').html(res)
            //         }
            //         console.log(res)
            //     },
            //     error: function(err) {
            //         console.log(err)
            //     }
            // })
        }
    });
})