from collections import deque
from pathlib import Path
import sys

from PIL import Image


def remove_connected_white_background(source: Path, destination: Path) -> None:
    image = Image.open(source).convert("RGBA")
    pixels = image.load()
    width, height = image.size

    def is_background_candidate(x: int, y: int) -> bool:
        red, green, blue, _ = pixels[x, y]
        return min(red, green, blue) >= 200 and max(red, green, blue) - min(red, green, blue) <= 28

    queue: deque[tuple[int, int]] = deque()
    visited = bytearray(width * height)

    for x in range(width):
        queue.append((x, 0))
        queue.append((x, height - 1))
    for y in range(height):
        queue.append((0, y))
        queue.append((width - 1, y))

    while queue:
        x, y = queue.popleft()
        index = y * width + x
        if visited[index] or not is_background_candidate(x, y):
            continue
        visited[index] = 1
        red, green, blue, _ = pixels[x, y]
        lightness = min(red, green, blue)
        alpha = 0 if lightness >= 232 else max(0, min(255, round((232 - lightness) * 255 / 32)))
        pixels[x, y] = (red, green, blue, alpha)
        if x:
            queue.append((x - 1, y))
        if x + 1 < width:
            queue.append((x + 1, y))
        if y:
            queue.append((x, y - 1))
        if y + 1 < height:
            queue.append((x, y + 1))

    destination.parent.mkdir(parents=True, exist_ok=True)
    image.save(destination, optimize=True)


if __name__ == "__main__":
    remove_connected_white_background(Path(sys.argv[1]), Path(sys.argv[2]))
