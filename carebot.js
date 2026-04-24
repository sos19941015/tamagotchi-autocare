// ============================================================
// CareBot - Ported from care_p1p2.py
// ============================================================

// ---- Pixel Patterns (exact match from Python) ----
const PATTERNS = {
    skull: [
        [0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1],
        [0,1,0,0,1,0,0,1],
        [0,1,1,1,1,1,1,1],
        [0,1,1,1,0,1,1,1],
        [0,0,1,1,1,1,1,0],
        [0,0,1,0,1,0,1,0],
    ],
    poop1: [
        [1,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,1,0],
        [1,0,0,0,0,0,0,1],
        [0,0,0,1,0,0,1,0],
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,0,1,0,0],
        [0,1,0,1,1,1,1,0],
        [0,1,1,1,1,1,1,0],
    ],
    poop2: [
        [0,0,0,0,0,0,0,1],
        [0,1,0,0,0,0,1,0],
        [1,0,0,0,0,0,0,1],
        [0,1,0,1,0,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,1,1,0,1,0,0],
        [0,1,1,1,1,0,1,0],
        [0,1,1,1,1,1,1,0],
    ],
    Z: [
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,1,1,1,1,0,0,0],
        [0,0,0,0,1,0,0,0],
        [0,0,0,1,0,0,0,0],
        [0,0,1,0,0,0,0,0],
        [0,1,0,0,0,0,0,0],
        [0,1,1,1,1,0,0,0],
    ],
    zzz: [
        [0,0,0,0,1,1,1,0],
        [0,0,0,0,0,0,1,0],
        [0,0,0,0,0,1,0,0],
        [0,0,0,0,1,0,0,0],
        [0,0,1,0,1,1,1,0],
        [1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    M: [
        [0,0,0,0,0,0,0,0],
        [0,1,1,0,1,1,1,0],
        [0,1,0,1,0,1,1,0],
        [0,1,0,1,0,1,1,0],
    ],
    arrow: [
        [0,0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,0],
        [0,0,0,1,1,0,0,0],
        [0,1,1,1,1,1,0,0],
        [0,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,0,0],
        [0,0,0,1,1,0,0,0],
        [0,0,0,1,0,0,0,0],
    ],
    dead1: [
        [0,1,0,0,0,1,0,0],
        [1,0,0,0,0,1,0,0],
        [0,1,1,1,0,1,0,0],
        [0,0,1,0,1,0,0,0],
        [0,1,1,0,0,0,0,0],
        [1,0,1,0,0,0,0,0],
        [1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
    dead2: [
        [0,0,0,0,0,0,0,0],
        [0,1,0,0,0,1,0,0],
        [0,0,0,1,0,0,0,0],
        [0,0,1,0,1,0,0,0],
        [0,0,0,1,0,0,0,0],
        [0,1,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
    ],
};

// ---- Matrix Reader ----
function getLCDMatrix() {
    const matrix = Array.from({ length: 16 }, () => new Array(32).fill(0));
    const container = document.querySelector('#root .grid');
    if (!container) return matrix;
    const rect = container.getBoundingClientRect();
    const pw = rect.width / 32;
    document.querySelectorAll('#root .bg-black').forEach(p => {
        const r = p.getBoundingClientRect();
        const x = Math.round((r.left - rect.left) / pw);
        const y = Math.round((r.top - rect.top) / pw);
        if (x >= 0 && x < 32 && y >= 0 && y < 16) matrix[y][x] = 1;
    });
    return matrix;
}

function matchRegion(matrix, pattern, rowStart, colStart) {
    for (let r = 0; r < pattern.length; r++) {
        for (let c = 0; c < pattern[0].length; c++) {
            if (matrix[rowStart + r][colStart + c] !== pattern[r][c]) return false;
        }
    }
    return true;
}

// ---- State Checks (exact ports) ----
function isSick(m)       { return matchRegion(m, PATTERNS.skull, 0, 24); }
function isDirtyTop(m)   { return matchRegion(m, PATTERNS.poop1, 0, 24) || matchRegion(m, PATTERNS.poop2, 0, 24); }
function isDirtyBot(m)   { return matchRegion(m, PATTERNS.poop1, 8, 24) || matchRegion(m, PATTERNS.poop2, 8, 24); }
function isAsleep(m)     { return matchRegion(m, PATTERNS.Z, 0, 24) || matchRegion(m, PATTERNS.zzz, 0, 24); }
function isDead(m)       { return matchRegion(m, PATTERNS.dead1, 8, 24) || matchRegion(m, PATTERNS.dead2, 8, 24); }
function isClock(m)      { return matchRegion(m, PATTERNS.M, 12, 2); }
function isArrow(m)      { return matchRegion(m, PATTERNS.arrow, 0, 0); }
function isDark(m)       { return m.every(row => row.every(v => v === 1)); }
function isEgg(m) {
    // Check center 16x16 area for egg-like density
    let count = 0;
    for (let y = 0; y < 16; y++) for (let x = 8; x < 24; x++) if (m[y][x]) count++;
    return count >= 55 && count <= 95;
}

// ---- Action Queue ----
// out = C, C, 2000ms
const OUT = ['C', 'C', 2000];

function makeActions(arr) { return [...arr, ...OUT]; }

const ACTIONS = {
    clean:     () => makeActions(['A','A','A','A','A','B', 8000]),
    heal:      () => makeActions(['A','A','A','A','B', 6000,'B', 6000]),
    light:     () => makeActions(['A','A','B','A','B', 1000]),
    unclock:   () => ['B', 5000],
    setClock:  (hr, mn) => {
        // 1. A+C → 進入時鐘畫面，等待畫面切換
        // 2. B   → 進入設定模式
        // 3. A×hr → 調整小時（從 0 開始累加）
        // 4. B×mn → 調整分鐘
        // 5. C   → 確認
        // 6. B   → 回到主畫面
        const acts = ['A+C', 2000, 'B', 1500];
        for (let i = 0; i < hr; i++) acts.push('A');
        acts.push(500);
        for (let i = 0; i < mn; i++) acts.push('B');
        acts.push('C', 800, 'B', 310);
        return acts;
    },
    feedTop:   (times=1) => { const a=[]; for(let i=0;i<times;i++) a.push('B',6000); return makeActions(a); },
    feedBot:   (times=1) => { const a=['A']; for(let i=0;i<times;i++) a.push('B',6000); return makeActions(a); },
    checkFood: () => ['A','B', 1000],
    checkStatus1: () => ['A','A','A','A','A','A','B',2000,'B',2000,'B',2000],
    checkStatus2: () => ['B', 2000],
    endStatus: () => OUT.slice(),
    playGame:  () => {
        const picks = Array.from({length:5}, () => Math.random()<0.5?'A':'B');
        const a = ['A','A','A','B', 5000];
        picks.forEach(p => { a.push(p); a.push(8000); });
        a.push(8000);
        return makeActions(a);
    },
    scold:     () => makeActions(['A','A','A','A','A','A','A','B', 6000]),
};

// ---- Bot State Machine ----
window.botQueue   = [];
window.botRunning = false;
window.botActive  = false;
window.botInterval = null;

window.botState = {
    dead: false,
    doing: '',
    egg: true,
    stats: { hunger: 4, happiness: 4 },
    scold: false,
    nextCheck: 0,
    feedSide: 'top',
};

// ---- Queue Processor ----
function getDelay(action) {
    const turbo = window.turboActive ? window.currentMultiplier : 1;
    if (typeof action === 'number') return Math.max(80, action / turbo);
    return Math.max(80, 400 / turbo);
}

function hackClick(label) {
    const btns = document.querySelectorAll('#root button');
    const map = { A: 0, B: 1, C: 2 };
    const idx = map[label];
    if (btns[idx]) {
        btns[idx].dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        setTimeout(() => btns[idx].dispatchEvent(new MouseEvent('mouseup', { bubbles: true })), 80);
    }
}

function processQueue() {
    if (window.botQueue.length === 0) { window.botRunning = false; return; }
    window.botRunning = true;
    const action = window.botQueue.shift();
    const delay = getDelay(action);
    if (action === 'A+C') {
        // Simultaneous press
        hackClick('A'); hackClick('C');
    } else if (typeof action === 'string') {
        hackClick(action);
    }
    setTimeout(processQueue, delay);
}

function enqueue(actions) {
    if (window.botRunning) return false;
    window.botQueue = [...actions];
    processQueue();
    return true;
}

// ---- Main Care Step ----
function runBot() {
    if (!window.botActive || window.botRunning) return;

    const m = getLCDMatrix();
    const badge = document.getElementById('statusBadge');

    // Dead?
    if (isDead(m)) {
        window.botState.dead = true;
        updateBadge('DEAD', '#fca5a5');
        return;
    }

    // Egg handling
    if (window.botState.egg) {
        if (isEgg(m)) {
            updateBadge('EGG', '#fde68a');
            const now = new Date();
            const hr = now.getHours();
            const mn = now.getMinutes();
            enqueue(ACTIONS.setClock(hr, mn));
        }
        window.botState.egg = false;
        return;
    }

    // Dark = all pixels on = light off, pet is not asleep
    if (isDark(m)) {
        updateBadge('DARK→LIGHT', '#c4b5fd');
        enqueue(ACTIONS.light());
        return;
    }

    if (isClock(m)) {
        updateBadge('CLOCK', '#93c5fd');
        enqueue(ACTIONS.unclock());
        return;
    }

    // Sleeping → turn light off
    if (isAsleep(m)) {
        updateBadge('SLEEP→LIGHT OFF', '#a7f3d0');
        window.botState.stats = { hunger: 4, happiness: 4 };
        enqueue(ACTIONS.light());
        return;
    }

    // Dirty (top priority after sleep)
    if (isDirtyTop(m)) {
        updateBadge('CLEANING', '#bae6fd');
        enqueue(ACTIONS.clean());
        return;
    }
    if (isDirtyBot(m)) {
        updateBadge('CLEANING', '#bae6fd');
        enqueue(ACTIONS.clean());
        return;
    }

    // Sick
    if (isSick(m)) {
        updateBadge('HEALING', '#fecaca');
        enqueue(ACTIONS.heal());
        return;
    }

    // Periodic status check
    const now = Date.now();
    if (now > window.botState.nextCheck) {
        window.botState.nextCheck = now + 60000;
        updateBadge('STATUS CHECK', '#e2e8f0');
        enqueue([...ACTIONS.checkStatus1(), ...ACTIONS.checkStatus2(), ...ACTIONS.endStatus()]);
        return;
    }

    updateBadge('ACTIVE ✓', '#bbf7d0');
}

function updateBadge(text, color) {
    const b = document.getElementById('statusBadge');
    if (b) { b.innerText = text; b.style.background = color; }
}

// ---- Exports ----
window.getLCDMatrix = getLCDMatrix;
window.runBot = runBot;
window.isSick = isSick;
window.isDirtyTop = isDirtyTop;
window.isDirtyBot = isDirtyBot;
window.isAsleep = isAsleep;
window.isDead = isDead;
window.isEgg = isEgg;
window.hackClick = hackClick;
window.enqueue = enqueue;
window.ACTIONS = ACTIONS;
window.updateBadge = updateBadge;
