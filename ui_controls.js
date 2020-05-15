const registerControls = canvas => {

    const rad = 0.1;
    const keyDownHandler = (event) => {
        if (event.keyCode == 65) {
            camera.rotateTheta(-rad);
        } else if (event.keyCode == 68) {
            camera.rotateTheta(rad);
        } else if (event.keyCode == 87) {
            camera.rotatePhi(rad);
        } else if (event.keyCode == 83) {
            camera.rotatePhi(-rad);
        } else if (event.keyCode == 82) {
            camera.reset();
        } else if (event.keyCode == 80) {
            camera.debug();
        }
     }

    let isClicked = false;
    const movementSpeed = 0.001;
    const moveHandler = e => {
        if (isClicked) {
            let xMove = e.movementX * movementSpeed;
            let yMove = e.movementY * movementSpeed;
            camera.rotateTheta(xMove);
            camera.rotatePhi(yMove);
        }
    }

    const zoomSpeed = 0.008;
    const mousewheelHandler = e => {
        e.preventDefault();
        let zoom = e.deltaY * zoomSpeed;
        camera.zoom(zoom);
    }

    document.addEventListener('keydown', keyDownHandler, false);
    canvas.addEventListener('mousedown', e => { isClicked = true; }, false);
    canvas.addEventListener('mouseup', e => { isClicked = false; }, false);
    canvas.addEventListener('mousemove', moveHandler, false);
    canvas.addEventListener('mousewheel', mousewheelHandler, false);


    const handleOrientation = e => {
        const absolute = e.absolute;
        const alpha = e.alpha;
        const beta = e.beta;
        const gamma = e.gamma;

        console.log('absolute: ' + absolute);
        console.log('alpha: ' + alpha);
        console.log('beta: ' + beta);
        console.log('gamma: ' + gamma);
        console.log('*******************');
    }

    window.addEventListener('deviceorientation', handleOrientation, true);

}