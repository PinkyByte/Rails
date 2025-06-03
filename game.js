const startButton = document.querySelector('#start');
const rulesButton = document.querySelector('#rules');
const menu = document.querySelector('#railwaysMenu');
const game = document.querySelector('#railwaysGame');
const canvas = document.querySelector('#railwaysCanvas');
const context = canvas.getContext('2d');

let table = [];
let n;
let size;
let interval;
let start;

function startGame() {
    if(document.querySelector('#name').value.trim() === "") {
        const warning = document.querySelector('#warning');
        if(!warning) {
            const input = document.querySelector('#name');
            const p = document.createElement('p');
            p.innerHTML = '<p>Adj meg egy nevet!<p>';
            p.id = 'warning';
            input.insertAdjacentElement('afterend', p);
        }
        return;
    }

    let diff = Number(document.querySelector('#diff').value);
    let num = randomLevel();
    let level = levels[diff][num];
    n = level.length;
    size = (document.querySelector('#diff').value === '0' ? 105 : 75);
    for(let i = 0; i < n; i++) {
        table[i] = [];
        for(let j = 0; j < n; j++) {
            const img = new Image();
            img.src = level[i][j];
            img.onload = () => {
                context.drawImage(img, j * size, i * size, size, size);
            };
            table[i][j] = level[i][j];
        }
    }

    canvas.addEventListener('click', getCoordinate);

    document.querySelector('#player').innerHTML = document.querySelector('#name').value;
    document.querySelector('#timer').innerHTML = '00:00';
    start = Date.now();
    interval = setInterval(updateTimer, 1000);

    menu.classList.remove('active');
    game.classList.add('active');
}

function getCoordinate(event) {
    const x = event.clientY - canvas.getBoundingClientRect().top;
    const y = event.clientX - canvas.getBoundingClientRect().left;
    changeTile(Math.floor(x / size), Math.floor(y / size));
}

function changeTile(i, j) {
    const img = new Image();
    switch(table[i][j]) {
        case 'assets/tiles/bridge.png':
            table[i][j] = 'assets/tiles/bridge_rail.png';
            break;
        case 'assets/tiles/bridge_rot.png':
            table[i][j] = 'assets/tiles/bridge_rot_rail.png';
            break;
        case 'assets/tiles/empty.png':
            table[i][j] = 'assets/tiles/straight_rail.png';
            break;
        case 'assets/tiles/straight_rail.png':
            table[i][j] = 'assets/tiles/straight_rot_rail.png';
            break;
        case 'assets/tiles/straight_rot_rail.png':
            table[i][j] = 'assets/tiles/curve_90_rail.png';
            break;
        case 'assets/tiles/curve_90_rail.png':
            table[i][j] = 'assets/tiles/curve_180_rail.png';
            break;
        case 'assets/tiles/curve_180_rail.png':
            table[i][j] = 'assets/tiles/curve_270_rail.png';
            break;
        case 'assets/tiles/curve_270_rail.png':
            table[i][j] = 'assets/tiles/curve_rail.png';
            break;
        case 'assets/tiles/curve_rail.png':
            table[i][j] = 'assets/tiles/straight_rail.png';
            break;
        case 'assets/tiles/mountain.png':
            table[i][j] = 'assets/tiles/mountain_rail.png';
            break;
        case 'assets/tiles/mountain_90.png':
            table[i][j] = 'assets/tiles/mountain_90_rail.png';
            break;
        case 'assets/tiles/mountain_180.png':
            table[i][j] = 'assets/tiles/mountain_180_rail.png';
            break;
        case 'assets/tiles/mountain_270.png':
            table[i][j] = 'assets/tiles/mountain_270_rail.png';
            break;
    }
    img.src = table[i][j];
    img.onload = () => {
        context.drawImage(img, j * size, i * size, size, size);
    };
    if(isSolved()) {
        if(isOneCircle()) {
            gameOver();
        }
    }
}

function isSolved() {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(impossible.includes(table[i][j])) {
                return false;
            } else if(table[i][j] in tiles) {
                const dirs = tiles[table[i][j]];
                for (let k = 0; k < dirs.length; k++) {
                    const dir = dirs[k];
                    const possible = directions[dir];
                    switch(dir) {
                        case 'up':
                            if(i - 1 >= 0) {
                                if(!possible.includes(table[i - 1][j])) {
                                    return false;
                                }
                            }
                            break;
                        case 'down':
                            if(i + 1 < n) {
                                if(!possible.includes(table[i + 1][j])) {
                                    return false;
                                }
                            }
                            break;
                        case 'left':
                            if(j - 1 >= 0) {
                                if(!possible.includes(table[i][j - 1])) {
                                    return false;
                                }
                            }
                            break;
                        case 'right':
                            if(j + 1 < n) {
                                if(!possible.includes(table[i][j + 1])) {
                                    return false;
                                }
                            }
                            break;
                    }
                }
            }
        }
    }
    return true;
}

function isOneCircle() {
    let visited = new Set();
    let queue = [];
    let start = null;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (isRailTile(table[i][j])) {
                start = [i, j];
                break;
            }
        }
        if (start) {
            break;
        }
    }

    queue.push(start);
    visited.add(`${start[0]}, ${start[1]}`);
    while(queue.length !== 0) {
        const tile = queue.shift();
        let neighbors = getNeighbors(tile);
        for(let i = 0; i < neighbors.length; i++) {
            if(!visited.has(`${neighbors[i][0]}, ${neighbors[i][1]}`)) {
                visited.add(`${neighbors[i][0]}, ${neighbors[i][1]}`);
                queue.push(neighbors[i]);
            }
        }
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(isRailTile(table[i][j]) && !visited.has(`${i}, ${j}`)) {
                return false;
            }
        }
    }
    return true;
}

function isRailTile(rail) {
    return rail !== 'assets/tiles/empty.png' && rail !== 'assets/tiles/bridge.png' && rail !== 'assets/tiles/bridge_rot.png' && rail !== 'assets/tiles/mountain_90.png' && rail !== 'assets/tiles/mountain_180.png' && rail !== 'assets/tiles/mountain_270.png' && rail !== 'assets/tiles/mountain.png' && rail !== 'assets/tiles/oasis.png';
}

function getNeighbors(coord) {
    let x = coord[0];
    let y = coord[1];
    let dirs = tiles[table[x][y]];
    let neighbors = [];
    for(i = 0; i < dirs.length; i++) {
        switch(dirs[i]) {
            case 'up':
                if(x - 1 >= 0) {
                    neighbors.push([x - 1, y]);
                }
                break;
            case 'down':
                if(x + 1 < n) {
                    neighbors.push([x + 1, y]);
                }
                break;
            case 'left':
                if(y - 1 >= 0) {
                    neighbors.push([x, y - 1]);
                }
                break;
            case 'right':
                if(y + 1 < n) {
                    neighbors.push([x, y + 1]);
                }
                break;
        }
    }
    return neighbors;
}

function updateTimer() {
    let elapsed = Math.floor((Date.now() - start) / 1000);
    let min = Math.floor(elapsed / 60);
    let sec = elapsed % 60;
    document.querySelector('#timer').innerHTML = (min < 10 ? '0' : '') + min + ':' + (sec < 10 ? '0' : '') + sec;
}

function gameOver() {
    clearInterval(interval);
    canvas.removeEventListener('click', getCoordinate);
    const timer = document.querySelector('#timer');
    let counter = 0;
    let isRed = false;
    const colorChange = setInterval(() => {
        timer.style.color = isRed ? 'black' : 'red';
        isRed = !isRed;
        counter++;
        if(counter === 5) {
            clearInterval(colorChange);
            timer.style.color = 'black';
        }
    }, 1000);
    setTimeout(() => {
        game.classList.remove('active');
        menu.classList.add('active');
    }, 5000);
}

function randomLevel() {
    return Math.floor(Math.random() * 5);
}

function showRules() {
    const desc = document.querySelector('#desc')
    if(desc) {
        desc.remove();
    } else {
        const p = document.createElement('p');
        p.id = 'desc';
        p.innerHTML = '<p>Nekeresdországban Nevenincs király szeretne egy körvasutat építeni, amely bejárja a birodalmának minden szegletét. A feladat megvalósítása Furfangra, az udvari tanácsosra vár, akinek a munkáját nehezíti a királyság változatos tája. Segítsünk Furfangnak megtervezni a királyság vasúthálózatához tartozó térképet!</p>';
        menu.appendChild(p);
    }
}

startButton.addEventListener('click', () => startGame());
rulesButton.addEventListener('click', () => showRules());