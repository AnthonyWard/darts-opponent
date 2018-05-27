export default class Score {
    constructor(score, multiplier = 1) {
        this.score = score;
        this.multiplier = multiplier;
    }

    get totalScore() {
        return this.score * this.multiplier;
    }

    get miss() {
        return (this.score === 0 || this.multiplier === 0)
    }
}