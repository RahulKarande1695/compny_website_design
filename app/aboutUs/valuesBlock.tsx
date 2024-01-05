'use client'
import { createStyles, Title } from '@mantine/core';
import { useState } from 'react';
import ValuesBlockWeb from './webComponent/valuesBlockWeb';
import ValuesBlockMobile from './mobileComponent/valuesBlockMobile';
const useStyles = createStyles((theme) => ({}));

export const ValuesBlock = () => {
    const { classes } = useStyles();
    return (
        <>
            <ValuesBlockWeb />
            <ValuesBlockMobile />
        </>
    );
};
export default ValuesBlock;
