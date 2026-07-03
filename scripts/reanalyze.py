"""重新精确分析 logo 源图 — 用更宽松的阈值找底座。"""
import numpy as np
from PIL import Image

src = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-source.jpg")
arr = np.array(src.convert("L"))
H, W = arr.shape

# 用更宽松的阈值（深色 < 200）
mask = (arr < 200).astype(np.uint8)
row_sum = mask.sum(axis=1)

# 详细打印 y=480..1500
print("=== Row darkness (y=480..1500, every 5 rows) ===")
for y in range(480, 1500, 5):
    if y < H:
        bar = "#" * min(int(row_sum[y] / 15), 80)
        print(f"y={y:4d}: {row_sum[y]:5d} {bar}")

# 找所有 gap（rowsum < 5）
print("\n=== Empty-row gaps (length >= 5) in y=400..1500 ===")
in_gap = False
for y in range(400, 1500):
    if row_sum[y] <= 3:
        if not in_gap:
            start = y
            in_gap = True
    else:
        if in_gap:
            print(f"  y={start}..{y-1} (length {y - start})")
            in_gap = False
if in_gap:
    print(f"  y={start}..1499 (length {1500 - start})")

# 列方向投影 col_sum — 看完整 icon + base 的左右边界
print("\n=== Column projection in y=400..1100 (icon+base region) ===")
icon_mask = mask.copy()
icon_mask[:400, :] = 0
icon_mask[1100:, :] = 0
col_sum = icon_mask.sum(axis=0)
nonzero_cols = np.where(col_sum > 0)[0]
print(f"  x range: {nonzero_cols.min()}..{nonzero_cols.max()}")
