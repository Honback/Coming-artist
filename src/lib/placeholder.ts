/**
 * Generates a placeholder image URL based on specified parameters.
 *
 * @param width Width of the placeholder image in pixels
 * @param height Height of the placeholder image in pixels
 * @param text Text to display on the placeholder image
 * @param bgColor Background color (hex without #)
 * @param textColor Text color (hex without #)
 * @returns URL string for the placeholder image
 */
export function getPlaceholderImage(
  width = 800,
  height = 600,
  text = 'Placeholder Image',
  bgColor = 'e2e8f0',
  textColor = '64748b'
): string {
  // Encode the text for URL
  const encodedText = encodeURIComponent(text);

  // Return the placeholder image URL
  return `https://via.placeholder.com/${width}x${height}/${bgColor}/${textColor}?text=${encodedText}`;
}

/**
 * Creates background styling for a div with a placeholder image or color.
 *
 * @param type 'image' for placeholder image, 'color' for background color
 * @param options Additional options for the placeholder
 * @returns CSS string for background styling
 */
export function getPlaceholderBackground(
  type: 'image' | 'color' = 'image',
  options: {
    width?: number;
    height?: number;
    text?: string;
    bgColor?: string;
    textColor?: string;
  } = {}
): string {
  if (type === 'image') {
    const {
      width = 800,
      height = 600,
      text = 'Placeholder Image',
      bgColor = 'e2e8f0',
      textColor = '64748b'
    } = options;

    const imageUrl = getPlaceholderImage(width, height, text, bgColor, textColor);
    return `background-image: url('${imageUrl}'); background-size: cover; background-position: center;`;
  }

  const { bgColor = 'e2e8f0' } = options;
  return `background-color: #${bgColor};`;
}
