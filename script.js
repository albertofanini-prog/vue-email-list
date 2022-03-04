console.log('Hello Vue email list by API.');

const app = new Vue({
    el: '#app',
    data:{
        email:'boolean_class-54@outlook.com'
    }

})

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function (response){
        const result = response.data;
        console.log(result);
    })