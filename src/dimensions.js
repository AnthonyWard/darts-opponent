import Helper from "./helper";

export default class Dimensions {
    constructor(angle, radius) {
        this.angle = angle;
        if (angle < 0) {
            this.angle = 360 + angle;
        } else if (angle > 360) {
            this.angle = angle - 360;
        }
        this.radians = Helper.degreesToRadians(this.angle)
        this.radius = radius;
    }
}