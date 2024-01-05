'use client';
import { createStyles } from '@mantine/core';
import FooterWebResponsive from './webComponent/footerWebResponsive';
import FooterMobileResponsive from './mobileComponent/footerMobileResponsive';

const useStyles = createStyles((theme) => ({}));

export function FooterResponsive(props: any) {
    const { classes } = useStyles();
    const { data } = props;

    return (
        <>
            <FooterWebResponsive data={data} />
            <FooterMobileResponsive data={data} />
        </>
    );
}
export default FooterResponsive;
