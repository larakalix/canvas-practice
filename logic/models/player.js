import { canvas, c } from "../init";
import { keys } from "../params";

const gravity = 1;

export class Player {
    constructor() {
        this.lives = 5;
        this.position = {
            x: 100,
            y: 400,
        };
        this.velocity = {
            x: 0,
            y: 1,
        };
        this.width = 30;
        this.height = 30;
    }

    draw() {
        c.fillStyle = "tomato";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity;
        // } else this.velocity.y = 0;
    }
}
