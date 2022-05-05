import { Player, Score } from "./models";
import { keys } from "./params";

export const canvas = document.querySelector("canvas");
export const c = canvas.getContext("2d");

// canvas.width = innerWidth;
// canvas.height = innerHeight;

canvas.width = 800;
canvas.height = 600;

export const player = new Player();
export const score = new Score();

addEventListener("keydown", ({ key }) => {
    switch (key) {
        case " ":
        case "ArrowUp":
        case "w":
            // player.velocity.y -= 10;
            keys.up.pressed = true;
            break;
        case "s":
            break;
        case "ArrowLeft":
        case "a":
            keys.left.pressed = true;
            break;
        case "ArrowRight":
        case "d":
            keys.right.pressed = true;
            break;

        default:
            break;
    }
});

addEventListener("keyup", ({ key }) => {
    switch (key) {
        case " ":
        case "ArrowUp":
        case "w":
            // player.velocity.y -= 10;
            keys.up.pressed = false;
            break;
        case "s":
            break;
        case "ArrowLeft":
        case "a":
            keys.left.pressed = false;
            break;
        case "ArrowRight":
        case "d":
            keys.right.pressed = false;
            break;

        default:
            break;
    }
});
