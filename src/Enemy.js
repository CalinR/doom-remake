export default class Enemy {
    constructor({ x = 0, y = 0, z = 0, sector = -1 }){
        this.x = x;
        this.y = y;
        this.z = z;
        this.sector = sector;
    }
}