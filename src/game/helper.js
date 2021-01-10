export default class Helper {
    static markDartOnDartboard(ctx, dimensions) {
        let dartboardSlice = Math.PI / 10;
        let offset = dartboardSlice * 5.5;

        ctx.save();

        // sync with board dimensions
        ctx.rotate(-offset);
        
        // style
        ctx.strokeStyle = '#ffffff';
        ctx.fillStyle = '#00bbff';

        // draw
        ctx.beginPath();
        ctx.rotate(dimensions.radians); // transform rotation
        ctx.arc(dimensions.radius * 10, 0, 50, 0, Math.PI * 2); // transform radius
        ctx.fill();
        ctx.stroke();

        ctx.restore();
    }

    static degreesToRadians(angleInDegrees) {
        return (Math.PI / 180) * angleInDegrees;
    }
}