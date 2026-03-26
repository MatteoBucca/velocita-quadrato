var redSquare;

function startGame() {
    myGameArea.start();
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20); 
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

var redSquare = {
    width: 20,
    height: 20,
    x: 10,
    y: 120,
    speedX: 0,
    speedY: 0,
    color: "red",
    update: function() {
        var ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    newPos: function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
};

function updateGameArea() {
    myGameArea.clear();
    redSquare.newPos();
    redSquare.update();
}

function moveup() {
    redSquare.speedY -= 1; 
}

function movedown() {
    redSquare.speedY += 1;
}

function moveleft() {
    redSquare.speedX -= 2;
}

function moveright() {
    redSquare.speedX += 2;
}