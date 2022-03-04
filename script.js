console.log('Hello Vue email list by API.');

const app = new Vue({
    el: '#app',
    data:{
        //email:'boolean_class-54@outlook.com',
        emailList:[],
    },
    created(){
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then( (res) => {

                this.emailList.push(res.data.response);
            })
        }
    }
})

console.log(app);

