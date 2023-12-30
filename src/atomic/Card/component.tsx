import React, { FC } from "react";
import { Text, Button, Container } from "..";

interface CardProps {
    background: string;
    padding?: number;
}

const Card: FC<CardProps> = ({ background, padding = 20 }) => {
    return (
        <Container background={background} padding={padding}>
            <div className="text-only">
                <Text text="Title" fontSize={20} />
                <Text text="Subtitle" fontSize={15} />
            </div>
            <div className="buttons-only">
                <Button size="small" variant="contained" color="primary">Learn more</Button>
            </div>
        </Container>
    );
};

export default Card;
