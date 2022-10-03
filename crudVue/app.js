const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con vue',
        tareas: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function() {
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea = '';
            this.localStorage();
        },
        editarTarea: function(index) {
            this.tareas[index].estado = true;
            this.localStorage();
        },
        eliminarTarea: function(index) {
            this.tareas.splice(index, 1);
            this.localStorage();
        },
        localStorage: function() {
            localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
        }
    },
    created: function() {
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));

        if(datosDB == null){
            this.tareas = []
        }
        else {
            this.tareas = datosDB;
        }
    },
})