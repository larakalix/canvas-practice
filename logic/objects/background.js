import { GenericObject } from "../models";
import { createImage } from "../fn";

import background from "./../../assets/background.png";
import hills from "./../../assets/hills.png";

const backgroundImage = createImage(background);
const hillsImage = createImage(hills);

export const backgrounds = [
    new GenericObject({ x: -1, y: -1, image: backgroundImage }),
    new GenericObject({ x: 100, y: 100, image: backgroundImage }),
    new GenericObject({ x: -1, y: 100, image: hillsImage }),
];
