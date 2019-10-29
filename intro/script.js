// Component Vue instance
Vue.component('round', {
    // Note how the data property receives a function in a Component
    data: {
		deleted: false
    },
    template: `
    <div v-if='!deleted'>
        <ul>
            <li>Round #: TBD</li>
            <li>Winner: TBD</li>
        </ul>
        <button @click='deleteRound'>Delete round</button>
    </div>
    `,
    methods: {
        deleteRound: function () {
            this.deleted = true
        }
    }
});


// The Vue instance
let app = new Vue({
  // Options
  el: '#app',
  data: {
		isAdmin : true,
        playerName: "",
		guess: null,
        'guesses': [],
		password : '',
		email : '',
		testClass : true
    }
})