import React from "react";

interface IndicatorProps {
    selectedIndex: number;
    onDotButtonClick: (index: number) => void;
    scrollSnaps: [];
}

export const BlogCarouselProgress: React.FC<IndicatorProps> = ({
                                                                   selectedIndex,
                                                                   onDotButtonClick,
                                                                   scrollSnaps,
                                                               }) => {
    if (!scrollSnaps || scrollSnaps.length === 0) {
        return null;
    }

    return (
        <div className="flex items-center mx-2">
            {scrollSnaps.map((_, index) => (
                <div
                    onClick={() => onDotButtonClick(index)}
                    key={index}
                    className={`h-1 mx-1 rounded cursor-pointer transition-all duration-300 ${
                        index === selectedIndex ? "w-6 bg-yellow-500" : "w-4 bg-gray-500"
                    }`}
                />
            ))}
        </div>
    );
};

