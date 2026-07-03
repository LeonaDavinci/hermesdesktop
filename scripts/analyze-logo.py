"""详细分析 logo 源图结构。"""
import numpy as np
from PIL import Image

src_path = r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-source.jpg"
img = Image.open(src_path).convert("RGB")
gray = np.array(img.convert("L"))
H, W = gray.shape

# 二值化：黑色前景（更严格）
mask = (gray < 100).astype(np.uint8)
row_sum = mask.sum(axis=1)

# 详细打印 row_sum，找所有的空隙
print("=== All empty-row gaps (length >= 10) ===")
gaps = []
in_gap = False
gap_start = 0
for y in range(H):
    if row_sum[y] <= 3:
        if not in_gap:
            gap_start = y
            in_gap = True
    else:
        if in_gap:
            gaps.append((gap_start, y - 1, y - gap_start))
            in_gap = False
if in_gap:
    gaps.append((gap_start, H - 1, H - gap_start))

# 只看内容区 y=400..1500
content_gaps = [g for g in gaps if g[0] >= 400 and g[1] <= 1500 and g[2] >= 10]
for s, e, l in content_gaps:
    print(f"  y={s}..{e} (length {l})")

# 在主 gap (y=1062..1109) 处分割
# icon: y < 1062
# text: y >= 1110
icon_mask = mask.copy()
icon_mask[1062:, :] = 0
text_mask = mask.copy()
text_mask[:1110, :] = 0

icon_cols = np.where(icon_mask.sum(axis=0) > 0)[0]
icon_rows = np.where(icon_mask.sum(axis=1) > 0)[0]
text_cols = np.where(text_mask.sum(axis=0) > 0)[0]
text_rows = np.where(text_mask.sum(axis=1) > 0)[0]

print(f"\n=== Icon region (laptop shape) ===")
if len(icon_rows) > 0:
    print(f"  x: {icon_cols.min()} .. {icon_cols.max()}  (width {icon_cols.max() - icon_cols.min() + 1})")
    print(f"  y: {icon_rows.min()} .. {icon_rows.max()}  (height {icon_rows.max() - icon_rows.min() + 1})")
    print(f"  aspect ratio (w/h): {(icon_cols.max() - icon_cols.min() + 1) / (icon_rows.max() - icon_rows.min() + 1):.3f}")

print(f"\n=== Text region (HermesDesktop) ===")
if len(text_rows) > 0:
    print(f"  x: {text_cols.min()} .. {text_cols.max()}  (width {text_cols.max() - text_cols.min() + 1})")
    print(f"  y: {text_rows.min()} .. {text_rows.max()}  (height {text_rows.max() - text_rows.min() + 1})")

# 检查 icon 区域中是否有"豆包AI生成"水印
# 水印颜色较浅（灰色），用更宽松的阈值检测
print("\n=== Watermark detection in full image (50-200 gray pixels) ===")
watermark_mask = (gray >= 80) & (gray <= 200)
# 只在右上或右下角找
wm_rows = np.where(watermark_mask.sum(axis=1) > 5)[0]
if len(wm_rows) > 0:
    print(f"  gray pixels rows: y={wm_rows.min()}..{wm_rows.max()}")
    wm_cols = np.where(watermark_mask.sum(axis=0) > 5)[0]
    if len(wm_cols) > 0:
        print(f"  gray pixels cols: x={wm_cols.min()}..{wm_cols.max()}")
        # 看右下角
        corner_mask = watermark_mask.copy()
        corner_mask[:H//2, :] = 0
        corner_mask[:, :W//2] = 0
        cwm = corner_mask.sum()
        print(f"  bottom-right corner gray pixels: {cwm}")
