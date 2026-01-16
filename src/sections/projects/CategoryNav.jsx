import React from "react";

const CategoryNav = ({ activeCategory, onCategoryChange, categories }) => {
    return (
        <div className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-[1800px] mx-auto px-6 md:px-10 h-20 flex items-center justify-center md:justify-between">

                <span className="text-xs font-mono uppercase tracking-widest text-gray-400 hidden md:block">
                    Filter
                </span>

                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => onCategoryChange(cat.id)}
                            className={`
                px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap
                ${activeCategory === cat.id
                                    ? 'bg-black text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-gray-400 hidden md:block">
                    index: {categories.length}
                </span>
            </div>
        </div>
    );
};

export default CategoryNav;
