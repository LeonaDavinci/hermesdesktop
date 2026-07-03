"""把 debug 图存为可视化版本，加坐标网格。"""
from PIL import Image, ImageDraw

img = Image.open(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\_debug-full-laptop.png").convert("RGB")
draw = ImageDraw.Draw(img)
W, H = img.size
print(f"Image: {W}x{H}")

# 每 50px 画一条参考线
for x in range(0, W, 50):
    draw.line([(x, 0), (x, H)], fill=(255, 0, 0, 100), width=1)
    draw.text((x+2, 2), str(x), fill=(255, 0, 0))
for y in range(0, H, 50):
    draw.line([(0, y), (W, y)], fill=(0, 0, 255, 100), width=1)
    draw.text((2, y+2), str(y), fill=(0, 0, 255))

img.save(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\_debug-full-laptop-grid.png")
print("Saved with grid")

# 也用更小的尺寸生成预览
img.thumbnail((400, 400))
img.save(r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public\_debug-thumbnail.png")
print(f"Saved thumbnail: {img.size}")
