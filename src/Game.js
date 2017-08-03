import loadLevel from './levels/loadLevel'
import {Camera, updateTime, toRadians} from 'software-renderer'
import Player from './Player'

export default class Game {
    constructor(){
        this.mapCanvas = document.getElementById('map');
        this.mapContext = this.mapCanvas.getContext('2d');
        this.level = loadLevel('demo');
        this.player = new Player({ x: 110, y: 100, z: 0, rotation: 0, controls: { forward: 'ArrowUp', backward: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }, world: this.level });
        this.camera = new Camera({ z: 25, parent: this.player, world: this.level, element: document.getElementById('camera') });
        this.loop();
    }

    loop(){
        // console.log(this.level);
        updateTime();
        this.player.update();
        this.drawMap();
        this.drawPlayer();
        this.drawEnemies();
        this.camera.render();
        window.requestAnimationFrame(() => this.loop());
    }

    drawMap(){
        this.mapContext.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
        this.mapContext.save();
        for(const sector of this.level.sectors){
            this.mapContext.beginPath();
            for(const [index, vertex] of sector.vertices.entries()){
                if(index === 0){
                    this.mapContext.moveTo(vertex.x, vertex.y);
                }
                else {
                    this.mapContext.strokeStyle = 'black';
                    this.mapContext.lineTo(vertex.x, vertex.y);
                }
            }
            this.mapContext.lineTo(sector.vertices[0].x, sector.vertices[0].y);
            if(this.camera.sector == sector.id){
                this.mapContext.fillStyle = '#bdc3c7';
                this.mapContext.fill();
            }
            this.mapContext.stroke();
            this.mapContext.closePath();
        }
        this.mapContext.restore();
    }

    drawPlayer(){
        const playerSize = 6;
        this.mapContext.save();
        this.mapContext.beginPath();
        this.mapContext.translate(this.player.x, this.player.y);
        this.mapContext.rotate(toRadians(this.player.rotation));
        this.mapContext.fillStyle = 'red';
        this.mapContext.fillRect(0, -1, 10, 2);
        this.mapContext.fillRect(-playerSize / 2, -playerSize/2, playerSize, playerSize);
        this.mapContext.closePath();
        this.mapContext.restore();
    }

    drawEnemies(){
        const enemySize = 6;
        for(const enemy of this.level.enemies){
            this.mapContext.save();
            this.mapContext.beginPath();
            this.mapContext.translate(enemy.x, enemy.y);
            this.mapContext.fillStyle = 'blue';
            this.mapContext.fillRect(-enemySize / 2, -enemySize/2, enemySize, enemySize);
            this.mapContext.closePath();
            this.mapContext.restore();
        }
    }
}