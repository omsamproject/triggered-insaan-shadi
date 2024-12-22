import cv2
import numpy as np

def remove_black_pixels(image_path, output_path):
    # Read the image
    image = cv2.imread(image_path, cv2.IMREAD_UNCHANGED)

    # If the image doesn't have an alpha channel, add one
    if image.shape[2] != 4:
        b, g, r = cv2.split(image)
        alpha = np.ones(b.shape, dtype=b.dtype) * 255  # Fully opaque
        image = cv2.merge((b, g, r, alpha))

    # Define the black color range
    lower_black = np.array([0, 0, 0, 0])  # Minimum black
    upper_black = np.array([0, 0, 0, 255])  # Maximum black

    # Create a mask for black pixels
    black_mask = cv2.inRange(image[:, :, :3], lower_black[:3], upper_black[:3])

    # Set black pixels to fully transparent
    image[black_mask > 0] = (0, 0, 0, 0)

    # Save the output image
    cv2.imwrite(output_path, image)
    print(f"Image with black pixels removed saved to: {output_path}")

# Example usage
input_image = "1.png"  # Replace with your input image path
output_image = "output.png"  # Replace with your desired output path
remove_black_pixels(input_image, output_image)
