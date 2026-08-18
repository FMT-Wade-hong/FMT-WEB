from pathlib import Path
import sys

from PIL import Image, ImageOps


def prepare(source: Path, destination: Path, max_width: int = 1800, quality: int = 84) -> None:
    image = ImageOps.exif_transpose(Image.open(source))
    if image.mode not in ("RGB", "RGBA"):
        image = image.convert("RGBA" if "A" in image.getbands() else "RGB")
    if image.width > max_width:
        height = round(image.height * max_width / image.width)
        image = image.resize((max_width, height), Image.Resampling.LANCZOS)
    destination.parent.mkdir(parents=True, exist_ok=True)
    image.save(destination, format="WEBP", quality=quality, method=6)


if __name__ == "__main__":
    prepare(
        Path(sys.argv[1]),
        Path(sys.argv[2]),
        int(sys.argv[3]) if len(sys.argv) > 3 else 1800,
        int(sys.argv[4]) if len(sys.argv) > 4 else 84,
    )
