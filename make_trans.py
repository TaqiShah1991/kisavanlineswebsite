from PIL import Image
import sys

def remove_black_bg(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()

        newData = []
        for item in datas:
            # Check if nearly black
            if item[0] < 15 and item[1] < 15 and item[2] < 15:
                # Transparent
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        img.save(output_path, "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")

remove_black_bg("public/actual_logo.jpg", "public/actual_logo.png")
