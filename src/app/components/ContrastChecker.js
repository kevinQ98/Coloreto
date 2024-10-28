// app/components/ContrastChecker.js

'use client';

import { useState, useEffect } from 'react';
import ColorInput from './ColorInput';
import ContrastResult from './ContrastResult';
import PreviewBox from './PreviewBox';
import { getContrastRatio } from '../utils/colorUtils';
import { colors } from '../data/colors';

export default function ContrastChecker() {
    const [textColor, setTextColor] = useState('#00ff00');
    const [bgColor, setBgColor] = useState('#000000');
    const [contrastRatio, setContrastRatio] = useState(7);
    const [accessibilityLevel, setAccessibilityLevel] = useState('AAA (Accesible)');
    const [explanation, setExplanation] = useState('El contraste es excelente para cualquier tamaño de texto.');
    // Estados para manejar si el color está bloqueado
    const [textLocked, setTextLocked] = useState(false);
    const [bgLocked, setBgLocked] = useState(false);

    // Calcular el ratio de contraste y nivel de accesibilidad
    useEffect(() => {
        const ratio = getContrastRatio(textColor, bgColor);
        setContrastRatio(ratio);

        if (ratio >= 7) {
            setAccessibilityLevel('AAA (Accesible)');
            setExplanation('El contraste es excelente para cualquier tamaño de texto.');
        } else if (ratio >= 4.5) {
            setAccessibilityLevel('AA (Accesible para texto normal)');
            setExplanation('El contraste es adecuado para texto normal. Ideal para interfaces.');
        } else if (ratio >= 3) {
            setAccessibilityLevel('AA (Accesible para texto grande)');
            setExplanation('El contraste es suficiente solo para texto grande (mayor a 18px).');
        } else {
            setAccessibilityLevel('No accesible');
            setExplanation('El contraste es insuficiente y no es recomendable para legibilidad.');
        }
    }, [textColor, bgColor]);

    // Función para intercambiar colores
    const swapColors = () => {
        setTextColor(bgColor);
        setBgColor(textColor);
    };

    // Función para cambiar a un color aleatorio
    const randomizeColor = (setColor, locked) => {
        if (!locked) {
            const randomColor = colors[Math.floor(Math.random() * colors.length)].value;
            setColor(randomColor);
        }
    };

    // Función para obtener un color aleatorio
    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)].value;
    }

    // Función para cambiar a un color aleatorio los dos campos, y si hay alguno bloqueado solo cambia el que no está bloqueado
    const randomizeAllColors = () => {
        if (!textLocked) {
            setTextColor(getRandomColor());
        }

        if (!bgLocked) {
            setBgColor(getRandomColor());
        }
    }

    return (
        <>
            {/* Vista previa */}
            <PreviewBox textColor={textColor} bgColor={bgColor} />
            {/* Inputs de colores */}
            <div className="w-full flex flex-col md:flex-row max-w-md relative md:max-w-xl items-center mx-auto px-4 gap-[15px]">
                {/* Botón para suffle */}
                <button
                    className="size-[25px] rounded-full absolute -top-3 right-5 hover:scale-105 transition-all duration-200"
                    onClick={randomizeAllColors}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" stroke="none" /><path d="m18 4 3 3-3 3M18 20l3-3-3-3" /><path d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5M21 7h-5a4.978 4.978 0 0 0-3 1m-4 8a4.984 4.984 0 0 1-3 1H3" /></svg>
                </button>

                <ColorInput
                    label="Color de Texto (HEX)"
                    color={textColor}
                    setColor={setTextColor}
                    borderColor="#4ADE80"
                    lockColor={textLocked}
                    toggleLock={() => setTextLocked(!textLocked)} // Agregar la funcionalidad de bloquear
                    randomize={() => randomizeColor(setTextColor, textLocked)} // Funcionalidad aleatoria
                />

                {/* Botón para intercambiar colores */}
                <button onClick={swapColors} className="size-6 md:size-8 md:rotate-90 md:mt-6 hover:scale-105 transition-all duration-200">
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g clipPath="url(#a)" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.334 4v24M13.334 8l-4-4-4 4M26.666 24l-4 4-4-4M22.666 28V4" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h32v32H0z" /></clipPath></defs></svg>
                </button>

                <ColorInput
                    label="Color de Fondo (HEX)"
                    color={bgColor}
                    setColor={setBgColor}
                    borderColor="#60A5FA"
                    lockColor={bgLocked}
                    toggleLock={() => setBgLocked(!bgLocked)} // Bloquear fondo
                    randomize={() => randomizeColor(setBgColor, bgLocked)} // Aleatorio
                />
            </div>

            {/* Resultados del contraste */}
            <ContrastResult
                contrastRatio={contrastRatio}
                accessibilityLevel={accessibilityLevel}
                explanation={explanation}
            />
        </>
    );
}
