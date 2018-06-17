import React, { Component } from 'react';
import Dartboard from './dartboard';
import Helper from './helper';

export default class DartboardUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Dartboard()
        }
        this.canvasSize = 4500  ;
        this.canvasCenter = this.canvasSize / 2;
    }

    componentDidMount() {
        console.log("drawing dartboard");

        let canvas = document.getElementById('dartboard');
        let ctx = canvas.getContext('2d');
        let dartboardSlice = Math.PI / 10;
        let offset = dartboardSlice * 5.5;

        //board
        ctx.lineWidth = this.state.board.wireThickness * 10;
        ctx.beginPath();
        ctx.arc(this.canvasCenter, this.canvasCenter, this.canvasSize / 2 - 100, 0, Math.PI * 2);
        ctx.fill()

        // cork
        for(let i = 0; i < 20; i++) {
            let location = dartboardSlice * i - offset;

            ctx.beginPath();
            ctx.moveTo(this.canvasCenter, this.canvasCenter);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleOuter * 10, location, location + dartboardSlice);
            ctx.moveTo(this.canvasCenter, this.canvasCenter);
            if (i % 2) {
                ctx.fillStyle = '#fffadb'; // cream
            } else {
                ctx.fillStyle = '#000000' // black
            }
            ctx.fill()
        }

        // doubles
        for(let i = 0; i < 20; i++) {
            let location = dartboardSlice * i - offset;

            ctx.beginPath();
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleInner * 10, location, location);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleOuter * 10, location, location + dartboardSlice);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleInner* 10, location + dartboardSlice, location, true);
            if (i % 2) {
                ctx.fillStyle = '#10a500'; // green
            } else {
                ctx.fillStyle = '#c40000' //red
            }
            ctx.fill()
        }

        // trebles
        for(let i = 0; i < 20; i++) {
            let location = dartboardSlice * i - offset;

            ctx.beginPath();
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.trebleInner * 10, location, location);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.trebleOuter * 10, location, location + dartboardSlice);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.trebleInner * 10, location + dartboardSlice, location, true);
            if (i % 2) {
                ctx.fillStyle = '#10a500'; // green
            } else {
                ctx.fillStyle = '#c40000' //red
            }
            ctx.fill()
        }

        // outer bull
        ctx.beginPath();
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.outerbull * 10, 0, Math.PI * 2);
        ctx.fillStyle = '#10a500'; // green
        ctx.fill();

        // bull
        ctx.beginPath();
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.bullseye * 10, 0, Math.PI * 2);
        ctx.fillStyle = '#c40000' //red
        ctx.fill();

        // wire
        ctx.beginPath();
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleOuter * 10, 0, Math.PI * 2);
        ctx.moveTo(this.canvasCenter + this.state.board.doubleInner * 10, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleInner * 10, 0, Math.PI * 2);
        ctx.moveTo(this.canvasCenter + this.state.board.trebleOuter * 10, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.trebleOuter * 10, 0, Math.PI * 2);
        ctx.moveTo(this.canvasCenter + this.state.board.trebleInner * 10, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.trebleInner * 10, 0, Math.PI * 2);
        ctx.moveTo(this.canvasCenter + this.state.board.outerbull * 10, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.outerbull * 10, 0, Math.PI * 2);
        ctx.moveTo(this.canvasCenter + this.state.board.bullseye * 10, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.bullseye * 10, 0, Math.PI * 2);
        ctx.strokeStyle = "#eeeeee";
        ctx.stroke();

        for(let i = 0; i < 20; i++) {
            let location = dartboardSlice * i - offset;

            ctx.beginPath();
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.outerbull * 10, location, location);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleOuter * 10 + 50, location, location);
            ctx.moveTo(this.canvasCenter, this.canvasCenter);
            ctx.stroke()
        }

        // number wire
        ctx.beginPath();
        ctx.moveTo(this.canvasCenter + this.canvasSize / 2 - 190, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.canvasSize / 2 - 190, 0, Math.PI * 2);
        ctx.lineWidth = 20;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();


        // numbers
        ctx.fillStyle = "#ffffff";
        ctx.font = '200px Comic Sans MS';
        ctx.textAlign = "center";
        ctx.translate(this.canvasCenter, this.canvasCenter);

        this.state.board.scores.forEach(score => {
            ctx.fillText(score.score, 0, -this.canvasSize / 2 + 335);
            ctx.rotate(dartboardSlice);
        });

        ctx.font = '200px sans-serif';
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#fffadb'; // red
        ctx.fillStyle = '#fffadb' // cream

        ctx.rotate(-0.22)


        "WARD".split('').forEach(letter => {
            ctx.strokeText(letter, 0, -this.canvasSize / 2 + 450);
            ctx.rotate(0.15);
        });

        ctx.rotate(-0.60);

        "WARD".split('').forEach(letter => {
            ctx.fillText(letter, 0, -this.canvasSize / 2 + 450);
            ctx.rotate(0.15);
        });

        
        ctx.font = '150px sans-serif';
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#fffadb'; // cream
        ctx.rotate(0.02)

        "EMERGENCY".split('').forEach(letter => {
            ctx.strokeText(letter, 0, this.canvasSize / 2 - 360);
            ctx.rotate(-0.1)
        });

        // reset translation to board centre
        ctx.setTransform(1, 0, 0, 1, this.canvasSize / 2, this.canvasSize / 2);

        // UIHelper.markDartOnDartboard(ctx, new Dimensions(9, this.state.board.trebleInner));

        // draw darts
        this.state.board.darts.forEach(dart => {
            Helper.markDartOnDartboard(ctx, dart);
        });
    }

    render() {
        return (<canvas id="dartboard" width={this.canvasSize} height={this.canvasSize} />);
    }
}