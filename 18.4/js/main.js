var app = new Vue({
    el:'#app',
    methods:{
        onEnter:function(){
            console.log('mouse enter');
        },
        onOut:function(){
            console.log('mouse leave');
        },
        onClick:function(){
            console.log('clicked');
        },
        onSubmit:function(e){
            e.preventDefault();
            console.log('submitted');
        }, 
        // onEnter:function(){
        //     console.log('key enter');
        // }, 
    }
});