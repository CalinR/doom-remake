import { toRadians } from 'software-renderer'

export default class Map {
    constructor(element = null, playerSize = 6){
        this.element = element;
        this.context = element.getContext('2d');
        this.playerSize = playerSize;
        this.mapSize = 10;
    }

    resize(vertex){
        return vertex * this.mapSize;
    }

    render(level, player){
        this.context.clearRect(0, 0, this.element.width, this.element.height);
        this.context.save();
        for(const sector of level.sectors){
            this.context.beginPath();
            for(const [index, vertex] of sector.vertices.entries()){
                if(index === 0){
                    this.context.moveTo(this.resize(vertex.x), this.resize(vertex.y));
                }
                else {
                    this.context.strokeStyle = 'black';
                    this.context.lineTo(this.resize(vertex.x), this.resize(vertex.y));
                }
            }
            this.context.lineTo(this.resize(sector.vertices[0].x), this.resize(sector.vertices[0].y));
            this.context.stroke();
            this.context.closePath();
        }
        this.context.restore();

        this.context.save();
        this.context.beginPath();
        this.context.translate(this.resize(player.x), this.resize(player.y));
        this.context.rotate(toRadians(player.rotation));
        this.context.fillStyle = 'red';
        this.context.fillRect(0, -1, 10, 2);
        this.context.fillRect(-this.playerSize / 2, -this.playerSize/2, this.playerSize, this.playerSize);
        this.context.closePath();
        this.context.restore();
    }
}