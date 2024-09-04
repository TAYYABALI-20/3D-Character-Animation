let isLeftHandClick = false;

function handleLeftHandClick() {
    isLeftHandClick = !isLeftHandClick;
    updateDriverState();
};

function updateDriverState() {

    const leftHand = document.querySelector('.driver-left-hand');
    const cigarette = document.querySelector('.driver-cigarette');
    const lips = document.querySelectorAll('.driver-lip');
    const insideSmokes = document.querySelectorAll('.driver-cigarette-inside-smoke');

    if (isLeftHandClick) {
        leftHand.classList.add('move-left-hand', 'move-left-hand-fingers');
        cigarette.classList.add('driver-smoking-cigarette');
        lips.forEach(lip => lip.classList.add('driver-moving-lips'));
        insideSmokes.forEach(smoke => smoke.classList.add('driver-enhaling-cigarette'));
    } else {
        leftHand.classList.remove('move-left-hand', 'move-left-hand-fingers');
        cigarette.classList.remove('driver-smoking-cigarette');
        lips.forEach(lip => lip.classList.remove('driver-moving-lips'));
        insideSmokes.forEach(smoke => smoke.classList.remove('driver-enhaling-cigarette'));
    };

};

const leftHandElement = document.querySelector('.driver-left-hand');
leftHandElement.addEventListener('click', handleLeftHandClick);