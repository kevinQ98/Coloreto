// app/components/ContrastResult.js

'use client';

import { getLevelColor } from '../utils/colorUtils';

export default function ContrastResult({ contrastRatio, accessibilityLevel, explanation }) {
    return (
        <div className="my-6 text-center px-4">
            {contrastRatio && (
                <>
                    <p className="text-[#4ADE80] text-2xl mb-2 font-roboto">
                        Ratio de Contraste: {contrastRatio.toFixed(2)}:1
                    </p>
                    <p className={`text-xl font-roboto ${getLevelColor(accessibilityLevel)}`}>
                        Nivel de Accesibilidad: {accessibilityLevel}
                    </p>
                    <p className="text-base px-2 md:text-md mt-2 font-inter text-[#A0AEC0]">{explanation}</p>
                </>
            )}
        </div>
    );
}
