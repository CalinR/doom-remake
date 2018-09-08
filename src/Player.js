import { GameObject, deltaTime, toRadians } from 'software-renderer'

export default class Player extends GameObject {
    constructor({x = 0, y = 0, z = 0, rotation = 0, controls = { forward: 'w', backward: 's', left: 'a', right: 'd'}, world = null} = {}){
        super({ x, y, z, rotation });
        this.world = world;
        this.speed = 0;
        this.moveSpeed = 5;
        this.rotationSpeed = 130;
        this.direction = 0;
        this.friction = 0.97;
        this.controls = controls;
        this.bindControls();
        this.moving = 0;
    }

    bindControls(){
        document.onkeydown = (event) => {
            event.preventDefault();
            switch(event.key){
                case this.controls.forward:
                    this.moving = 1;
                    break;
                case this.controls.backward:
                    this.moving = -1;
                    break;
                case this.controls.left:
                    this.direction = -1;
                    break;
                case this.controls.right:
                    this.direction = 1;
                    break;
            }
        }

        document.onkeyup = (event) => {
            switch(event.key){
                case this.controls.forward:
                    this.moving = 0;
                    break;
                case this.controls.backward:
                    this.moving = 0;
                    break;
                case this.controls.left:
                    this.direction = 0;
                    break;
                case this.controls.right:
                    this.direction = 0;
                    break;
            }
        }
    }

    update(){
        if(this.moving == 1){
            if(this.speed < this.moveSpeed){
                this.speed ++;
            }
        }
        else if(this.moving == -1){
            if(this.speed > -this.moveSpeed){
                this.speed --;
            }
        }
        else if(this.speed != 0) {
            this.speed *= this.friction;
        }

        this.speed = Number(parseFloat(this.speed).toFixed(2));

        if(this.speed < 0.2 && this.speed > 0){
            this.speed = 0
        }
        else if(this.speed > -0.2 && this.speed < 0) {
            this.speed = 0;
        }

        if(this.sector){
            this.z = this.sector.floor;
        }
        let rotation = this.rotation + ((this.direction * this.rotationSpeed) * deltaTime);
        
        if(rotation > 360){
            rotation = 0;
        }
        else if(rotation < 0){
            rotation = rotation + 360;
        }

        // const moveStep = this.moving * this.moveSpeed;
        const moveStep = this.speed;
        const radians = toRadians(rotation);
        const moveX = Math.cos(radians) * moveStep;
        const moveY = Math.sin(radians) * moveStep;
        this.velocity.x = (moveX * deltaTime);
        this.velocity.y = (moveY * deltaTime);

        // const x = this.x + (moveX * deltaTime);
        // const y = this.y + (moveY * deltaTime);

        // this.x = x;
        // this.y = y;
        this.rotation = rotation;
    }
}