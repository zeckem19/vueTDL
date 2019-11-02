new Vue({
    el: "#app",
    data:{
        header: "Hey world",
        newEntry:"",
        todoList: []
    },
    methods: {
        addEntry: function(){
            if(this.newEntry){
                this.todoList.push({value: this.newEntry, isDone:false});
                this.newEntry = "";
            }
        },
        removeEntry: function(index){
            this.todoList.splice(index, 1);
        }
    }
})