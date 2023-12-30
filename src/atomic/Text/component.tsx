import React from "react";

interface TextProps {
    text: string;
    fontSize: number;
}

const Text: React.FC<TextProps> = ({ text, fontSize }) => {
    return (
        <div>
            <p style={{ fontSize }}>{text}</p>
        </div>
    );
};

export default Text;
