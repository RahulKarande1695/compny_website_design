'use client';
import { Button, Flex, Grid, Title, createStyles } from '@mantine/core';

import Cloud from './cloud';
import Application from './application';
import Hardware from './hardeware';
import { IconMoon } from '@/app/assets/iconamoon';
import { TablerExternal } from '@/app/assets/tablerExternal';
import { ArrowDown } from '@/app/assets/arrowDown';
const useStyles = createStyles((theme) => ({}));
const ServicesSummary = (props: any) => {
    const { setServicessFlag } = props;
    const { classes } = useStyles();
    return (
        <div className="web_service_summary">
            <Title className="goalsYourBoxTitle">Service Summary</Title>
            <Flex
                mih={50}
                gap="md"
                justify="space-between"
                align="flex-start"
                direction="row"
                wrap="nowrap"
                className="serviceSummaryInner"
            >
                <div className="hardwareBox">
                    <Hardware />
                </div>
                <div className="cloudBox">
                    <Cloud />
                </div>
                <div className="applicationBox">
                    <Application />
                </div>
            </Flex>
            <div className='arrowDownBox'>
                <div> <ArrowDown /></div>
                <div> <ArrowDown /></div>
                <div> <ArrowDown /></div>
            </div>
            <div className='buttonBox'>
                <div style={{ display: 'flex', color: '#E62C4C' }} onClick={() => setServicessFlag(false)}>
                    <IconMoon />
                    Go back and edit preferences
                </div>
                <div style={{ display: 'flex', position: 'absolute', right: '2%', bottom: '2%', gap: '10px' }}>
                    <div className='deployButton'>
                        <Button variant="outline" className="deployButton" rightIcon={<TablerExternal />}>
                            Deploy
                        </Button>
                    </div>
                    <div className='submitButton'>
                        <Button className="submitButton">Submit Preferences</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServicesSummary;
