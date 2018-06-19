import React, { Component } from 'react';
import Helper from './helper';

export default class DartboardUI extends Component {
    constructor(props) {
        super(props);
        this.canvasSize = 4500  ;
        this.canvasCenter = this.canvasSize / 2;
    }

    draw() {
        console.log("drawing dartboard");

        let canvas = document.getElementById('dartboard');
        this.ctx = canvas.getContext('2d');
        let dartboardSlice = Math.PI / 10;
        let offset = dartboardSlice * 5.5;

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);

        //board
        this.ctx.lineWidth = this.props.dartboard.wireThickness * 10;
        this.ctx.fillStyle = '#000000'; // cream
        this.ctx.beginPath();
        this.ctx.arc(this.canvasCenter, this.canvasCenter, this.canvasSize / 2 - 100, 0, Math.PI * 2);
        this.ctx.fill()

        // cork
        for(let i = 0; i < 20; i++) {
            let location = dartboardSlice * i - offset;

            this.ctx.beginPath();
            this.ctx.moveTo(this.canvasCenter, this.canvasCenter);
            this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.doubleOuter * 10, location, location + dartboardSlice);
            this.ctx.moveTo(this.canvasCenter, this.canvasCenter);
            if (i % 2) {
                this.ctx.fillStyle = '#fffadb'; // cream
            } else {
                this.ctx.fillStyle = '#000000' // black
            }
            this.ctx.fill()
        }

        // doubles
        for(let i = 0; i < 20; i++) {
            let location = dartboardSlice * i - offset;

            this.ctx.beginPath();
            this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.doubleInner * 10, location, location);
            this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.doubleOuter * 10, location, location + dartboardSlice);
            this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.doubleInner* 10, location + dartboardSlice, location, true);
            if (i % 2) {
                this.ctx.fillStyle = '#10a500'; // green
            } else {
                this.ctx.fillStyle = '#c40000' //red
            }
            this.ctx.fill()
        }

        // trebles
        for(let i = 0; i < 20; i++) {
            let location = dartboardSlice * i - offset;

            this.ctx.beginPath();
            this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.trebleInner * 10, location, location);
            this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.trebleOuter * 10, location, location + dartboardSlice);
            this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.trebleInner * 10, location + dartboardSlice, location, true);
            if (i % 2) {
                this.ctx.fillStyle = '#10a500'; // green
            } else {
                this.ctx.fillStyle = '#c40000' //red
            }
            this.ctx.fill()
        }

        // outer bull
        this.ctx.beginPath();
        this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.outerbull * 10, 0, Math.PI * 2);
        this.ctx.fillStyle = '#10a500'; // green
        this.ctx.fill();

        // bull
        this.ctx.beginPath();
        this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.bullseye * 10, 0, Math.PI * 2);
        this.ctx.fillStyle = '#c40000' //red
        this.ctx.fill();

        // wire
        this.ctx.beginPath();
        this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.doubleOuter * 10, 0, Math.PI * 2);
        this.ctx.moveTo(this.canvasCenter + this.props.dartboard.doubleInner * 10, this.canvasCenter);
        this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.doubleInner * 10, 0, Math.PI * 2);
        this.ctx.moveTo(this.canvasCenter + this.props.dartboard.trebleOuter * 10, this.canvasCenter);
        this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.trebleOuter * 10, 0, Math.PI * 2);
        this.ctx.moveTo(this.canvasCenter + this.props.dartboard.trebleInner * 10, this.canvasCenter);
        this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.trebleInner * 10, 0, Math.PI * 2);
        this.ctx.moveTo(this.canvasCenter + this.props.dartboard.outerbull * 10, this.canvasCenter);
        this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.outerbull * 10, 0, Math.PI * 2);
        this.ctx.moveTo(this.canvasCenter + this.props.dartboard.bullseye * 10, this.canvasCenter);
        this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.bullseye * 10, 0, Math.PI * 2);
        this.ctx.strokeStyle = "#eeeeee";
        this.ctx.stroke();

        for(let i = 0; i < 20; i++) {
            let location = dartboardSlice * i - offset;

            this.ctx.beginPath();
            this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.outerbull * 10, location, location);
            this.ctx.arc(this.canvasCenter, this.canvasCenter, this.props.dartboard.doubleOuter * 10 + 50, location, location);
            this.ctx.moveTo(this.canvasCenter, this.canvasCenter);
            this.ctx.stroke()
        }

        // number wire
        this.ctx.beginPath();
        this.ctx.moveTo(this.canvasCenter + this.canvasSize / 2 - 190, this.canvasCenter);
        this.ctx.arc(this.canvasCenter, this.canvasCenter, this.canvasSize / 2 - 190, 0, Math.PI * 2);
        this.ctx.lineWidth = 20;
        this.ctx.strokeStyle = "#ffffff";
        this.ctx.stroke();


        // numbers
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = '200px Comic Sans MS';
        this.ctx.textAlign = "center";
        this.ctx.translate(this.canvasCenter, this.canvasCenter);

        this.props.dartboard.scores.forEach(score => {
            this.ctx.fillText(score.score, 0, -this.canvasSize / 2 + 335);
            this.ctx.rotate(dartboardSlice);
        });

        this.ctx.font = '200px sans-serif';
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = '#fffadb'; // red
        this.ctx.fillStyle = '#fffadb' // cream

        this.ctx.rotate(-0.22)


        "WARD".split('').forEach(letter => {
            this.ctx.strokeText(letter, 0, -this.canvasSize / 2 + 450);
            this.ctx.rotate(0.15);
        });

        this.ctx.rotate(-0.60);

        "WARD".split('').forEach(letter => {
            this.ctx.fillText(letter, 0, -this.canvasSize / 2 + 450);
            this.ctx.rotate(0.15);
        });

        
        this.ctx.font = '150px sans-serif';
        this.ctx.lineWidth = 7;
        this.ctx.strokeStyle = '#fffadb'; // cream
        this.ctx.rotate(0.02)

        "EMERGENCY".split('').forEach(letter => {
            this.ctx.strokeText(letter, 0, this.canvasSize / 2 - 360);
            this.ctx.rotate(-0.1)
        });

        // reset translation to board centre
        this.ctx.setTransform(1, 0, 0, 1, this.canvasSize / 2, this.canvasSize / 2);

        // UIHelper.markDartOnDartboard(ctx, new Dimensions(9, this.props.dartboard.trebleInner));

        // draw darts
        this.props.dartboard.darts.forEach(dart => {
            Helper.markDartOnDartboard(this.ctx, dart);
        });
    }

    componentDidMount() {
        this.draw();
    }

    render() {
        if (this.ctx) {
            this.draw();
        }
        return (<canvas id="dartboard" width={this.canvasSize} height={this.canvasSize} />);
    }
}