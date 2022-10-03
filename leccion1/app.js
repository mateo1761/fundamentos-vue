const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con vue',
        frutas: [
            {
                nombre: 'Manzana',
                estado: false,
                cantidad: 0
            },
            {
                nombre: 'Fresa',
                estado: true,
                cantidad : 15
            },
            {
                nombre: 'Uva',
                estado: false,
                cantidad : 16
            }
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;

            for(fruta of this.frutas){
                this.total += fruta.cantidad
            }
            return this.total;
        }
    }
})
