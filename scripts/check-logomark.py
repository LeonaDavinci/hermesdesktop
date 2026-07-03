"""检查 logo-mark.png 的实际像素分布。"""
import numpy as np
from PIL import Image

img = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-mark.png")
print(f"Mode: {img.mode}, size: {img.size}")
arr = np.array(img)
print(f"Array shape: {arr.shape}")

# 透明像素数
if arr.shape[2] == 4:
    alpha = arr[..., 3]
    print(f"Alpha: min={alpha.min()}, max={alpha.max()}, mean={alpha.mean():.1f}")
    print(f"  fully transparent: {(alpha == 0).sum()}")
    print(f"  fully opaque: {(alpha == 255).sum()}")
    print(f"  partial: {((alpha > 0) & (alpha < 255)).sum()}")
    # 找非透明区域的边界
    nz_rows = np.where(alpha.sum(axis=1) > 0)[0]
    nz_cols = np.where(alpha.sum(axis=0) > 0)[0]
    if len(nz_rows):
        print(f"  non-transparent rows: y={nz_rows.min()}..{nz_rows.max()}")
        print(f"  non-transparent cols: x={nz_cols.min()}..{nz_cols.max()}")

# RGB 颜色
if arr.shape[2] >= 3:
    # 找最显眼的颜色
    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    print(f"  R range: {r.min()}..{r.max()}, mean={r.mean():.1f}")
    print(f"  G range: {g.min()}..{g.max()}, mean={g.mean():.1f}")
    print(f"  B range: {b.min()}..{b.max()}, mean={b.mean():.1f}")
