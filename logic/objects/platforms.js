import { GenericObject } from "../models";
import { createImage } from "../fn";

import platform from "./../../assets/platform.png";
import { canvas } from "../init";

const platformImage = createImage(platform);
const canvasHeight = canvas.height - 100;

export const platforms = [
    new GenericObject({ x: 0, y: canvasHeight, image: platformImage }),
    new GenericObject({ x: platformImage.width - 3, y: canvasHeight, image: platformImage }),
    new GenericObject({ x: (platformImage.width - 3) * 2, y: canvasHeight, image: platformImage }),
    new GenericObject({ x: ((platformImage.width) * 3.2), y: canvasHeight - 150, image: platformImage }),
    new GenericObject({ x: ((platformImage.width - 3) * 4.4), y: canvasHeight, image: platformImage }),
    new GenericObject({ x: ((platformImage.width - 3) * 5.6), y: canvasHeight, image: platformImage }),
    new GenericObject({ x: ((platformImage.width) * 6.6), y: canvasHeight - 150, image: platformImage }),
    new GenericObject({ x: ((platformImage.width) * 8), y: canvasHeight - 200, image: platformImage }),
    // new Platform({ x: 400, y: 300 }),
    // new Platform({ x: 200, y: 200 }),
    // new Platform({ x: 500, y: 340 }),
    // new Platform({ x: 600, y: 400 }),
    // new Platform({ x: 800, y: 240 }),
    // new Platform({ x: 910, y: 320 }),
    // new Platform({ x: 1123, y: 290 }),
];
