import React from 'react';
import { Text } from '@mantine/core';

import sosaPosition from '../sosa/sosaPosition';
import IndividualLink from './IndividualLink';

const IndividualStar = ({ individual }) => {
    const ancestors = individual.star_ancestors
        .filter((star_ancestor) => star_ancestor !== 0)
        .map((star_ancestor) => (
            <React.Fragment key={star_ancestor.ancestor_id}>
                <IndividualLink individual={star_ancestor.ancestor} /> ({sosaPosition(star_ancestor.sosa)})
            </React.Fragment>
        ));

    if (!ancestors.length) {
        return null;
    }

    const ancestorString = ancestors.length > 1 ? (
        <>
            {ancestors.slice(0, -1).map((ancestor, id) => (
                <React.Fragment key={id}>
                    {ancestor}
                    {id < ancestors.length - 2 && ', de '}
                </React.Fragment>
            ))}
            {ancestors.length > 1 && ' et de '}
            {ancestors.slice(-1)}
        </>
    ) : (
        ancestors[0]
    );

    return (
        <>
            <Text fz="xs" fw={700} c="dimmed">
                <i>
                    {individual.gender === 102 ? 'Descendante de ' : 'Descendant de '}
                    {ancestorString}
                </i>
            </Text>
        </>
    );
};

export default IndividualStar;
