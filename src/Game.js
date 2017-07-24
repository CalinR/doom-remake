import Player from './Player'
import { deltaTime, lastUpdate, updateTime, toRadians } from './utils'
import loadLevel from './levels/loadLevel'
import {Camera} from 'software-renderer'

export default class Game {
    constructor(){
        this.player = new Player({ x: 100, y: 100, controls: { forward: 'ArrowUp', backward: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' } });
        this.mapCanvas = document.getElementById('map');
        this.mapContext = this.mapCanvas.getContext('2d');
        this.level = loadLevel('demo');
        this.camera = new Camera({ x: this.player.x, y: this.player.y, world: this.level, element: document.getElementById('camera') });
        this.camera.render();
        this.loop();
    }

    loop(){
        updateTime();
        this.player.update();
        this.drawMap();
        this.drawPlayer();
        window.requestAnimationFrame(() => this.loop());
    }

    drawMap(){
        this.mapContext.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
        this.mapContext.save();
        this.mapContext.beginPath();
        for(const sector of this.level){
            for(const [index, wall] of sector.walls.entries()){
                if(index === 0){
                    this.mapContext.moveTo(wall.x, wall.y);
                }
                else {
                    this.mapContext.strokeStyle = 'black';
                    this.mapContext.lineTo(wall.x, wall.y);
                }
            }
            this.mapContext.lineTo(sector.walls[0].x, sector.walls[0].y);
            this.mapContext.stroke();
        }
        this.mapContext.closePath();
        this.mapContext.restore();
    }

    drawPlayer(){
        const playerSize = 6;
        this.mapContext.save();
        this.mapContext.beginPath();
        this.mapContext.translate(this.player.x, this.player.y);
        this.mapContext.rotate(toRadians(this.player.rotation));
        this.mapContext.fillStyle = 'red';
        this.mapContext.fillRect(-playerSize / 2, -playerSize/2, playerSize, playerSize);
        this.mapContext.fillRect(0, -1, 10, 2);
        this.mapContext.closePath();
        this.mapContext.restore();
    }
}