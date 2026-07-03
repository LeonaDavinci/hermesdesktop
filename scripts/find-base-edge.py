"""找到底座最后一行黑色像素。"""
import numpy as np
from PIL import Image

src = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-source.jpg")
arr = np.array(src.convert("L"))

# 在 x=572..1343 范围内，找最后一行 row_sum > 50 的位置
icon_arr = arr[:, 572:1344]
row_sum = (icon_arr < 200).sum(axis=1)

# 找所有 row_sum > 50 的位置
nz = np.where(row_sum > 50)[0]
print(f"Content y range: {nz.min()}..{nz.max()}")

# 详细看 y=1050..1080
print("\n=== y=1050..1080 ===")
for y in range(1050, 1080):
    print(f"  y={y}: row_sum={row_sum[y]}")
