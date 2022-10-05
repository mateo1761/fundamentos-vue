Vue.component('hijo', {
    template: //html
    `
    <div class="p-5 mt-5 bg-danger text-center">
        <h2>Componente hijo: {{numero}}</h2>
        <h4>Nombre: {{nombre}}</h4>
        <button class="btn btn-success" @click="numeroPadre ++">+</button>
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'mateo quintero zapata'
        }
    },
    mounted() {
        this.$emit('nombreHijo',this.nombre);
    },
})