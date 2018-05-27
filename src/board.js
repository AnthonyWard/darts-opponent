import Score from "./score";

// dimensions are radius and angle
export default class Board {

    constructor() {
        this.wireThickness = 1.3;
        this.bullseye = 12.7 / 2;
        this.outerbull = 32 / 2;
        this.doubleOuter = 170;
        this.doubleWidth = 8;
        this.doubleInner = this.doubleOuter - this.doubleWidth - this.wireThickness * 2;
        this.trebleOuter = 107;
        this.trebleWidth = 8;
        this.trebleInner = this.trebleOuter - this.trebleWidth - this.wireThickness * 2;
        // scores and angles
        this.scores = [
            { score: 20, from: 0, to: 18, center: 9 },
            { score: 1, from: 18, to: 36, center: 27 },
            { score: 18, from: 36, to: 54, center: 45 },
            { score: 4, from: 54, to: 72, center: 63 },
            { score: 13, from: 72, to: 90, center: 81 },
            { score: 6, from: 90, to: 108, center: 99 },
            { score: 10, from: 108, to: 126, center: 117 },
            { score: 15, from: 126, to: 144, center: 135 },
            { score: 2, from: 144, to: 162, center: 153 },
            { score: 17, from: 162, to: 180, center: 171 },
            { score: 3, from: 180, to: 198, center: 189 },
            { score: 19, from: 198, to: 216, center: 207 },
            { score: 7, from: 216, to: 234, center: 225 },
            { score: 16, from: 234, to: 252, center: 243 },
            { score: 8, from: 252, to: 270, center: 261 },
            { score: 11, from: 270, to: 288, center: 279 },
            { score: 14, from: 288, to: 306, center: 297 },
            { score: 9, from: 306, to: 324, center: 315 },
            { score: 12, from: 324, to: 342, center: 333 },
            { score: 5, from: 342, to: 360, center: 351 }
        ];    
    }

    throw(angle, radius) {
        let score = new Score(0);

        // standard scoring
        if (radius < 0) {
            throw Error("You can't throw a dart there");
        } else if (radius < this.outerbull) {
            score = new Score(25)
        } else {
            score = new Score(this.scoreFromAngle(angle));
        }

        // multiply it
        score.multiplier = this.scoreMultiplier(radius);

        // did it hit a wire - todo
        return score;
    }

    scoreFromAngle(angle) {

        if (angle < 0 || angle >= 360) {
            throw Error("Impossible angle of dart");
        }

        return this.scores.find(score => angle >= score.from && angle < score.to).score;
    }

    scoreMultiplier(radius) {
        let multiplier = 1;
        if (radius < this.doubleOuter && radius > this.doubleInner) {
            multiplier = 2;
        } else if (radius < this.trebleOuter && radius > this.trebleInner) {
            multiplier = 3;
        } else if (radius >= this.doubleOuter) {
            multiplier = 0
        } else if (radius < this.bullseye) {
            multiplier = 2
        }
        return multiplier;
    }

}