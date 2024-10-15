// app/utils/colorUtils.js

export function getLuminance(hex) {
    const cleanedHex = hex.startsWith('#') ? hex.slice(1) : hex;

    if (!/^[0-9A-Fa-f]{6}$/.test(cleanedHex)) {
        return 1; // Valor por defecto si el HEX no es válido
    }

    const rgb = cleanedHex.match(/\w\w/g).map((x) => parseInt(x, 16) / 255);
    const [r, g, b] = rgb.map((v) =>
        v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    );

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function getContrastRatio(hex1, hex2) {
    const lum1 = getLuminance(hex1);
    const lum2 = getLuminance(hex2);

    const brightest = Math.max(lum1, lum2);
    const darkest = Math.min(lum1, lum2);

    return (brightest + 0.05) / (darkest + 0.05);
}

export function getLevelColor(level) {
    switch (level) {
        case 'AAA (Accesible)':
            return 'text-green-400';
        case 'AA (Accesible para texto normal)':
            return 'text-yellow-300';
        case 'AA (Accesible para texto grande)':
            return 'text-orange-400';
        case 'No accesible':
            return 'text-red-400';
        default:
            return 'text-gray-400';
    }
}
