"""重做 OG 图：修复文字截断，使用更紧凑的布局。"""
from PIL import Image, ImageDraw, ImageFont
import os

PUB = r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public"
logo_white = Image.open(os.path.join(PUB, "logo-mark-white.png"))

og_w, og_h = 1200, 630

# 深色背景
og = Image.new("RGB", (og_w, og_h), (15, 23, 42))

# 橙色光晕
glow = Image.new("RGBA", (og_w, og_h), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
cx, cy = 240, og_h // 2
for r in range(420, 0, -10):
    alpha = max(0, int(80 * (1 - r / 420)))
    gd.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(249, 115, 22, alpha))
og = Image.alpha_composite(og.convert("RGBA"), glow).convert("RGB")

# 左侧 icon
icon_size = 340
icon = logo_white.resize((icon_size, icon_size), Image.LANCZOS)
og.paste(icon, (90, (og_h - icon_size) // 2), icon)

# 文字
def get_font(size, bold=False):
    candidates = [
        "C:\\Windows\\Fonts\\segoeuib.ttf" if bold else "C:\\Windows\\Fonts\\segoeui.ttf",
        "C:\\Windows\\Fonts\\arialbd.ttf" if bold else "C:\\Windows\\Fonts\\arial.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            try:
                return ImageFont.truetype(c, size)
            except Exception:
                continue
    return ImageFont.load_default()

# 缩短文字，避免截断
font_brand = get_font(40, bold=True)
font_title = get_font(58, bold=True)
font_sub = get_font(28, bold=False)
font_url = get_font(22, bold=False)

draw = ImageDraw.Draw(og)
text_x = 90 + icon_size + 50  # 480

# 验证文字宽度不会超出
def measure(text, font):
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0]

title1 = "Hermes Agent Desktop"
title2 = "Local-First AI Agents"
sub1 = "Open-source. Cross-platform."
sub2 = "Install: iex (irm install.ps1)"

print(f"text_x = {text_x}")
print(f"title1 width: {measure(title1, font_title)}")
print(f"title2 width: {measure(title2, font_title)}")
print(f"sub1 width: {measure(sub1, font_sub)}")
print(f"sub2 width: {measure(sub2, font_sub)}")

# 检查是否会超出右边界 (1200 - 50 padding)
max_right = og_w - 50
for txt, font in [(title1, font_title), (title2, font_title), (sub1, font_sub), (sub2, font_sub)]:
    w = measure(txt, font)
    if text_x + w > max_right:
        print(f"WARNING: '{txt}' exceeds right edge: ends at {text_x + w}, max {max_right}")

# 画文字
y = 140
draw.text((text_x, y), title1, fill=(255, 255, 255), font=font_brand)
y += 60
draw.text((text_x, y), title2, fill=(249, 115, 22), font=font_title)
y += 90
draw.text((text_x, y), sub1, fill=(203, 213, 225), font=font_sub)
y += 45
draw.text((text_x, y), sub2, fill=(148, 163, 184), font=font_sub)
y += 55
# URL
draw.text((text_x, y), "hermesdesktop.app", fill=(249, 115, 22), font=font_url)

og.save(os.path.join(PUB, "og-image.png"), "PNG", optimize=True)
print(f"\nSaved og-image.png: {og.size}")
