window.onload = function (){
    const canvas = document.getElementById("container");
    const ctx = canvas.getContext("2d");

    let canvasWidth = window.innerWidth;
    let canvasHeight = window.innerHeight;

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
    let maxCharCount = 30;
    let fallingCharArr = [];
    let fontSize = 10;
    // number of columns on screen
    let maxColumns = canvasWidth / fontSize;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    let frames = 0;

    class FallingChar {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        draw(ctx) {
            // value is a randomly picked character from charArr
            this.value =
            charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase();
            //speed is a random value
            this.speed = (Math.random() * fontSize * 2) / 4 + (fontSize * 2) / 4;

            // generate random index between 0 and 2
            let colourList = ["rgba(0,255,0)", "rgba(255,0,0)", "rgba(255,255,255)"];
            let randomIndex = Math.floor(Math.random() * 3);
            ctx.fillStyle = "rgba(0,255,0)";
            ctx.font = fontSize + "px san-serif";

            ctx.fillText(this.value, this.x, this.y);
            this.y += this.speed;

            if (this.y > canvasHeight) {
                this.y = (Math.random() * canvasHeight) / 2 - 50;
                this.x = Math.floor(Math.random() * maxColumns) * fontSize;
                this.speed = (-Math.random() * fontSize * 2) / 4 + (fontSize * 2) / 4;
            }
        }
    }

    let update = () => {
        if (fallingCharArr.length < maxCharCount) {
            let fallingChar = new FallingChar(
                Math.floor(Math.random() * maxColumns) * fontSize,
                (Math.random() * canvasHeight) / 2 - 50
            );
            fallingCharArr.push(fallingChar);
        }
        ctx.fillStyle = "rgba(0,0,0,0.05)";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        for (let i = 0; i < fallingCharArr.length && frames % 2 == 0; i++) {
            fallingCharArr[i].draw(ctx);
        }

        requestAnimationFrame(update);
        frames++;
    };

    update();
};