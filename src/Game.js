import loadLevel from './levels/loadLevel'
import {Camera, Player, utils} from 'software-renderer'

export default class Game {
    constructor(){
        this.mapCanvas = document.getElementById('map');
        this.mapContext = this.mapCanvas.getContext('2d');
        this.level = loadLevel('demo');
        this.player = new Player({ x: 100, y: 100, z: 25, rotation: 0, controls: { forward: 'ArrowUp', backward: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' }, world: this.level });
        this.camera = new Camera({ parent: this.player, world: this.level, element: document.getElementById('camera') });
        this.loop();
    }

    loop(){
        utils.updateTime();
        this.player.update();
        this.drawMap();
        this.drawPlayer();
        this.camera.render();
        window.requestAnimationFrame(() => this.loop());
    }

    drawMap(){
        this.mapContext.clearRect(0, 0, this.mapCanvas.width, this.mapCanvas.height);
        this.mapContext.save();
        for(const sector of this.level){
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
        this.mapContext.rotate(utils.toRadians(this.player.rotation));
        this.mapContext.fillStyle = 'red';
        this.mapContext.fillRect(0, -1, 10, 2);
        this.mapContext.fillRect(-playerSize / 2, -playerSize/2, playerSize, playerSize);
        this.mapContext.closePath();
        this.mapContext.restore();
    }
}