// const fs = require('fs');
// const util = require('util');
// const anyjson = require('any-json');
// const readFile = util.promisify(fs.readFile);

// Vue.filter('modificator', function(value) {
//     return Math.floor((value - 10) / 2);
// });

// Vue.filter('abilityMod', function(value, proficiency) {
//     console.log(value, proficiency);
//     return value + proficiency;
// });

// new Vue({
//     el: '#app',
//     mounted() {
//         this.updateData();
//     },
//     methods: {
//         updateData() {
//             readFile('./Cleric Ozmozis.yaml')
//                 .then(result => result.toString())
//                 .then(async result => {
//                     this.char = await anyjson.decode(result, 'yaml');
//                     console.log(this.char);
//                 });
//         }
//     },
//     template: '#char',
//     data() {
//         return {
//             char: { weapons: {} , HP: {}}
//         };
//     },
//     computed: {}
// });

feather.replace();

const app = new Vue({
    el: "#app",
    data: {
        timer: null,
        totalTime: 15 * 60,
        resetButton: false,
        title: "Countdown to rest time!",
        edit: false,
        userTime: 15
    },
    methods: {
        startTimer: function() {
            this.timer = setInterval(() => this.countdown(), 1000); //1000ms = 1 second
            this.resetButton = true;
            this.edit = false;
        },
        stopTimer: function() {
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = true;
        },
        resetTimer: function() {
            this.totalTime = this.userTime * 60;
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = false;
        },
        editTimer: function() {
            if (this.edit) {
                this.totalTime = this.userTime * 60;
            }
            this.edit = !this.edit;
        },
        padTime: function(time) {
            return (time < 10 ? "0" : "") + time;
        },
        countdown: function() {
            if (this.totalTime > 0) {
                this.totalTime--;
            } else {
                this.stopTimer()
            }
        }
    },
    computed: {
        minutes: function() {
            const minutes = Math.floor(this.totalTime / 60);
            return this.padTime(minutes);
        },
        seconds: function() {
            const seconds = this.totalTime - this.minutes * 60;
            return this.padTime(seconds);
        }
    }
});
