import { GenericObject } from "../models";
import { createImage } from "../fn";

import background from "./../../assets/background.png";
import hills from "./../../assets/hills.png";

export const backgrounds = [
    new GenericObject({ x: -1, y: -1, image: createImage(background) }),
    new GenericObject({ x: -1, y: -1, image: createImage(hills) }),
];
