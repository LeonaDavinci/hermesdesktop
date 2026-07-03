"""强制重新生成 logo-mark.png + 调试版（带红框标注底座位置）。"""
import numpy as np
from PIL import Image, ImageDraw

# 加载源图
src = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-source.jpg")

# 完整 laptop 区域
ICON_X1, ICON_Y1, ICON_X2, ICON_Y2 = 572, 510, 1344, 1062  # 加 1px 完整覆盖
icon = src.crop((ICON_X1, ICON_Y1, ICON_X2, ICON_Y2))
print(f"Icon crop: {icon.size}")

# 把底座位置用红框标出 (rel_y=510..552, rel_x=0..772)
debug_img = icon.convert("RGBA").copy()
draw = ImageDraw.Draw(debug_img)
# 底座是 rel_y=510..552 (abs y=1020..1062)
draw.rectangle((0, 510, 771, 551), outline=(255, 0, 0, 255), width=5)
debug_img.save(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\DEBUG-MARKED.png")
print("Saved DEBUG-MARKED.png")

# 也单独存底座
base = src.crop((ICON_X1, 1010, ICON_X2, 1062))
base.save(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\DEBUG-BASE-ONLY.png")
print(f"Base only: {base.size}")
