"""检查底座 (y=1015..1061) 的 x 范围。"""
import numpy as np
from PIL import Image

src = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-source.jpg")
arr = np.array(src.convert("L"))

print("=== y=1010..1064 black x ranges ===")
for y in range(1010, 1065):
    row = arr[y]
    black = np.where(row < 100)[0]
    if len(black) > 0:
        print(f"  y={y}: x={black.min()}..{black.max()}  count={len(black)}")
    else:
        print(f"  y={y}: empty")

# 找包含底座的总 x 范围
print("\n=== x range of base (y=1015..1061) ===")
base = arr[1015:1062, :]
mask = base < 100
nz_cols = np.where(mask.sum(axis=0) > 0)[0]
if len(nz_cols):
    print(f"  base x range: {nz_cols.min()}..{nz_cols.max()}")
    print(f"  base width: {nz_cols.max() - nz_cols.min() + 1}")

# 找包含整个 laptop (screen + base) 的总 y 范围
# 用 col x=500..1450
print("\n=== full content y range, x=500..1450 ===")
icon_arr = arr[:, 500:1450]
mask_full = icon_arr < 200
nz_rows = np.where(mask_full.sum(axis=1) > 0)[0]
print(f"  y range: {nz_rows.min()}..{nz_rows.max()}")
