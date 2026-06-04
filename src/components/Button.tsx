interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    onClick?: () => void;
  }
  
  const Button = ({
    children,
    variant = "primary",
    onClick,
  }: ButtonProps) => {
    const styles = {
      primary:
        "bg-gold text-dark hover:bg-gold-light",
  
      secondary:
        "bg-burgundy text-white hover:bg-burgundy-light",
  
      outline:
        "border border-burgundy text-burgundy hover:bg-burgundy hover:text-white",
    };
  
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 rounded-lg font-semibold transition ${styles[variant]}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;