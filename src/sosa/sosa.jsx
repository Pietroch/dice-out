import React, { useState } from "react";
import { TextInput, Button, Text } from "@mantine/core";
import sosaPosition from "./sosaPosition";

const Sosa = () => {
    const [inputValue, setInputValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedValue(inputValue);
        setIsSubmitted(true);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextInput
                    label="Entrez un nombre"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                />
                <Button type="submit">Soumettre</Button>
            </form>
            {isSubmitted && (
                <>
                    <Text>Valeur saisie : {submittedValue}</Text>
                    <Text>
                        {sosaPosition(submittedValue)}
                    </Text>
                </>
            )}
        </>
    );
};

export default Sosa;
