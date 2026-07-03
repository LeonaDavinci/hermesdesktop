"""
Regenerate OG image and create inverted icon variants for use on dark backgrounds.
"""
from PIL import Image, ImageDraw, ImageFont, ImageOps
import os

PUBLIC = r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public"
mark = Image.open(os.path.join(PUBLIC, "logo-mark.png")).convert("RGBA")
full = Image.open(os.path.join(PUBLIC, "logo.png")).convert("RGBA")

# --- Inverted (white) icon for use on dark backgrounds ---
mark_white = mark.copy()
# Find dark pixels and convert them to white
data = mark_white.getdata()
new_data = []
for item in data:
    if item[0] < 80 and item[1] < 80 and item[2] < 80 and item[3] > 200:
        new_data.append((255, 255, 255, 255))
    else:
        new_data.append(item)
mark_white.putdata(new_data)
mark_white_path = os.path.join(PUBLIC, "logo-mark-white.png")
mark_white.save(mark_white_path, "PNG", optimize=True)
print(f"Saved {mark_white_path}")

# --- Better OG image with white icon and gradient background ---
og = Image.new("RGB", (1200, 630), color=(12, 12, 22))
draw = ImageDraw.Draw(og)

# Draw a richer gradient
for y in range(630):
    # Top: deep purple, bottom: darker
    r = int(35 + (15 - 35) * (y / 630))
    g = int(20 + (10 - 20) * (y / 630))
    b = int(60 + (25 - 60) * (y / 630))
    draw.line([(0, y), (1200, y)], fill=(r, g, b))

# Add a subtle radial glow near center
for radius in range(300, 0, -10):
    alpha = int(20 * (1 - radius / 300))
    if alpha > 0:
        draw.ellipse(
            [(600 - radius, 250 - radius // 2), (600 + radius, 250 + radius // 2)],
            fill=(80 + alpha, 40, 120),
        )

# Paste the white icon (much more visible on dark bg)
icon_size = 260
icon_resized = mark_white.resize((icon_size, icon_size), Image.LANCZOS)
icon_x = (1200 - icon_size) // 2
icon_y = 90
og.paste(icon_resized, (icon_x, icon_y), icon_resized)

# Text
try:
    title_font = ImageFont.truetype("arial.ttf", 76)
    subtitle_font = ImageFont.truetype("arial.ttf", 30)
    domain_font = ImageFont.truetype("arial.ttf", 26)
except Exception:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    domain_font = ImageFont.load_default()

title = "HermesDesktop"
subtitle = "Open-Source AI Agent Desktop App"
domain = "www.hermesdesktop.app"

# Draw title with gradient feel (just white)
bbox = draw.textbbox((0, 0), title, font=title_font)
tw = bbox[2] - bbox[0]
draw.text(((1200 - tw) // 2, 400), title, fill=(255, 255, 255), font=title_font)

# Draw subtitle
bbox2 = draw.textbbox((0, 0), subtitle, font=subtitle_font)
sw = bbox2[2] - bbox2[0]
draw.text(((1200 - sw) // 2, 500), subtitle, fill=(190, 200, 220), font=subtitle_font)

# Domain pill
bbox3 = draw.textbbox((0, 0), domain, font=domain_font)
dw = bbox3[2] - bbox3[0]
dh = bbox3[3] - bbox3[1]
pill_w = dw + 40
pill_h = dh + 20
pill_x = (1200 - pill_w) // 2
pill_y = 555
draw.rounded_rectangle(
    [(pill_x, pill_y), (pill_x + pill_w, pill_y + pill_h)],
    radius=20,
    fill=(60, 40, 90),
)
draw.text((pill_x + 20, pill_y + 6), domain, fill=(200, 180, 255), font=domain_font)

og_path = os.path.join(PUBLIC, "og-image.png")
og.save(og_path, "PNG", optimize=True)
print(f"Saved {og_path} (1200x630)")

# --- Also create white variants of favicons for potential use ---
# But the favicon needs to be visible in BOTH light/dark browser tabs
# So the original (black on white bg) is better for the .ico

# --- Create a round/rounded version for app icon feel ---
# Optional: rounded square for apple-touch-icon
print("Done.")
