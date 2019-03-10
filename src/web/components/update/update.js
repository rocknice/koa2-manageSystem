import './update.css'
export default class UpdateBook {
    constructor(ctx) {
        this.ctx = ctx;
    }
    fn() {
        $('.btn-success').click(function(e){
            e.preventDefault()
            const obj = {};
            let str = '';
            const t = $('form').serializeArray();
            $.each(t, function() {
                str = this.name + '=' + this.value + '&' + str;
            });
            str = str.slice(0, str.length-1)
            const editBook = new UpdateBook()
            editBook.update(str)
        })
    }
    update(data){
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        }
        fetch('http://localhost:3001/updatebook/update', options)
        .then(response => response.json())
        .then(result => {
            if(result.data) {
                window.location.href = `/view?id=${result.data.Books.id}`
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}
