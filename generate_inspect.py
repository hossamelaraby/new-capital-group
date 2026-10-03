import os

dir_p = 'public/products_gallery'
files = [f for f in os.listdir(dir_p) if f.startswith('nc-prod-') and f.endswith('.jpg')]
files.sort()

cards = []
for f in files:
    cards.append(f'''
    <div style="background:#1c2833;padding:10px;border-radius:8px;text-align:center;">
        <img src="{f}" style="width:100%;height:220px;object-fit:cover;border-radius:4px;"/>
        <div style="margin-top:8px;font-weight:bold;color:#f39c12;font-size:14px;">{f}</div>
    </div>
    ''')

html_content = f'''<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Products Gallery Visual Inspector</title>
</head>
<body style="background:#0b1720;color:white;font-family:sans-serif;padding:24px;">
    <h1 style="color:#e5a72b;margin-bottom:20px;">New Capital Products Gallery ({len(files)} Images)</h1>
    <div style="display:grid;grid-template-columns:repeat(auto-fill, minmax(240px, 1fr));gap:16px;">
        {''.join(cards)}
    </div>
</body>
</html>
'''

with open(os.path.join(dir_p, 'inspect.html'), 'w', encoding='utf-8') as out:
    out.write(html_content)

print(f"Generated inspect.html with {len(files)} items")
