import { GenericObject } from "../models";
import { createImage } from "../fn";

import background from "./../../assets/background.png";
import hills from "./../../assets/hills.png";

export const get_backgrounds = () => {
    const backgroundImage = createImage(background);
    const hillsImage = createImage(hills);

    return [
        new GenericObject({ x: -1, y: -1, image: backgroundImage }),
        new GenericObject({ x: 100, y: 100, image: backgroundImage }),
        new GenericObject({ x: -1, y: 100, image: hillsImage }),
    ];
};
