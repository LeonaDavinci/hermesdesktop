"""提取完整 laptop (icon + base) 作为单个图。"""
from PIL import Image
import numpy as np

src = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-source.jpg")
arr = np.array(src.convert("L"))

# 用最宽松的阈值 (深色 < 200) 找完整 laptop
mask = (arr < 200).astype(np.uint8)
# 限制到 x=300..1600
mask[:, :300] = 0
mask[:, 1600:] = 0
# 限制到 y=400..1100
mask[:400, :] = 0
mask[1100:, :] = 0

nz_rows = np.where(mask.sum(axis=1) > 0)[0]
nz_cols = np.where(mask.sum(axis=0) > 0)[0]
print(f"Full laptop region: x={nz_cols.min()}..{nz_cols.max()}, y={nz_rows.min()}..{nz_rows.max()}")

# 提取
x1, x2 = nz_cols.min(), nz_cols.max()
y1, y2 = nz_rows.min(), nz_rows.max()
laptop = src.crop((x1, y1, x2+1, y2+1))
laptop.save(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\_debug-full-laptop.png")
print(f"Saved debug: _debug-full-laptop.png  size={laptop.size}")
