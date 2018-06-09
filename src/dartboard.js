import React, { Component } from 'react';
import Board from './board';

export default class Dartboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Board()
        }
        this.canvasSize = 450;
        this.canvasCenter = this.canvasSize / 2;
    }

    componentDidMount() {
        console.log("drawing dartboard");

        let canvas = document.getElementById('dartboard');
        let ctx = canvas.getContext('2d');
        let dartboardSlice = Math.PI / 10;
        let offset = dartboardSlice * 5.5;

        //board
        ctx.beginPath();
        ctx.arc(this.canvasCenter, this.canvasCenter, 210, 0, Math.PI * 2);
        ctx.fill()

        // cork
        for(let i = 0; i < 20; i++) {
            let location = dartboardSlice * i - offset;

            ctx.beginPath();
            ctx.moveTo(this.canvasCenter, this.canvasCenter);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleOuter, location, location + dartboardSlice);
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
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleInner, location, location);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleOuter, location, location + dartboardSlice);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleInner, location + dartboardSlice, location, true);
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
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.trebleInner, location, location);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.trebleOuter, location, location + dartboardSlice);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.trebleInner, location + dartboardSlice, location, true);
            if (i % 2) {
                ctx.fillStyle = '#10a500'; // green
            } else {
                ctx.fillStyle = '#c40000' //red
            }
            ctx.fill()
        }

        // outer bull
        ctx.beginPath();
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.outerbull, 0, Math.PI * 2);
        ctx.fillStyle = '#10a500'; // green
        ctx.fill();

        // bull
        ctx.beginPath();
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.bullseye, 0, Math.PI * 2);
        ctx.fillStyle = '#c40000' //red
        ctx.fill();

        // wire
        ctx.beginPath();
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleOuter, 0, Math.PI * 2);
        ctx.moveTo(this.canvasCenter + this.state.board.doubleInner, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleInner, 0, Math.PI * 2);
        ctx.moveTo(this.canvasCenter + this.state.board.trebleOuter, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.trebleOuter, 0, Math.PI * 2);
        ctx.moveTo(this.canvasCenter + this.state.board.trebleInner, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.trebleInner, 0, Math.PI * 2);
        ctx.moveTo(this.canvasCenter + this.state.board.outerbull, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.outerbull, 0, Math.PI * 2);
        ctx.moveTo(this.canvasCenter + this.state.board.bullseye, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.bullseye, 0, Math.PI * 2);
        ctx.moveTo(this.canvasCenter + this.canvasSize / 2 - 20, this.canvasCenter);
        ctx.arc(this.canvasCenter, this.canvasCenter, this.canvasSize / 2 - 20, 0, Math.PI * 2);
        ctx.strokeStyle = "#bbbbbb";
        ctx.stroke();


        // numbers
        ctx.fillStyle = "#ffffff";
        ctx.font = '20px Comic Sans MS';
        ctx.textAlign = "center";
        ctx.translate(this.canvasCenter, this.canvasCenter);

        this.state.board.scores.forEach(score => {
            ctx.fillText(score.score, 0, -this.canvasSize / 2 + 35);
            ctx.rotate(dartboardSlice);
        });
    }

    render() {
        return (<canvas id="dartboard" width={this.canvasSize} height={this.canvasSize} />);
    }
}