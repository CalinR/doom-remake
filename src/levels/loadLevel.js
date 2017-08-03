import Enemy from '../Enemy'

const levels = {
    demo: require('./demo.json'),
    demo2: require('./demo2.json')
}

function LevelException(message) {
   this.message = message;
   this.name = 'LevelException';
}

const loadLevel = (name) => {
    if(levels[name]){
        const level = levels[name];
        level.enemies = level.enemies.map((enemy) => {
            return new Enemy({ x: enemy.x, y: enemy.y, sector: enemy.sector })
        })
        return level;
    }
    else {
        throw new LevelException('Invalid Level Name');
    }
}

export default loadLevel;