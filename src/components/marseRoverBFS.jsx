// BFS Implementation
export default function FindSafePath(start, target, obstacles) {
  const dx = [0, 1, 0, -1]; // North, East, South, West
  const dy = [1, 0, -1, 0];

  const queue = [[start.x, start.y, start.d, []]];

  const visited = new Set();
  visited.add(`${start.x},${start.y},${start.d}`);

  while (queue.length > 0) {
    const [x, y, dir, path] = queue.shift();

    if (x === target.x && y === target.y) {
      return path;
    }

    const moves = [
      // Forward
      {
        type: "F",
        newX: x + dx[dir],
        newY: y + dy[dir],
        newDir: dir,
        isValid: (nx, ny) => !obstacles.has(`${nx},${ny}`),
      },
      // Backward
      {
        type: "B",
        newX: x - dx[dir],
        newY: y - dy[dir],
        newDir: dir,
        isValid: (nx, ny) => !obstacles.has(`${nx},${ny}`),
      },
      // Rotate left
      {
        type: "L",
        newX: x,
        newY: y,
        newDir: (dir + 3) % 4,
        isValid: () => true,
      },
      // Rotate right
      {
        type: "R",
        newX: x,
        newY: y,
        newDir: (dir + 1) % 4,
        isValid: () => true,
      },
    ];

    for (const move of moves) {
      const { type, newX, newY, newDir, isValid } = move;

      if (isValid(newX, newY)) {
        const newState = `${newX},${newY},${newDir}`;

        if (!visited.has(newState)) {
          visited.add(newState);
          queue.push([newX, newY, newDir, [...path, type]]);
        }
      }
    }
  }

  return null;
}
