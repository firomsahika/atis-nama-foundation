interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export const Button = ({ children, variant = 'primary', className = '' }: ButtonProps) => {
  const baseStyles = "px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center gap-2 group";
  const variants = {
    primary: "bg-primary text-on-primary hover:bg-opacity-90",
    secondary: "bg-secondary text-on-secondary hover:opacity-90",
    outline: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};