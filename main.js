import { canvas, c, player, score } from "./logic/init";
import { keys } from "./logic/params";
import { platforms, backgrounds } from "./logic/objects";

let scrollOffset = 0;

let __PLAYER__ = player;
let __SCORE__ = score;
let __PLATFORMS__ = platforms;
let __BACKGROUNDS__ = backgrounds;

const drawScene = () => {
    __BACKGROUNDS__.forEach((background) => background.draw());

    __PLATFORMS__.forEach((platform) => platform.draw());
    __PLAYER__.update();

    __SCORE__.draw(__PLAYER__.lives);
};

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    drawScene();

    const { position, velocity, width, height } = __PLAYER__;

    if (keys.right.pressed && position.x < canvas.width / 2) {
        velocity.x = 10;
    } else if (keys.left.pressed && position.x > 100) {
        velocity.x = -10;
    } else {
        velocity.x = 0;

        if (keys.right.pressed) {
            scrollOffset += 5;
            __PLATFORMS__.forEach((platform) => (platform.position.x -= 5));
            __BACKGROUNDS__.forEach(
                (background) => (background.position.x -= 3)
            );
        } else if (keys.left.pressed) {
            scrollOffset -= 5;
            if (scrollOffset >= 0) {
                __PLATFORMS__.forEach((platform) => (platform.position.x += 5));
                __BACKGROUNDS__.forEach(
                    (background) => (background.position.x += 3)
                );
            } else scrollOffset = 0;
        }

        if (velocity.y <= -16 && keys.up.pressed)
            console.log("hola", velocity.y);

        if (keys.up.pressed) {
            if (velocity.y < -16) velocity.y -= 2;
            else velocity.y = -16;
        }
    }

    __PLATFORMS__.forEach((platform) => {
        if (
            position.y + height <= platform.position.y &&
            position.y + height + velocity.y >= platform.position.y &&
            position.x + width >= platform.position.x &&
            position.x <= platform.position.x + platform.width
        )
            velocity.y = 0;
    });

    if (scrollOffset > 2000) console.log("YOU WIN!!");

    if (position.y + height >= canvas.height) restart();
};

const restart = () => {
    __PLAYER__ = player;
    __PLAYER__.position.x = 100;
    __PLAYER__.position.y = 100;
    __PLAYER__.lives = __PLAYER__.lives > 0 ? __PLAYER__.lives - 1 : 0;

    if (__PLAYER__.lives === 0) {
        console.log("GAME OVER");
    }

    __PLATFORMS__ = platforms;
    __BACKGROUNDS__ = backgrounds;
};

animate();
