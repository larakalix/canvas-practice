import { GenericObject } from "../models";
import { createImage } from "../fn";

import platform from "./../../assets/platform.png";

const platformImage = createImage(platform);

export const platforms = [
    new GenericObject({ x: 0, y: 500, image: platformImage }),
    new GenericObject({ x: platformImage.width - 3, y: 500, image: platformImage }),
    new GenericObject({ x: (platformImage.width - 3) * 2, y: 500, image: platformImage }),
    new GenericObject({ x: ((platformImage.width - 3) * 3.2 ), y: 500, image: platformImage }),
    // new Platform({ x: 400, y: 300 }),
    // new Platform({ x: 200, y: 200 }),
    // new Platform({ x: 500, y: 340 }),
    // new Platform({ x: 600, y: 400 }),
    // new Platform({ x: 800, y: 240 }),
    // new Platform({ x: 910, y: 320 }),
    // new Platform({ x: 1123, y: 290 }),
];
