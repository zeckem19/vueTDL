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
    computed: {
        unfinishedEntries: function(){
            return this.todoList.filter(entry => !entry.isDone);
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
    },
    beforeCreate: function(){
        console.log('before create');
    },
    created: function(){
        console.log('created');
    },

    beforeMount: function(){
        console.log('before mount');
    },

    mounted: function(){
        console.log('mounted');
        const ssTodos = sessionStorage.getItem('my-todo-list');
        this.todoList = ssTodos ? JSON.parse(ssTodos) : [];
    },

})