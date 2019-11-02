new Vue({
    el: "#app",
    data:{
        header: "Hey world",
        newEntry:"",
        todoList: []
    },
    watch:{
        todoList: {
            handler: function(newTodos){
                sessionStorage.setItem('my-todo-list',JSON.stringify(newTodos));
            },
            deep: true
        }

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