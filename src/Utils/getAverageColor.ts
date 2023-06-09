export function getAverageColor(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject('Could not get 2D context');
        return;
      }

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      let r = 0,
        g = 0,
        b = 0;

      for (let i = 0; i < data.length; i += 4) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }

      const pixels = data.length / 4;
      const avgR = Math.round(r / pixels);
      const avgG = Math.round(g / pixels);
      const avgB = Math.round(b / pixels);

      resolve(`rgb(${avgR}, ${avgG}, ${avgB})`);
    };

    img.onerror = () => {
      reject('Could not load image');
    };
  });
}

export function adjustBrightness(
  rgbString: string,
  topLimit: number,
  lightenUp?: boolean
): string {
  // Convert RGB string to RGB array
  const rgb = rgbString
    .substring(4, rgbString.length - 1)
    .split(',')
    .map(Number);

  // Convert RGB to HSB
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let h = 0;
  let s = 0;
  let v = max;
  if (delta !== 0) {
    s = delta / max;
    if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h *= 60;
    if (h < 0) {
      h += 360;
    }
  }

  // topLimit brightness to 75%
  v = lightenUp ? Math.max(0.3, v) : Math.min(v, topLimit);

  // Convert modified HSB to RGB
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r1 = 0;
  let g1 = 0;
  let b1 = 0;
  if (h >= 0 && h < 60) {
    r1 = c;
    g1 = x;
    b1 = 0;
  } else if (h >= 60 && h < 120) {
    r1 = x;
    g1 = c;
    b1 = 0;
  } else if (h >= 120 && h < 180) {
    r1 = 0;
    g1 = c;
    b1 = x;
  } else if (h >= 180 && h < 240) {
    r1 = 0;
    g1 = x;
    b1 = c;
  } else if (h >= 240 && h < 300) {
    r1 = x;
    g1 = 0;
    b1 = c;
  } else if (h >= 300 && h < 360) {
    r1 = c;
    g1 = 0;
    b1 = x;
  }
  const r2 = Math.round((r1 + m) * 255);
  const g2 = Math.round((g1 + m) * 255);
  const b2 = Math.round((b1 + m) * 255);

  // Convert RGB array to RGB string
  const rgbString2 = `rgb(${r2},${g2},${b2})`;

  // Return modified RGB string
  return rgbString2;
}
