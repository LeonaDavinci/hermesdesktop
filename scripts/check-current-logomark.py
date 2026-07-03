"""最终诊断：把当前 logo-mark.png 的下半部分单独存出来。"""
import numpy as np
from PIL import Image

img = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-mark.png")
print(f"logo-mark.png: {img.size}, mode: {img.mode}")
arr = np.array(img)
print(f"shape: {arr.shape}, dtype: {arr.dtype}")

# 找 alpha > 0 的区域
alpha = arr[..., 3]
nonzero_rows = np.where(alpha.sum(axis=1) > 0)[0]
nonzero_cols = np.where(alpha.sum(axis=0) > 0)[0]
print(f"Non-transparent y: {nonzero_rows.min()}..{nonzero_rows.max()}")
print(f"Non-transparent x: {nonzero_cols.min()}..{nonzero_cols.max()}")

# 看每行 alpha 总和
print("\n=== Row alpha sum (every 30 rows) ===")
row_alpha = alpha.sum(axis=1)
for y in range(0, arr.shape[0], 30):
    print(f"  y={y}: alpha_sum={row_alpha[y]}")

# 把下半部分存图（看是否有底座）
bottom = img.crop((0, 600, 880, 880))
bottom.save(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-mark-BOTTOM.png")
print(f"\nSaved bottom: {bottom.size}")
