"""
Process HermesDesktop logo into all required favicon and brand assets.

Source: public/logo-source.jpg (1920x1920, black laptop icon + HermesDesktop text)
"""
from PIL import Image, ImageDraw, ImageFont
import os

PUBLIC = r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public"
SRC = os.path.join(PUBLIC, "logo-source.jpg")

# Open the source
src = Image.open(SRC).convert("RGBA")
W, H = src.size
print(f"Source: {W}x{H}")

# The image has: laptop icon (roughly top 50%) + "HermesDesktop" text (bottom 35%)
# We need TWO versions:
#   1. Full logo (icon + text) -> logo.png (transparent PNG for header/footer)
#   2. Square icon-only -> favicon variants

# --- 1. Full logo: clean transparent PNG ---
# Convert white background to transparent
def white_to_transparent(img):
    """Convert near-white pixels to transparent."""
    data = img.getdata()
    new_data = []
    for item in data:
        # item is (R, G, B, A)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
    img.putdata(new_data)
    return img

# Make a full logo with transparent background
full = src.copy()
full = white_to_transparent(full)

# Save full logo at original size (it'll be downsized by browser)
full_path = os.path.join(PUBLIC, "logo.png")
full.save(full_path, "PNG", optimize=True)
print(f"Saved {full_path}")

# Also save a smaller "logo-mark" — just the laptop icon, square crop
# Looking at the image: laptop icon is roughly in the top-center, y ~ 250-940 of 1920
# Let's crop it to a square containing the icon
icon_crop = src.crop((520, 280, 1400, 1080))  # x1, y1, x2, y2 -> 880x800
# Resize to a clean square
icon_w, icon_h = icon_crop.size
side = max(icon_w, icon_h)
square = Image.new("RGBA", (side, side), (255, 255, 255, 255))
square.paste(icon_crop, ((side - icon_w) // 2, (side - icon_h) // 2))
square = white_to_transparent(square)

# Save as logo-mark (icon only, square, transparent)
mark_path = os.path.join(PUBLIC, "logo-mark.png")
square.save(mark_path, "PNG", optimize=True)
print(f"Saved {mark_path}")

# --- 2. Favicon variants ---
# favicon.ico needs to contain multiple sizes
# We'll create 16x16, 32x32, 48x48 and bundle into .ico

# First, make a clean icon-on-white background version for favicon
# (browsers handle transparent OK in ICO, but some prefer a background)
def make_icon(size, bg_color=(255, 255, 255, 255)):
    """Create a favicon variant at given size."""
    # Resize the icon-only square
    icon = square.resize((size, size), Image.LANCZOS)
    if bg_color[3] > 0:
        bg = Image.new("RGBA", (size, size), bg_color)
        bg.alpha_composite(icon)
        return bg
    return icon

# Generate PNG variants
for size, name in [
    (16, "favicon-16x16.png"),
    (32, "favicon-32x32.png"),
    (48, "favicon-48x48.png"),
    (180, "apple-touch-icon.png"),
    (192, "android-chrome-192x192.png"),
    (512, "android-chrome-512x512.png"),
]:
    out = make_icon(size)
    path = os.path.join(PUBLIC, name)
    out.save(path, "PNG", optimize=True)
    print(f"Saved {path} ({size}x{size})")

# Create multi-resolution .ico
ico_sizes = [(16, 16), (32, 32), (48, 48)]
ico_images = [make_icon(s[0]) for s in ico_sizes]
ico_path = os.path.join(PUBLIC, "favicon.ico")
ico_images[0].save(
    ico_path,
    format="ICO",
    sizes=ico_sizes,
    append_images=ico_images[1:],
)
print(f"Saved {ico_path} (multi-size: {ico_sizes})")

# --- 3. OG image (1200x630) for social sharing ---
# Create OG image with brand colors background + logo + tagline
og = Image.new("RGB", (1200, 630), color=(15, 15, 25))  # near-black bg
draw = ImageDraw.Draw(og)

# Draw subtle gradient effect with a few rectangles
for i in range(630):
    alpha = int(20 * (1 - i / 630))
    draw.line([(0, i), (1200, i)], fill=(25 + i // 30, 15, 50 - i // 50))

# Paste the icon in the center
icon_size = 280
icon_resized = square.resize((icon_size, icon_size), Image.LANCZOS)
# Center horizontally, slightly above center
icon_x = (1200 - icon_size) // 2
icon_y = 100
og.paste(icon_resized, (icon_x, icon_y), icon_resized)

# Add "HermesDesktop" title text below the icon
try:
    # Try a system font
    title_font = ImageFont.truetype("arial.ttf", 72)
    subtitle_font = ImageFont.truetype("arial.ttf", 32)
except Exception:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()

title = "HermesDesktop"
subtitle = "Open-Source AI Agent Desktop App"

# Draw title (centered)
bbox = draw.textbbox((0, 0), title, font=title_font)
tw = bbox[2] - bbox[0]
draw.text(((1200 - tw) // 2, 420), title, fill=(255, 255, 255), font=title_font)

# Draw subtitle (centered)
bbox2 = draw.textbbox((0, 0), subtitle, font=subtitle_font)
sw = bbox2[2] - bbox2[0]
draw.text(((1200 - sw) // 2, 510), subtitle, fill=(180, 180, 200), font=subtitle_font)

og_path = os.path.join(PUBLIC, "og-image.png")
og.save(og_path, "PNG", optimize=True)
print(f"Saved {og_path} (1200x630)")

# --- 4. site.webmanifest (just data, will write JSON below) ---
print("\nDone generating all assets.")
