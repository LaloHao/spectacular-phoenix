Screen.setSpace(3, 2);

Key.bind('keypad1', ['cmd', 'alt'], (screen, window) => {
    window.setFrame(Screen.subspace[0]);
});

Key.bind('keypad2', ['cmd', 'alt'], (screen, window) => {
    window.setFrame(Screen.subspace[1]);
});

Key.bind('keypad3', ['cmd', 'alt'], (screen, window) => {
    window.setFrame(Screen.subspace[2]);
});

Key.bind('keypad4', ['cmd', 'alt'], (screen, window) => {
    window.setFrame(Screen.subspace[3]);
});

Key.bind('keypad5', ['cmd', 'alt'], (screen, window) => {
    window.setFrame(Screen.subspace[4]);
});

Key.bind('keypad6', ['cmd', 'alt'], (screen, window) => {
    window.setFrame(Screen.subspace[5]);
});

Key.bind('keypad7', ['cmd', 'alt'], (screen, window) => {
    window.setFrame(Screen.subspace[6]);
});

Key.bind('keypad8', ['cmd', 'alt'], (screen, window) => {
    window.setFrame(Screen.subspace[7]);
});

Key.bind('keypad9', ['cmd', 'alt'], (screen, window) => {
    window.setFrame(Screen.subspace[8]);
});

Key.bind('left', ['cmd', 'alt'], (screen, window) => {
    let width = screen.width / 2;
    if (window.frame().x === 0 && window.frame().width == width) {
        width = screen.width / 3;
    }
    const frame = {
        x: screen.x,
        y: screen.x,
        width,
        height: screen.height,
    };
    window.setFrame(frame);
});

Key.bind('right', ['cmd', 'alt'], (screen, window) => {
    let width = screen.width / 2;
    let x = screen.x + width;
    if (window.frame().x === x && window.frame().width == width) {
        width = screen.width / 3;
        x = screen.width * 2 / 3;
    }
    const frame = {
        x,
        y: screen.x,
        width,
        height: screen.height,
    };
    window.setFrame(frame);
});

Key.bind('c', ['cmd', 'alt'], (screen, window) => {
    window.setTopLeft({
        x: screen.x + (screen.width / 2) - (window.frame().width / 2),
        y: screen.y + (screen.height / 2) - (window.frame().height / 2)
    });
});
