import { Link } from "react-router-dom";

interface CustomButtonProps {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  additionalClasses?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  to,
  onClick,
  disabled,
  additionalClasses = "",
}) => {
  const baseClasses = `font-semibold rounded-md outline-none py-2 px-4 shadow-sm shadow-blue-600 bg-blue-600 hover:bg-blue-700 active:scale-95 ${additionalClasses}`;

  if (to) {
    return (
      <button className={baseClasses} disabled={disabled}>
        <Link to={to}>{children}</Link>
      </button>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default CustomButton;
