'use client';
import { createStyles, Grid, Title, Text, Image } from '@mantine/core';
import { CustomisedCraousel } from './CustomisedCraousel';
const useStyles = createStyles((theme) => ({
    title: {
        fontFamily: 'bai_jamjuree',
    },
}));

export default function ModalFirstBlock(props: any) {
    const { setCloseIndictor, closeIndictor } = props;
    const { classes } = useStyles();

    return (
        <Grid>
            <Grid.Col span={5} className="leftgrid">
                <Title className={classes.title}>Lets Work Together!</Title>
                <Text fw={700} fz="lg" className="leftgridText">
                    We just need a few details to get in touch with you and figure out the best way forward.
                </Text>
                <div className="rollingImg">
                    <Image src="./logoback.png" width={40} height={40} className={'rolling'} alt="Norway" />
                </div>
            </Grid.Col>
            <Grid.Col span={7} className="rightgrid">
                <CustomisedCraousel closeIndictor={closeIndictor} setCloseIndictor={setCloseIndictor} />
            </Grid.Col>
        </Grid>
    );
}
