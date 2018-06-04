import React, { Component } from 'react';
import Board from './board';

export default class Dartboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Board()
        }
        this.canvasSize = 400;
        this.canvasCenter = this.canvasSize / 2;
    }

    componentDidMount() {
        console.log("drawing dartboard");

        let canvas = document.getElementById('dartboard');
        let ctx = canvas.getContext('2d');
        let dartboardSlice = Math.PI / 10;
        let offset = dartboardSlice * 5.5;

        // cork
        for(let i = 0; i < 20; i++) {
            let location = dartboardSlice * i - offset;

            ctx.beginPath();
            ctx.moveTo(this.canvasCenter, this.canvasCenter);
            ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleOuter, location, location + dartboardSlice);
            ctx.moveTo(this.canvasCenter, this.canvasCenter);
            if (i % 2) {
                ctx.fillStyle = '#fffdf2'; // cream
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
        
        //ctx.moveTo(this.canvasCenter, this.canvasCenter);

        // for(let i = 0; i < 20; i++) {
        //     let location = (Math.PI / 10 * i) - (Math.PI / 10 * 5.5);
        //     ctx.arc(this.canvasCenter, this.canvasCenter, this.state.board.doubleOuter + 5, location, location);
        //     ctx.moveTo(this.canvasCenter, this.canvasCenter);
        // }

        //ctx.lineTo(this.canvasCenter + this.state.board.doubleOuter, this.canvasCenter + this.state.board.doubleOuter);

        ctx.stroke();
    }

    render() {
        return (<canvas id="dartboard" width={this.canvasSize} height={this.canvasSize} />);
    }
}