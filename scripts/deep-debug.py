"""最详细地检查 y=1010..1070 范围的实际像素。"""
import numpy as np
from PIL import Image

src = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\logo-source.jpg")
arr = np.array(src.convert("L"))

# 打印 y=1010..1070 的逐行实际内容
print("=== y=1010..1075: dark pixel count and x positions ===")
for y in range(1010, 1076):
    row = arr[y]
    dark = (row < 100).sum()
    if dark > 0:
        # 找最深的位置
        positions = np.where(row < 100)[0]
        if len(positions):
            print(f"  y={y}: dark={dark}, first x={positions[0]}, last x={positions[-1]}")

# 也检查屏幕底部 (y=1000..1018) 是什么
print("\n=== y=1000..1018: dark pixels ===")
for y in range(1000, 1018):
    row = arr[y]
    dark = (row < 100).sum()
    if dark > 0:
        positions = np.where(row < 100)[0]
        print(f"  y={y}: dark={dark}, first x={positions[0]}, last x={positions[-1]}")

# 把 y=900..1100 这一段存图
section = src.crop((400, 900, 1500, 1100))
section.save(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\SECTION-900-1100.png")
print(f"\nSaved section: {section.size}")
