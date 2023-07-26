export const asignColor = (color) => {
    const asignColorElement = document.createElement(`i`);
    asignColorElement.className = color;
    return asignColorElement;
};