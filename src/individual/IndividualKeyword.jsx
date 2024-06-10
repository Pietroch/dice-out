import React from 'react';
import { Badge, Group } from '@mantine/core';

const IndividualKeyword = ({ individual }) => {
    return (
        <>
            <Group gap={7} mt={5}>
                {individual.keywords.map((keyword) => (
                    <Badge key={keyword.id}>{keyword.name}</Badge>

                ))}
            </Group>
        </>
    );
};

export default IndividualKeyword; 