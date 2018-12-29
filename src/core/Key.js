Key.bind = (key, modifiers, callback) => {
    Key.on(key, modifiers, () => {
        const screen = Screen.main().flippedVisibleFrame();
        const window = Window.focused();
        callback(screen, window);
    });
};
