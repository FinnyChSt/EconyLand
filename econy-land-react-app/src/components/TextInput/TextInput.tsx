import { HTMLInputTypeAttribute } from "react";
import { TextInputContainer, TextInputElement } from "./TextInput.styledComponents";

interface TextInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: HTMLInputTypeAttribute;
    label?: string;
}

function TextInput({ value, onChange, type, label }: TextInputProps) {
    return (<TextInputContainer>
        <label>{label}</label>
        <TextInputElement type={type} value={value} onChange={onChange} />
        </TextInputContainer>
    );
}

export default TextInput;