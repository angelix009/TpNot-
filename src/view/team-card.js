export default {
    props: {
        id: '',
        name: '',
        description: '',
    },
    computed:{
        descriptionCourte(){
            return this.description.substr(0,20);
        }
    },
    methods: {
        edit() {
            const team = {
                id: this.id,
                name: this.name,
                description: this.description
            };
            this.$el.remove();
            this.$emit("editTeam", team);
        }
    },
    
    template:`
        <div class="card">
            <h3> Team Id </h3> 
            <p> {{ id }}</p>
            <h3> Nom </h3> 
            <p> {{ name }}</p>
            <h3> Description </h3> 
            <p> {{ descriptionCourte }} </p>
            <button @click="edit">Edit</button>
        </div>
    `
}
