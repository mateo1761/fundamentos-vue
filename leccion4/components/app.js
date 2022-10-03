Vue.component('saludo',{
    template: 
    `
    <div>
        <h1>{{saludo}}</h1>
        <h3>Hola compilando vue</h3>
    </div>
    `,
    data(){
        return {
            saludo: 'Hola desde vue'
        }
    }
});

