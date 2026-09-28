import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP = os.path.join(ROOT, "app")

PAPER = (247, 248, 246)
INK = (16, 21, 24)
ACCENT = (184, 243, 107)
MUTED = (101, 113, 119)
LINE = (220, 226, 227)
WHITE = (255, 255, 255)

MONO = r"C:\Windows\Fonts\consola.ttf"
MONO_B = r"C:\Windows\Fonts\consolab.ttf"
SANS_B = r"C:\Windows\Fonts\segoeuib.ttf"
SANS = r"C:\Windows\Fonts\segoeui.ttf"


def font(path, size):
    return ImageFont.truetype(path, size)


def rounded(draw, box, radius, fill):
    draw.rounded_rectangle(box, radius=radius, fill=fill)


def dr_mark(draw, x, y, size):
    rounded(draw, [x, y, x + size, y + size], int(size * 0.26), INK)
    f = font(MONO_B, int(size * 0.36))
    bbox = draw.textbbox((0, 0), "DR", font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(
        (x + (size - tw) / 2 - bbox[0], y + (size - th) / 2 - bbox[1]),
        "DR",
        font=f,
        fill=ACCENT,
    )


def apple_icon():
    s = 180
    im = Image.new("RGB", (s, s), PAPER)
    d = ImageDraw.Draw(im)
    d.rectangle([0, 0, s - 1, s - 1], outline=LINE, width=2)
    dr_mark(d, 30, 30, 120)
    im.save(os.path.join(APP, "apple-icon.png"), "PNG", optimize=True)
    print("apple-icon.png", s, "x", s)


def og_image():
    W, H = 1200, 630
    im = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(im)

    # top rule
    d.rectangle([0, 0, W, 8], fill=INK)
    # subtle accent block, right side
    d.rectangle([W - 300, 8, W, 8 + 120], fill=ACCENT)

    # brand
    dr_mark(d, 88, 78, 62)
    d.text((168, 100), "Dinith Rukantha", font=font(SANS_B, 30), fill=INK)

    # kicker
    d.text(
        (88, 196),
        "FULL STACK ENGINEER  ·  GALLE, SRI LANKA",
        font=font(MONO_B, 20),
        fill=MUTED,
    )

    # headline
    d.text((88, 246), "I build software that", font=font(SANS_B, 66), fill=INK)
    d.text((88, 328), "scales from idea", font=font(SANS_B, 66), fill=INK)
    d.text((88, 410), "to production.", font=font(SANS_B, 66), fill=ACCENT)

    # divider
    d.line([(88, 520), (W - 88, 520)], fill=LINE, width=2)

    # stack line
    d.text(
        (88, 546),
        "React.js  ·  Spring Boot  ·  AWS  ·  Multi-Tenant Systems  ·  Cloud & AI",
        font=font(MONO, 21),
        fill=MUTED,
    )

    im.save(os.path.join(APP, "opengraph-image.png"), "PNG", optimize=True)
    print("opengraph-image.png", W, "x", H)


def favicon_ico():
    sizes = [16, 32, 48]
    imgs = []
    for s in sizes:
        im = Image.new("RGBA", (s, s), (0, 0, 0, 0))
        d = ImageDraw.Draw(im)
        dr_mark(d, 0, 0, s)
        imgs.append(im)
    imgs[-1].save(
        os.path.join(APP, "favicon.ico"),
        "ICO",
        sizes=[(s, s) for s in sizes],
        append_images=imgs[:-1],
    )
    print("favicon.ico", sizes)


if __name__ == "__main__":
    apple_icon()
    og_image()
    favicon_ico()
