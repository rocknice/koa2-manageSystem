class CreateBook {
    // constructor(ctx) {
    //     this.ctx = ctx;
    // }
    create(){
        const options = {
            method: 'POST',
            body: '',
            headers: {},
            credentials: 'omit'
        }
        fetch('http://localhost:8080/index.php?r=books/create', options)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
}
    
export default CreateBook