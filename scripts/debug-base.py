"""debug: 直接在源图坐标 (550, 500) -> (1380, 1080) 范围内检查底座像素。"""
import numpy as np
from PIL import Image

src = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-source.jpg")
arr = np.array(src.convert("L"))

# 我裁剪的范围 (550, 500, 1380, 1080) 转换为绝对坐标
# 区域是 abs y=500..1080
# base 在 abs y=1015..1061 → 相对 rel_y=515..561

# 看 rel y=515..561 范围内的实际像素值
print("=== rel y=510..580: pixel value histogram (sample col x=400) ===")
# x=400 (rel) 对应 abs x=950
for rel_y in range(510, 580, 5):
    abs_y = 500 + rel_y
    if abs_y < arr.shape[0]:
        row = arr[abs_y, 550:1380]
        dark = (row < 100).sum()
        mid = ((row >= 100) & (row < 200)).sum()
        light = (row >= 200).sum()
        print(f"  rel_y={rel_y:3d} (abs_y={abs_y}): dark={dark:4d} mid={mid:4d} light={light:4d}")

# 把 base 部分单独存图
print("\n=== Saving base only as image ===")
base_only = src.crop((550, 1000, 1380, 1080))  # 底座 + 一点点 padding
base_only.save(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\check3.png")
print(f"Base only: {base_only.size}")
