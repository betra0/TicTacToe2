export const turns ={
    x:'X',
    o:'O',
    none:false
    
}

export const jugadas3x3 = [
    [0, 1, 2], // Fila superior
    [3, 4, 5], // Fila del medio
    [6, 7, 8], // Fila inferior
    [0, 3, 6], // Columna izquierda
    [1, 4, 7], // Columna del medio
    [2, 5, 8], // Columna derecha
    [0, 4, 8], // Diagonal principal (de izquierda a derecha)
    [2, 4, 6]  // Diagonal secundaria (de derecha a izquierda)
  ];