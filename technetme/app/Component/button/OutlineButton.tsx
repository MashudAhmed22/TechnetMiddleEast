type OutlineButtonProps = {
    text: string;
    onClick?: () => void;
    className?: string;
};

const OutlineButton: React.FC<OutlineButtonProps> = ({ text, onClick, className}) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 bg-white hover:bg-blue-600 text-blue-600 hover:text-white text-sm font-medium rounded-sm border border-blue-600 cursor-pointer transition-colors duration-200 ${className}`}>
            {text}
        </button>
    );
};

export default OutlineButton;