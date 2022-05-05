import { c, canvas } from "../init";

export class Score {
    constructor() {}

    draw(lives) {
        c.fillStyle = "white";
        c.font = "bold 14px Arial";
        c.fillText(`Lives: ${lives}`, canvas.width - 80, 30);
    }
}
