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
        startTimer() {
            this.timer = setInterval(() => this.countdown(), 1000); //1000ms = 1 second
            this.resetButton = true;
            this.edit = false;
        },
        stopTimer() {
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = true;
        },
        resetTimer() {
            this.totalTime = this.userTime * 60;
            clearInterval(this.timer);
            this.timer = null;
            this.resetButton = false;
        },
        editTimer() {
            if (this.edit) {
                this.totalTime = this.userTime * 60;
            }
            this.edit = !this.edit;
        },
        padTime(time) {
            return (time < 10 ? "0" : "") + time;
        },
        countdown() {
            if (this.totalTime > 0) {
                this.totalTime--;
            } else {
                this.stopTimer();
            }
        }
    },
    computed: {
        minutes() {
            const minutes = Math.floor(this.totalTime / 60);
            return this.padTime(minutes);
        },
        seconds() {
            const seconds = this.totalTime - this.minutes * 60;
            return this.padTime(seconds);
        }
    }
});
