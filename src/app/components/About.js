// app/components/AboutModal.js

'use client';

import { useState } from 'react';

export default function AboutModal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed top-4 right-4 z-50">
            {/* Botón para abrir el modal */}
            <button
                onClick={toggleModal}
                className="bg-[#60A5FA] text-white size-10 p-2 rounded-full hover:bg-[#3B82F6] transition-colors duration-300 text-sm"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-question-mark" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" stroke="none" /><path d="M8 8a3.5 3 0 0 1 3.5-3h1A3.5 3 0 0 1 16 8a3 3 0 0 1-2 3 3 4 0 0 0-2 4M12 19v.01" /></svg>
            </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 transition-opacity duration-300">
                    <div className="bg-[#1C1C1C] text-white p-6 rounded-lg max-w-xs sm:max-w-sm w-full shadow-xl transform transition-transform duration-300 scale-100">
                        <h2 className="text-2xl font-bold mb-4 text-[#ECE6E6]">Acerca de Coloreto</h2>
                        <p className="text-[#A0AEC0] mb-4 text-sm leading-relaxed">
                            Coloreto es una herramienta para ayudarte a verificar el contraste entre colores, asegurando la accesibilidad en tus diseños de acuerdo con los estándares de <a href='https://www.w3.org/WAI/standards-guidelines/wcag/es' className='text-[#60A5FA] underline' target='_blank' rel='noopener noreferrer'>WCAG</a>.
                        </p>
                        <p className="text-[#A0AEC0] mb-4 text-sm leading-relaxed">
                            El <strong>contrast ratio (CR)</strong> mide la relación entre la luminancia del color más brillante y el más oscuro en una pantalla. Un mayor ratio de contraste mejora la visibilidad y es crucial para el diseño accesible.
                        </p>
                        <p className="text-[#60A5FA] underline mb-4 text-xs">
                            <a href="https://en.wikipedia.org/wiki/Contrast_ratio" target="_blank" rel="noopener noreferrer">
                                Leer más sobre el ratio de contraste
                            </a>
                        </p>
                        <div className="flex justify-between items-center">
                            <p className="text-xs text-gray-400">Desarrollado por <a href="https://instagram.com/qosmo__" target="_blank" rel="noopener noreferrer" className="text-[#60A5FA]">@qosmo__</a></p>
                            <button
                                onClick={toggleModal}
                                className="text-white underline hover:bg-white hover:text-black py-2 px-2 rounded-[10px] transition-colors duration-300 text-sm"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
