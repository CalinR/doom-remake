const levels = {
    demo: require('./demo.json')
}

function LevelException(message) {
   this.message = message;
   this.name = 'LevelException';
}

const loadLevel = (name) => {
    if(levels[name]){
        return levels[name];
    }
    else {
        throw new LevelException('Invalid Level Name');
    }
}

export default loadLevel;