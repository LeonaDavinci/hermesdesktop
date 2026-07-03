"""把整个内容区域存为图，验证 laptop 完整结构。"""
from PIL import Image
import numpy as np

src = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-source.jpg")

# 保存大区域 y=300..1500, x=300..1600
big = src.crop((300, 300, 1600, 1500))
big.save(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\_debug-big.png")
print(f"Saved: {big.size}")

# 用 numpy 二值化，看每一行黑色像素的 x 范围
arr = np.array(src.convert("L"))
# 在 y=1000..1110 范围内找黑色像素
print("\n=== y=1000..1100: black pixel x ranges ===")
for y in range(1000, 1110, 5):
    row = arr[y]
    black = np.where(row < 100)[0]
    if len(black) > 0:
        # 找连续区间
        groups = []
        start = black[0]
        prev = black[0]
        for x in black[1:]:
            if x - prev > 5:
                groups.append((start, prev))
                start = x
            prev = x
        groups.append((start, prev))
        print(f"  y={y}: {len(groups)} groups, first={groups[0]}, last={groups[-1]}")
    else:
        print(f"  y={y}: no black")
