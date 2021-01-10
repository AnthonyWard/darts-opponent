import Helper from "./helper";

export default class Dimensions {
    constructor(angle, radius) {
        this._angle = this._safeAngle(angle);
        this._radius = this._correctNegativeRadius(radius);
    }

    get angle() {
        return this._angle;
    }

    get radians() {
        return Helper.degreesToRadians(this._angle);
    }

    get radius() {
        return this._radius;
    }

    // flip position on board
    _correctNegativeRadius(radius) {
        if (radius < 0) {
            radius = Math.abs(radius);
            this._angle = this._safeAngle(this._angle + 180);
        }
        return radius;
    }

    // make sure it's between 0 and 360
    _safeAngle(angle) {
        if (angle < 0) {
            angle = 360 + angle;
        } else if (angle > 360) {
            angle = angle - 360;
        }
        return angle;
    }
}