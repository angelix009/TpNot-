export default {
    props: {
        team1: '',
        team2: '',
        score1: '',
        score2: '',
    },
    
    template:`
        <div class="card text-center">
            <h3> Team 1 :  {{ team1 }}</h3> 
            <p> {{ score1 }}</p>
            <h3> Team 2 : {{ team2 }}</h3> 
            <p> {{ score2 }}</p>
        </div>
    `
}