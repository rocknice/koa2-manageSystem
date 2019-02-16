class CreateBook {
    constructor() {
        this.btn = $('.btn-success');
    }
    fn() {
        this.btn.click(function(e){
            e.preventDefault()
            const obj = {};
            let str = '';
            const t = $('form').serializeArray();
            $.each(t, function() {
                str = this.name + '=' + this.value + '&' + str;
            });
            str = str.slice(0, str.length-1)
            const newBook = new CreateBook()
            newBook.create(str)
        })
    }
    create(data) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data
        }
        fetch('http://localhost:3000/createbook/create', options)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.data) {
                window.location.href = `/view?id=${result.data.Books.id}`
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
}
export default CreateBook