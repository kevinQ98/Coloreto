// app/components/PreviewBox.js

'use client';

export default function PreviewBox({ textColor, bgColor }) {
    return (
        <div
            className="w-full md:max-w-md mx-auto mb-[33px] py-[38px] md:py-[48px] md:rounded-[10px]"
            style={{ color: textColor, backgroundColor: bgColor }}
        >
            <p className="text-[48px]">AaBbCcDd</p>
        </div>
    );
}
