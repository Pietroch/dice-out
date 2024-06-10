const sosaPosition = (number) => {
    const num = Number(number);
    const parentsMap = {
        2: "père",
        3: "mère",
        4: "grand-père paternel",
        5: "grand-mère paternelle",
        6: "grand-père maternel",
        7: "grand-mère maternelle",
    };

    let parent = num > 7 ? num : parentsMap[num];

    if (num > 7) {
        const generation = Math.floor(Math.log2(num / 2)) + 2;
        const startGeneration = Math.pow(2, generation - 1);
        const endGeneration = Math.pow(2, generation) - 1;
        const isPaternal =
            num >= startGeneration &&
            num <= startGeneration + (endGeneration - startGeneration) / 2;
        parent = `ancêtre ${isPaternal ? "paternel" : "maternel"} à la ${generation}e génération`;
    }

    return (
        <>
            {parent}
        </>
    );
};

export default sosaPosition;
