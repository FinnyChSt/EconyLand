import { ButtonElement } from "./Button.styledComponents";

interface ButtonProps {
    text: string;
    onClick: () => void;
    buttonType: 'primary' | 'secondary';
    }

function Button ({ text, onClick, buttonType }: ButtonProps) {
    return (
        <ButtonElement onClick={onClick} buttonType={buttonType}>
            {text}
        </ButtonElement>
    );

}

export default Button;