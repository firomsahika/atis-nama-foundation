import React from 'react';

interface InitiativeCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export const InitiativeCard = ({
  title,
  description,
  category,
  imageUrl,
  imageAlt,
  buttonText = "Support Now",
  onButtonClick
}: InitiativeCardProps) => {
  return (
    <div className="group bg-surface-container-low rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-black/5">
      <div className="h-64 overflow-hidden relative">
        <img
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          src={imageUrl}
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {category}
        </div>
      </div>
      <div className="p-8 space-y-4">
        <h3 className="font-headline text-2xl font-bold text-on-surface">
          {title}
        </h3>
        <p className="text-on-background/70 leading-relaxed line-clamp-3">
          {description}
        </p>
        <button 
          onClick={onButtonClick}
          className="w-full bg-white border border-primary/10 text-primary font-bold py-3 rounded-xl group-hover:bg-secondary group-hover:text-white transition-all shadow-sm"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};