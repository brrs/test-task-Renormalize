import { useState } from "react";

type CustomSelectProps = {
    options: number[];
    value: number;
    onChange: (value: number) => void
}

export function CustomSelect({ options, value, onChange }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: number) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between gap-1 h-8 w-auto rounded-md appearance-none px-2
                bg-page-size-selector dark:bg-dark-page-size-selector"
            >
                {value || 'Select an option'}
                <svg className="fill-page-size-selector-icon dark:fill-dark-page-size-selector-icon" width="8" height="9" viewBox="0 0 8 9" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.62351 6.07L1.22551 3.329C0.942505 3.0065 1.17251 2.5 1.60201 2.5H6.39801C6.49413 2.49992 6.58824 2.52754 6.66906 2.57957C6.74989 2.6316 6.814 2.70582 6.85373 2.79335C6.89346 2.88087 6.90711 2.978 6.89306 3.07309C6.87901 3.16818 6.83785 3.2572 6.77451 3.3295L4.37651 6.0695C4.32957 6.1232 4.2717 6.16625 4.20676 6.19574C4.14182 6.22523 4.07133 6.24049 4.00001 6.24049C3.92868 6.24049 3.85819 6.22523 3.79325 6.19574C3.72831 6.16625 3.67044 6.1232 3.62351 6.0695V6.07Z" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute left-0 right-0 mt-2 border rounded-lg shadow-lg z-10
                bg-primary dark:bg-dark-secondary dark:border-hidden">
                    {options.map((option) => (
                        <div
                            key={option}
                            onClick={() => handleSelect(option)}
                            className="flex items-center justify-center cursor-pointer hover:bg-page-size-selector hover:dark:bg-dark-page-size-selector"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
