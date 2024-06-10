import React from 'react';
import { yearDate } from './Date';
import { Link } from 'react-router-dom';

const IndividualLink = ({ individual }) => {
    console.log({ individual })
    return (
        <>
            <Link
                to={{
                    pathname: `/gene/individual/${individual.id}`,
                    state: individual,
                    key: individual.id,
                }}
            >
                {individual.first_names_list} <b>{individual.last_name.name}</b>
                {(() => {
                    let sentence = [];
                    if (individual.birth && individual.birth.date && individual.death && individual.death.date) {
                        sentence.push(` (${yearDate(individual.birth.date)}-${yearDate(individual.death.date)})`);
                    } else if (individual.birth && individual.birth.date && individual.birth.date.year < 1924) {
                        sentence.push(` (${yearDate(individual.birth.date)}-)`);
                    } else if (individual.birth && individual.birth.date) {
                        sentence.push(` (${yearDate(individual.birth.date)})`);
                    } else if (individual.death && individual.death.date) {
                        sentence.push(` (-${yearDate(individual.death.date)})`);
                    } else {
                        sentence.push(``);
                    }             
                    return sentence;
                })()}
            </Link>
        </>
    );
};

export default IndividualLink; 