
export default {
    props: {
      teams: {
        type: Array,
        default: [],
      },
    },
    data() {
      return {
        team1: "",
        team2: "",
        score1: 0,
        score2: 0,
        errorMessage: "",
        errorColor: ERROR_COLOR,
      };
    },
    created() {
      console.log(this.teams);
    },
    methods: {
      addResult() {
        this.errorMessage = '';
        let missingFields = [];
        let errortext = document.querySelector(".text-error");
        // Vérification des données
        if (!this.team1) {
          missingFields.push("team1");
        }
        if (!this.team2) {
          missingFields.push("team2");
        }
        if (missingFields.length > 0) {
          errortext.classList.add("box-error");
          this.errorMessage =
            missingFields.join(", ") +
            " " +
            (missingFields.length > 1 ? "are" : "is") +
            " required!";
          return;
        }
        if (this.team1 === this.team2) {
          missingFields.push("Les deux équipes doivent être différentes.");
        }
        if (this.score1 < 0 || this.score2 < 0) {
          missingFields.push("Le score doit être supérieur ou égal à 0.");
        }
  
        if (missingFields.length > 0) {
          errortext.classList.add("box-error");
          this.errorMessage = missingFields.join(", ");
          return;
        }
  
        errortext.classList.remove('box-error');
        const result = {
          team1: this.team1,
          score1: this.score1,
          team2: this.team2,
          score2: this.score2,
        };
        console.log("form.addResult", result);
        this.$emit('addResult', result);
        
        this.team1= ""
        this.team2= ""
        this.score1= 0
        this.score2= 0
        // Appel HTTP pour ajouter le score

        this.post("http://www.post-result.com", result);
      },
      async post(url, data) {
        const headers = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        return fetch(url, headers).then(response => {
                if (!response.ok)
                    throw new Error('Une erreur est survenue durant l\'appel HTTP.');

                return response.json();
            })
            .catch(error => {
                throw new Error(`Erreur lors de l'appel HTTP: ${error.message}`);
            });
        }
    },
  template: `<section>
                <h2>Ajouter un match</h2>
                <form @submit.prevent>
                    <div class="text-error" v-bind:style="{ color: errorColor} ">{{ errorMessage }}</div>
                    <div>
                        <label >Equipe 1:</label>
                        <select id="team1" v-model="team1">
                        <option v-for="team in teams" :value="team.name">{{team.name}}</option>
                        </select>
                    </div>
                    <div>
                        <label >Equipe 2:</label>
                        <select id="team2" v-model="team2">
                            <option v-for="team in teams" :value="team.name">{{team.name}}</option>
                        </select>
                    </div>
                    <div>
                        <label for="score1">Score équipe 1:</label>
                        <input type="number" id="score1" v-model.number="score1" min="0">
                    </div>
                    <div>
                        <label for="score2">Score équipe 2:</label>
                        <input type="number" id="score2" v-model.number="score2" min="0">
                    </div>
                    <button type="submit" value="Submit" @click="addResult">Ajouter</button>
                </form>
                </section>`
};