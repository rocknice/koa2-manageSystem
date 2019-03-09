class Index {
    constructor() {
        this.btn = $('.form-control')
    }
    view(){
        this.btn.bind('keydown', common.throttle(function(e){
            if(e.keyCode == "13") {
                // console.log(e.target.id)
                // console.log(e.target.value)
                console.log('测试点击')
                // window.location.href = `http://localhost:3001/search?${e.target.id}=${e.target.value}`
                // $.ajax({
                //     url: `http://localhost:3000/search?${e.target.id}=${e.target.value}`,
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
        }, 1000))
    }
}
export default Index