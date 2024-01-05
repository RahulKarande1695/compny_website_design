'use client'
import {
    createStyles,
} from '@mantine/core';
import TeamBlockMobile from './mobileComponent/teamBlockMobile';
import TeamBlockWeb from './webComponent/teamBlockWeb';
const useStyles = createStyles((theme) => ({
    control: {
        marginTop: `calc(${theme.spacing.xl} * 1.5)`,

        [theme.fn.smallerThan('sm')]: {
            width: '100%',
        },
    },
}));
export const TeamBlock = () => {
    const { classes } = useStyles();
    return (
         <>
        <TeamBlockWeb />
         <TeamBlockMobile />
         </>
    );
};
export default TeamBlock;
