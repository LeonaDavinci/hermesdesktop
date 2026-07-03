"""最简单方式：取出 screen + base 的合并区域，存为图。"""
import numpy as np
from PIL import Image

src = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-source.jpg")
arr = np.array(src.convert("L"))

# 找完整的"laptop"内容（屏幕 + 底座），不包含文字
# 屏幕: y=510..1015, 底座: y=1016..1061
# 总范围: y=510..1061
laptop = src.crop((550, 500, 1380, 1080))  # 加点 padding
print(f"Laptop crop: {laptop.size}")

# 也用 numpy 验证最终裁剪区域的内容
sub = arr[500:1080, 550:1380]
mask = sub < 200
print(f"Mask coverage: {mask.sum() / mask.size * 100:.1f}%")

# 检查 y=1015..1060 范围内（即底座部分）的黑色像素
base_only = sub[515:561, :]  # 绝对 y=1015..1061
base_mask = base_only < 200
print(f"Base area dark pixels: {base_mask.sum()}")
print(f"Base area total pixels: {base_mask.size}")
print(f"Base density: {base_mask.sum() / base_mask.size * 100:.1f}%")

laptop.save(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\FINAL-laptop.png")
print("Saved FINAL-laptop.png")
