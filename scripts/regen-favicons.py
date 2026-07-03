"""
Regenerate favicon variants from the cleaned-up logo-mark.
The mark is already a clean RGBA square with the laptop icon.
We just need to scale it to various sizes for favicon/manifest.
"""
from PIL import Image
import os

PUBLIC = r"C:\Users\wangj\WorkBuddy\2026-07-02-19-34-30\hermes-next\public"
mark = Image.open(os.path.join(PUBLIC, "logo-mark.png")).convert("RGBA")
mw, mh = mark.size
print(f"Source mark: {mw}x{mh}")

def make_icon(size, background=None):
    """Resize mark to size, optionally with a colored background."""
    icon = mark.resize((size, size), Image.LANCZOS)
    if background is not None:
        bg = Image.new("RGBA", (size, size), background)
        bg.alpha_composite(icon)
        return bg
    return icon

# Generate PNG variants
variants = [
    (16, "favicon-16x16.png"),
    (32, "favicon-32x32.png"),
    (48, "favicon-48x48.png"),
    (180, "apple-touch-icon.png"),
    (192, "android-chrome-192x192.png"),
    (512, "android-chrome-512x512.png"),
]

# For favicons (small sizes), use a white background to ensure visibility
# For larger app icons, use a brand-color background
BRAND = (88, 28, 135, 255)  # deep purple to match the site

for size, name in variants:
    if name.startswith("favicon-"):
        # White background for browser tab visibility
        out = make_icon(size, background=(255, 255, 255, 255))
    else:
        # Brand-color background for app icon
        out = make_icon(size, background=BRAND)
    path = os.path.join(PUBLIC, name)
    out.save(path, "PNG", optimize=True)
    print(f"Saved {path} ({size}x{size})")

# Multi-resolution .ico (always white bg for browser tabs)
ico_sizes = [(16, 16), (32, 32), (48, 48)]
ico_images = [make_icon(s[0], background=(255, 255, 255, 255)) for s in ico_sizes]
ico_path = os.path.join(PUBLIC, "favicon.ico")
ico_images[0].save(
    ico_path,
    format="ICO",
    sizes=ico_sizes,
    append_images=ico_images[1:],
)
print(f"Saved {ico_path} (multi-size: {ico_sizes})")

print("Done.")
