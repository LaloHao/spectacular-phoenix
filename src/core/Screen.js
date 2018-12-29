Screen.setSpace = (rows, columns) => {
    if (rows && columns) {
        const screen = Screen.main().flippedVisibleFrame();
        const subspace = [];

        for (let row = 0; row < rows; row++) {
            subspace[row] = [];
            for (let column = 0; column < columns; column++) {
                subspace[row][column] = {
                    x: screen.width * column / columns,
                    y: screen.height * row / rows,
                    width: screen.width / columns,
                    height: screen.height / rows,
                };
            }
        }

        const order = rows * columns;

        Screen.space = {
            subspace,
            order,
        };

        Screen._subspace = [].concat(...subspace);
        Screen.subspace = (space) => Screen._subspace[space % order];
    }
};
