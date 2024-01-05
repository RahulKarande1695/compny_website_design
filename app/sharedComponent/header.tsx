'use client';

import { createStyles, rem } from '@mantine/core';
import HeaderWebResponsive from './webComponent/headerWebResponsive';
import HeaderMobileResponsive from './mobileComponent/headerMobileResponsive';

const useStyles = createStyles((theme) => ({}));

export function HeaderResponsive(props: any) {
    const { classes } = useStyles();

    return (
        <>
            <HeaderWebResponsive />
            <HeaderMobileResponsive />
        </>
    );
}
export default HeaderResponsive;
