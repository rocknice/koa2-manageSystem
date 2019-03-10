import './create.css'
import common from '../common/common.js'
export default class CreateBook {
    constructor() {
        this.btn = $('.btn-success');
    }
    fn() {
        const obj = {};
        let str = '';
        this.btn.click(common.throttle(function(e){
            e.preventDefault()
            const t = $('form').serializeArray();
            $.each(t, function() {
                str = this.name + '=' + this.value + '&' + str;
            });
            str = str.slice(0, str.length-1)
            console.log(111111, str)
            const newBook = new CreateBook()
            newBook.create(str)
        }, 2000))
    }
    create(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        }
        fetch('http://localhost:3001/createbook/create', options)
        .then(response => response.json())
        .then(result => {
            console.log(result.data)
            if(result.data) {
                window.location.href = `/view?id=${result.data.Books.id}`
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}
// const create = new CreateBook();
// create.fn()
// export default CreateBook