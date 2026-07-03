"""验证裁剪区域是否包含完整 laptop。"""
from PIL import Image
import numpy as np

src = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-source.jpg")
arr = np.array(src.convert("L"))
print(f"Source size: {src.size}")

# 重新验证：icon 区域
ICON_X1, ICON_Y1, ICON_X2, ICON_Y2 = 572, 511, 1343, 1061
icon_region = arr[ICON_Y1:ICON_Y2+1, ICON_X1:ICON_X2+1]
print(f"Icon region shape: {icon_region.shape}")

# 逐行打印 darkness 比例
print("\n=== Row darkness in icon region (every 20 rows) ===")
for y in range(0, icon_region.shape[0], 20):
    dark = (icon_region[y] < 100).sum()
    pct = dark / icon_region.shape[1] * 100
    bar = "#" * int(pct)
    print(f"  rel y={y:3d} (abs y={ICON_Y1+y}): {pct:5.1f}% {bar}")

# 把裁剪结果保存为临时图以便目视检查
icon_crop = src.crop((ICON_X1, ICON_Y1, ICON_X2+1, ICON_Y2+1))
icon_crop.save(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\_debug-icon-crop.png")
print(f"\nSaved debug crop: public/_debug-icon-crop.png")

# 看看最底部几行是否真的包含底座
print("\n=== Bottom 30 rows darkness ===")
for y in range(icon_region.shape[0] - 30, icon_region.shape[0]):
    dark = (icon_region[y] < 100).sum()
    pct = dark / icon_region.shape[1] * 100
    print(f"  rel y={y:3d}: dark px={dark:4d}  ({pct:5.1f}%)")
