"""重新生成 HermesDesktop 橙色品牌资产。

不修改源图 logo-source.jpg，只读取并按区域裁剪 + 重染色。

输出到 public/：
  - logo-mark.png          (方形 icon，含完整 laptop：屏幕 + 底座)
  - logo-mark@2x.png       (2x 高清版)
  - logo-mark-white.png    (白色版，用于 OG 图等深色背景)
  - logo.png               (完整 logo：icon + HermesDesktop 文字)
  - favicon.ico            (多分辨率)
  - favicon-16x16.png
  - favicon-32x32.png
  - favicon-48x48.png
  - apple-touch-icon.png   (180x180, 橙色背景)
  - android-chrome-192x192.png
  - android-chrome-512x512.png
  - og-image.png           (1200x630, 深色背景 + 白色 icon + 标题)
"""
import os
import io
import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next"
PUB = os.path.join(ROOT, "public")
SRC = os.path.join(PUB, "logo-source.jpg")

# === 品牌色 ===
ORANGE = (249, 115, 22, 255)        # #F97316 - Tailwind orange-500
ORANGE_HEX = "#F97316"

# 源图坐标（来自 analyze-logo.py 的精确测量）
ICON_X1, ICON_Y1, ICON_X2, ICON_Y2 = 572, 511, 1343, 1061  # 完整 laptop (屏幕 + 底座)
TEXT_X1, TEXT_Y1, TEXT_X2, TEXT_Y2 = 354, 1110, 1300, 1437  # 文字（避开右下角水印）

print(f"Source: {SRC}")
print(f"Publishing to: {PUB}")


def load_source():
    return Image.open(SRC).convert("RGB")


def crop_region(img, x1, y1, x2, y2):
    return img.crop((x1, y1, x2 + 1, y2 + 1))


def recolor_to_orange(cropped_rgb, fg_color=ORANGE, white_threshold=235):
    """把 RGB 图像的非白色像素重染为指定颜色，生成带 alpha 的 RGBA。
    
    - 白色（> white_threshold）→ 完全透明
    - 黑色/灰色 → 完全不透明的目标色（按原始 darkness 调整 alpha）
    """
    arr = np.array(cropped_rgb).astype(np.float32)
    # darkness: 0=纯白, 1=纯黑
    darkness = 1.0 - (arr.min(axis=2) / 255.0)
    # 二值化：darkness > 0.35 视为前景
    alpha = np.clip(darkness * 1.6, 0, 1)  # 适当提升对比度
    
    rgba = np.zeros((arr.shape[0], arr.shape[1], 4), dtype=np.uint8)
    rgba[..., 0] = fg_color[0]
    rgba[..., 1] = fg_color[1]
    rgba[..., 2] = fg_color[2]
    rgba[..., 3] = (alpha * 255).astype(np.uint8)
    return Image.fromarray(rgba, "RGBA")


def make_square(rgba, size, padding_ratio=0.08):
    """把任意 RGBA 居中嵌入到 size x size 的透明画布上。"""
    w, h = rgba.size
    target = size
    # 留 padding
    avail = int(target * (1 - 2 * padding_ratio))
    scale = min(avail / w, avail / h)
    new_w = max(1, int(round(w * scale)))
    new_h = max(1, int(round(h * scale)))
    resized = rgba.resize((new_w, new_h), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    ox = (size - new_w) // 2
    oy = (size - new_h) // 2
    canvas.paste(resized, (ox, oy), resized)
    return canvas


def make_square_with_bg(rgba, size, bg_color, padding_ratio=0.08, radius_ratio=0.22):
    """方形带圆角背景的版本。"""
    w, h = rgba.size
    avail = int(size * (1 - 2 * padding_ratio))
    scale = min(avail / w, avail / h)
    new_w = max(1, int(round(w * scale)))
    new_h = max(1, int(round(h * scale)))
    resized = rgba.resize((new_w, new_h), Image.LANCZOS)
    
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    # 圆角矩形背景
    mask = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(mask)
    radius = int(size * radius_ratio)
    d.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=255)
    bg_layer = Image.new("RGBA", (size, size), bg_color)
    canvas.paste(bg_layer, (0, 0), mask)
    
    ox = (size - new_w) // 2
    oy = (size - new_h) // 2
    canvas.paste(resized, (ox, oy), resized)
    return canvas


# === 1. 加载并裁剪 ===
print("\n[1] Loading and cropping source...")
src = load_source()
icon_rgb = crop_region(src, ICON_X1, ICON_Y1, ICON_X2, ICON_Y2)
text_rgb = crop_region(src, TEXT_X1, TEXT_Y1, TEXT_X2, TEXT_Y2)
print(f"  icon crop: {icon_rgb.size}")
print(f"  text crop: {text_rgb.size}")

# === 2. 重新着色为橙色 ===
print("\n[2] Recoloring to orange...")
icon_orange = recolor_to_orange(icon_rgb, ORANGE)
text_orange = recolor_to_orange(text_rgb, ORANGE)

# 白色版（用于 OG 图等深色背景）
icon_white = recolor_to_orange(icon_rgb, (255, 255, 255, 255))

# === 3. 生成 logo-mark.png (880x880, 透明背景) ===
print("\n[3] Generating logo-mark.png (880x880)...")
logo_mark = make_square(icon_orange, 880, padding_ratio=0.05)
logo_mark.save(os.path.join(PUB, "logo-mark.png"), "PNG", optimize=True)
print(f"  saved: logo-mark.png  size={os.path.getsize(os.path.join(PUB, 'logo-mark.png'))}")

# === 4. 生成 logo.png (icon + 文字，水平排列) ===
print("\n[4] Generating logo.png (icon + text)...")
# 把 icon 和 text 横向拼接
icon_w, icon_h = icon_orange.size
text_w, text_h = text_orange.size
# 缩放：让 icon 高度与 text 高度一致
target_h = icon_h
text_scaled_w = int(text_w * target_h / text_h)
text_scaled = text_orange.resize((text_scaled_w, target_h), Image.LANCZOS)

gap = int(icon_w * 0.25)
total_w = icon_w + gap + text_scaled_w
total_h = target_h
combined = Image.new("RGBA", (total_w, total_h), (0, 0, 0, 0))
combined.paste(icon_orange, (0, 0), icon_orange)
combined.paste(text_scaled, (icon_w + gap, 0), text_scaled)
# 缩放成合适尺寸（例如高 256）
final_h = 256
scale = final_h / total_h
final_w = int(total_w * scale)
logo = combined.resize((final_w, final_h), Image.LANCZOS)
logo.save(os.path.join(PUB, "logo.png"), "PNG", optimize=True)
print(f"  saved: logo.png  {logo.size}")

# === 5. 生成 logo-mark-white.png ===
print("\n[5] Generating logo-mark-white.png...")
logo_mark_white = make_square(icon_white, 880, padding_ratio=0.05)
logo_mark_white.save(os.path.join(PUB, "logo-mark-white.png"), "PNG", optimize=True)
print(f"  saved: logo-mark-white.png")

# === 6. 生成 favicon 套件 ===
print("\n[6] Generating favicon suite...")

def save_favicon(size, filename, bg=None):
    if bg is not None:
        img = make_square_with_bg(icon_white, size, bg_color=bg, padding_ratio=0.08, radius_ratio=0.22)
    else:
        img = make_square(icon_white, size, padding_ratio=0.05)
    path = os.path.join(PUB, filename)
    img.convert("RGBA").save(path, "PNG", optimize=True)
    print(f"  saved: {filename} ({size}x{size})")

save_favicon(16, "favicon-16x16.png")
save_favicon(32, "favicon-32x32.png")
save_favicon(48, "favicon-48x48.png")

# apple-touch-icon 180x180 橙色背景
save_favicon(180, "apple-touch-icon.png", bg=(249, 115, 22, 255))
# android-chrome 192/512 橙色背景
save_favicon(192, "android-chrome-192x192.png", bg=(249, 115, 22, 255))
save_favicon(512, "android-chrome-512x512.png", bg=(249, 115, 22, 255))

# favicon.ico 多分辨率
print("\n[7] Generating favicon.ico (multi-res)...")
ico_sizes = [16, 32, 48]
ico_images = []
for s in ico_sizes:
    img = make_square(icon_white, s, padding_ratio=0.05).convert("RGBA")
    ico_images.append(img)
ico_path = os.path.join(PUB, "favicon.ico")
ico_images[0].save(ico_path, format="ICO", sizes=[(s, s) for s in ico_sizes], append_images=ico_images[1:])
print(f"  saved: favicon.ico (sizes: {ico_sizes})")

# === 7. 生成 og-image.png (1200x630) ===
print("\n[8] Generating og-image.png (1200x630)...")
og_w, og_h = 1200, 630
og = Image.new("RGB", (og_w, og_h), (15, 23, 42))  # slate-900 深色背景
# 加一个橙色光晕（径向渐变模拟）
glow = Image.new("RGBA", (og_w, og_h), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
cx, cy = 200, og_h // 2
for r in range(400, 0, -10):
    alpha = max(0, int(80 * (1 - r / 400)))
    gd.ellipse((cx - r, cy - r, cx + r, cy + r), fill=(249, 115, 22, alpha))
og = Image.alpha_composite(og.convert("RGBA"), glow).convert("RGB")

# 左侧放白色 icon
icon_og = make_square(icon_white, 380, padding_ratio=0.05)
og.paste(icon_og, (80, (og_h - 380) // 2), icon_og)

# 右侧文字
draw = ImageDraw.Draw(og)
# 尝试找一个系统字体；如失败用默认
def get_font(size, bold=False):
    candidates = [
        "C:\\Windows\\Fonts\\segoeuib.ttf" if bold else "C:\\Windows\\Fonts\\segoeui.ttf",
        "C:\\Windows\\Fonts\\arialbd.ttf" if bold else "C:\\Windows\\Fonts\\arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for c in candidates:
        if os.path.exists(c):
            try:
                return ImageFont.truetype(c, size)
            except Exception:
                continue
    return ImageFont.load_default()

font_title = get_font(78, bold=True)
font_sub = get_font(34, bold=False)
font_brand = get_font(46, bold=True)

text_x = 80 + 380 + 60
draw.text((text_x, 175), "HermesDesktop", fill=(255, 255, 255), font=font_brand)
draw.text((text_x, 245), "Run AI Agents on Your Desktop", fill=(249, 115, 22), font=font_title)
draw.text((text_x, 345), "Open-source. Local-first. Cross-platform.", fill=(203, 213, 225), font=font_sub)
draw.text((text_x, 395), "Install with: iex (irm install.ps1)", fill=(148, 163, 184), font=font_sub)

og.save(os.path.join(PUB, "og-image.png"), "PNG", optimize=True)
print(f"  saved: og-image.png")

print("\n=== All assets regenerated ===")
print("Summary of public folder:")
for f in sorted(os.listdir(PUB)):
    p = os.path.join(PUB, f)
    if os.path.isfile(p):
        size_kb = os.path.getsize(p) / 1024
        print(f"  {f:32s}  {size_kb:8.1f} KB")
