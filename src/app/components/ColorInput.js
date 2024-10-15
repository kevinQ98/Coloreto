// app/components/ColorInput.js

'use client';

import { useState } from 'react';

export default function ColorInput({ label, color, setColor, borderColor }) {
    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipboard = () => {
        navigator.clipboard.writeText(color).then(() => {
            setCopySuccess('Color copiado!');
            setTimeout(() => setCopySuccess(''), 2000); // Limpiar el mensaje después de 2 segundos
        }).catch(() => {
            setCopySuccess('Error al copiar!');
        });
    };

    return (
        <div className="flex flex-col w-full md:w-60">
            <label className="mb-[10px] text-[#A0AEB5] text-left">{label}</label>
            <div className="bg-[#F2F2F2] flex items-center gap-5 px-3 py-2 rounded-[10px]">
                <div className="flex-1 flex gap-5 items-center">
                    {/*Label Circle pick color */}
                    <label
                        htmlFor={`${label}-picker`}
                        className="w-10 h-10 rounded-full border border-gray-300 shadow-sm transition-transform transform hover:scale-105"
                        style={{ backgroundColor: color }}
                    ></label>

                    <input
                        type="text"
                        value={color}
                        onChange={(e) => {
                            const value = e.target.value.trim();
                            setColor(value);
                        }}
                        className={`w-32 md:w-20 text-[#000000] py-2 bg-transparent transition-all duration-300 ease-in-out`}
                        placeholder="#FFFFFF"
                        maxLength={7}
                    />
                </div>

                {/* Botón para copiar al portapapeles */}
                <button
                    className="size-[32px] hover:scale-105 transition-all duration-200"
                    onClick={copyToClipboard}
                >
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g clipPath="url(#a)" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.334 12.89a3.556 3.556 0 0 1 3.556-3.556h11.554A3.556 3.556 0 0 1 28 12.89v11.555A3.557 3.557 0 0 1 24.444 28H12.89a3.556 3.556 0 0 1-3.556-3.556V12.89Z" /><path d="M5.35 22.316A2.673 2.673 0 0 1 4 20V6.667C4 5.2 5.2 4 6.667 4H20c1 0 1.544.513 2 1.333" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h32v32H0z" /></clipPath></defs></svg>
                </button>
            </div>

            {/* Mostrar mensaje de éxito o error */}
            {copySuccess && (
                <p className="text-green-500 mt-2 text-sm">{copySuccess}</p>
            )}

            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="invisible w-1 h-1"
                id={`${label}-picker`}
            />
        </div>
    );
}