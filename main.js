window.onload = function (){
    const canvas = document.getElementById("container");
    const ctx = canvas.getContext("2d");

    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

    // let charArr = ['0','1'];
    let charArr = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "А",
        "В",
        "Г",
        "Д",
        "Є",
        "Ѕ",
        "З",
        "И",
        "Ѳ",
        "І",
        "К",
        "Л",
        "М",
        "Н",
        "Ѯ",
        "Ѻ",
        "П",
        "Ч",
        "Р",
        "С",
        "Т",
        "Ѵ",
        "Ф",
        "Х",
        "Ѱ",
        "Ѿ",
        "Ц",
      ];

    // max characters on canvas
    let maxCharCount = 150;
    let fallingCharArr = [];
    // let fontSize = 20;
    // number of columns on screen
    let maxColumns;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    let frames = 0;

    class FallingChar {
        constructor(fontSize, colour, x, y) {
            this.fontSize = fontSize;
            this.x = x;
            this.y = y;
            // this.colourList = ["rgba(0,255,0)", "rgba(255,0,0)", "rgba(255,255,255)"];
            // this.randomColour = Math.floor(Math.random() * 3);
            this.colour = colour;

        }

        draw(ctx) {
            // value is a randomly picked character from charArr
            this.value =
            charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
            // this.value = charArr[Math.floor(Math.random() * 2)];

            //speed is a random value
            this.speed = (Math.random() * this.fontSize * 4) / 7 + (this.fontSize * 4) / 7;

            //ctx.fillStyle = this.colourList[this.randomColour];
            ctx.fillStyle = this.colour;
            ctx.font = this.fontSize + "px san-serif";

            ctx.fillText(this.value, this.x, this.y);
            this.y += this.speed;

            if (this.y > canvasHeight) {
                // this.y = (Math.random() * canvasHeight) / 2 - 50;
                this.y = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
                this.x = Math.floor(Math.random() * maxColumns) * this.fontSize;
                this.speed = (-Math.random() * this.fontSize * 4) / 7 + (this.fontSize * 4) / 7;
            }
        }
    }

    let update = () => {
        let fontSize = (Math.random() * 25) + 2;
        console.log(fontSize);
        let colour = '';
        if (fontSize <= 10){
            colour = "rgba(0,150,0)";
        } else if (fontSize <=15 &&  fontSize > 10){
            colour = "rgba(0,200,0)";
        } else {
            colour = "rgba(0,255,0)";
        }

        maxColumns = canvasWidth / fontSize;
        if (fallingCharArr.length < maxCharCount) {
            let fallingChar = new FallingChar( fontSize, colour,
                Math.floor(Math.random() * maxColumns) * fontSize, Math.floor(Math.random() * (10 - 5 + 1)) + 5
                // (Math.random() * canvasHeight) / 2 - 50
            );
            fallingCharArr.push(fallingChar);
        }
        ctx.fillStyle = "rgba(0,0,0,0.03)";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        for (let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
            fallingCharArr[i].draw(ctx);
        }

        requestAnimationFrame(update);
        frames++;
    };

    update();
};