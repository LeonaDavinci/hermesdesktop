"""
Regenerate logo.png with proper alpha handling.
The original JPG has anti-aliased edges — we need to keep them semi-transparent
but ensure the core black/dark pixels stay fully opaque.
"""
from PIL import Image
import os

PUBLIC = r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public"
SRC = os.path.join(PUBLIC, "logo-source.jpg")

# Open source as RGB
src = Image.open(SRC).convert("RGB")
W, H = src.size

# Create a new RGBA image with proper alpha
# Strategy: use luminance to determine alpha
# White (255) -> transparent, Black (0) -> opaque
import numpy as np
arr = np.array(src)  # shape (H, W, 3)

# Compute "darkness" - 0 for white, 1 for black
# Use minimum channel value as darkness indicator
darkness = 1.0 - (arr.min(axis=2) / 255.0)  # 0..1

# Convert to alpha (0..255)
alpha = (darkness * 255).astype(np.uint8)

# Make the foreground pure black (so it looks crisp)
rgb_out = np.zeros_like(arr)
out = np.dstack([rgb_out, alpha])

# Save
out_img = Image.fromarray(out, mode="RGBA")
out_path = os.path.join(PUBLIC, "logo.png")
out_img.save(out_path, "PNG", optimize=True)
print(f"Saved {out_path}")

# Also redo the logo-mark with this same approach
mark_src = src.crop((520, 280, 1400, 1080))
m_arr = np.array(mark_src)
m_dark = 1.0 - (m_arr.min(axis=2) / 255.0)
m_alpha = (m_dark * 255).astype(np.uint8)
m_out = np.dstack([np.zeros_like(m_arr), m_alpha])
m_img = Image.fromarray(m_out, mode="RGBA")

# Make it square
mw, mh = m_img.size
side = max(mw, mh)
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
square.paste(m_img, ((side - mw) // 2, (side - mh) // 2))
mark_path = os.path.join(PUBLIC, "logo-mark.png")
square.save(mark_path, "PNG", optimize=True)
print(f"Saved {mark_path}")

# White version (for use on dark backgrounds)
# Flip the alpha — black parts become white, white becomes transparent
w_arr = arr.copy()
# Find dark pixels and make them white
mask = m_dark > 0.5  # binary mask of "is foreground"
# For each pixel, if it's a foreground pixel, set RGB to white
white_rgb = np.zeros_like(m_arr)
# Convert: wherever dark>0.5 in mark, set RGB to 255
white_rgb[mask] = [255, 255, 255]
white_rgb[~mask] = [0, 0, 0]
# Same alpha as before
w_out = np.dstack([white_rgb, m_alpha])
w_img = Image.fromarray(w_out, mode="RGBA")
w_square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
w_square.paste(w_img, ((side - mw) // 2, (side - mh) // 2))
mark_white_path = os.path.join(PUBLIC, "logo-mark-white.png")
w_square.save(mark_white_path, "PNG", optimize=True)
print(f"Saved {mark_white_path}")

print("Done.")
