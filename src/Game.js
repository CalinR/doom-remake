import loadLevel from './levels/loadLevel'
import {Camera, updateTime, toRadians} from 'software-renderer'
import Player from './Player'
import { Scene } from 'software-renderer'
import Map from './Map'

export default class Game {
    constructor(){
        this.map = new Map(document.getElementById('map'));
        this.scene = new Scene();
        this.level = loadLevel('demo2');
        // use the following coordinates to test bug
        // 37.66, 23.99
        // this.player = new Player({ x: 37.66, y: 23.99, z: 0, rotation: 89, controls: { forward: 'ArrowUp', backward: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }});
        this.player = new Player({ x: 15, y: 10, z: 0, rotation: 0, controls: { forward: 'ArrowUp', backward: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }});
        this.camera = new Camera({ z: 3, parent: this.player, world: this.level, element: document.getElementById('camera') }); // Rework camera logic
        this.scene.add(this.player);
        this.scene.addWorld(this.level);
        this.updateLoop();
        window.player = this.player;
    }

    updateLoop(){
        this.scene.update();
        this.map.render(this.level, this.player);
        this.camera.render();
        // console.log(this.player.x, this.player.y);
        window.requestAnimationFrame(() => this.updateLoop());
    }
}