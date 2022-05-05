import { c } from "../init";

export class GenericObject {
    constructor({ x, y, image }) {
        this.image = image;
        this.width = image.width;
        this.height = image.height;
        this.position = { x, y };
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
    }
}