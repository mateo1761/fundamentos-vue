const app = new Vue({
    el: '#app',
    data: {
        mensaje: 'mateo',
        contador: 0,
    },
    computed: {
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success' : this.contador >= 50,
                'bg-warning' : this.contador >= 30 && this.contador < 50,
                'bg-danger' : this.contador < 30,
            }
        },
    }
});