Vue.component('padre',{
    template: //html
    `
    <div class="p-5 mt-5 bg-primary text-center">
        <h2>Hola desde el padre: {{numeroPadre}}</h2>
        <button class="btn btn-success" @click="numeroPadre ++">+</button>
        {{nombrePadre}}
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>
    `,
    data(){
        return{
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
})