const MIN_TITLE_LENGTH = 5;
const MIN_DESCRIPTION_LENGTH = 20;

export default {
  data: function() {
    return {
      id: '',
      name: '',
      description: '',
      errorMessage: '',
      errorColor: ERROR_COLOR,
    };
  },
  methods: {
    addTeam: function() {
      this.errorMessage = '';
      let missingFields = [];
      let errortext = document.querySelector('.text-error');
      if (!this.name) {
        missingFields.push('Name');
      }
      if (!this.id) {
        missingFields.push('Id');
      }
      if (!this.description) {
        missingFields.push('Description');
      }
      if (missingFields.length > 0) {
        errortext.classList.add('box-error');
        this.errorMessage =
          missingFields.join(', ') + ' ' + (missingFields.length > 1 ? 'are' : 'is') + ' required!';
        return;
      }
      
      if (this.description.length < MIN_DESCRIPTION_LENGTH) {
        missingFields.push('Description should be at least ' + MIN_DESCRIPTION_LENGTH + ' characters long');
      }

      if (this.name.length < MIN_TITLE_LENGTH) {
        missingFields.push('Name should be at least ' + MIN_TITLE_LENGTH + ' characters long');
        
      }

      if (missingFields.length > 0) {
        errortext.classList.add('box-error');
        this.errorMessage =
          missingFields.join(', ') ;
        return;
      }
      

      errortext.classList.remove('box-error');
      const team = { name: this.name, id: this.id, description: this.description };
      console.log('form.addTeam', team);

      this.$emit('addTeam', team);

      this.name = '';
      this.id = '';
      this.description = '';
    },
    editTeam: function(team) {
        this.id = team['id']
        this.name = team['name']
        this.description = team['description']
      },
  },
  template: `<section>
                    <h2>Team form</h2>
                    <form @submit.prevent>
                        <div class="text-error" v-bind:style="{ color: errorColor} ">{{ errorMessage }}</div>
                        <div>
                            <label>Id</label><br/>
                            <input type="text" v-model="id"/>
                        </div>
                        <div>
                            <label>Name</label><br/>
                            <input type="text" v-model="name"/>
                        </div><br/>
                        <div>
                            <label>Description</label><br/>
                            <textarea v-model="description"></textarea>
                        </div><br/>
                        <input type="submit" value="Submit" @click="addTeam"/>
                    </form>
                </section>`
};