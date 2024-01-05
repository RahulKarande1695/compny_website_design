'use client';
import { Button, Flex, Grid, createStyles, Tabs, Title } from '@mantine/core';

import { IconMoon } from '@/app/assets/iconamoon';
import { TablerExternal } from '@/app/assets/tablerExternal';
import MobHardware from './mobHardware';
import MobCloud from './mobCloud';
import MobApplication from './mobApplication';
import { HardWareChip } from '@/app/assets/hardwareChip';
import { CloudChip } from '@/app/assets/cloudChip';
import { ApplicationChip } from '@/app/assets/applicationChip';
import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { useState } from 'react';
const useStyles = createStyles((theme) => ({}));
const MobServicesSummary = (props:any) => {
    const {setFlag} = props
    const { classes } = useStyles();
    const [activeTab, setActiveTab] = useState<string | null>('Hardware');
    return (
        <div className="mobile_service_summary">
            <Title style={{ fontSize: '24px' }}>Service Summary</Title>
            <Tabs defaultValue="Hardware" value={activeTab} onTabChange={setActiveTab}>
                <Tabs.List style={{ display: 'flex', justifyContent: 'center', width: '104%', margin: '0 auto' }}>
                    <Tabs.Tab
                        icon={<HardWareChip />}
                        className={activeTab === 'Hardware' ? 'activeSummarytab' : 'deactiveSummarytab'}
                        value="Hardware"
                    >
                        Hardware
                    </Tabs.Tab>
                    <Tabs.Tab
                        icon={<CloudChip />}
                        className={activeTab === 'Cloud' ? 'activeSummarytab' : 'deactiveSummarytab'}
                        value="Cloud"
                    >
                        Cloud
                    </Tabs.Tab>
                    <Tabs.Tab
                        icon={<ApplicationChip />}
                        className={activeTab === 'Application' ? 'activeSummarytab' : 'deactiveSummarytab'}
                        value="Application"
                    >
                        Application
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="Hardware">
                    <MobHardware />
                </Tabs.Panel>

                <Tabs.Panel value="Cloud" className='MobCloud' >
                    <MobCloud />
                </Tabs.Panel>

                <Tabs.Panel value="Application">
                    <MobApplication />
                </Tabs.Panel>
            </Tabs>

            <Grid style={{ gap: '0', margin: '0 auto',width:'90%'  }}>
                <Grid.Col span={3}>
                    <Button  variant="outline" style={{borderColor:"#e62c4c",borderRadius:'10px' , height:'56px', width:'56px'}} onClick={()=>setFlag(false)}>
                        <IconMoon />
                    </Button>
                </Grid.Col>

                <Grid.Col span={5}>
                    <Button color="#e62c4c" w={240} className="summaryButton">
                        Submit Preferences
                    </Button>
                </Grid.Col>
            </Grid>
        </div>
    );
};
export default MobServicesSummary;
