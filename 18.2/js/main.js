var app = new Vue({
    el:'#app',
    data:{
        // foodList:['葱','姜','蒜'],
        foodList:[
            {
                name:'葱',
                price:1,
                discount:0.5,
            },
            {
                name:'姜',
                price:2,
                discount:0.4,
            },
            {
                name:'蒜',
                price:3,
                discount:0.3,
            }
        ]
    }
});