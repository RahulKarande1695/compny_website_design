'use client';
import { SimpleGrid, Title, Text, Image, createStyles } from '@mantine/core';
import { useContext, useState } from 'react';
import GlobalData from '@/app/context/context';
import { industryProccedDataMobile, sourceData } from '../webBuildYourOwnComponent/utils';
import MobileYourGoal from './mobileYourGoal';
import MobServicesSummary from '../mobileServicesSummary/mobServiceSummary';
const useStyles = createStyles((theme) => ({}));
const MobileIndustryProceed = () => {
    const { classes } = useStyles();
    const { serviceSuccesFlag }: any = useContext(GlobalData);
    const [activeGoal, setActiveGoal] = useState(false);
    const [dataReference, setDataReference] = useState([]);
    const [name, setName] = useState('');
    return (
        <>
            <div className="industryProceedmain mobile_industry_proceed">
                <div
                    className={
                        activeGoal ? ' activeGoal industryinnerProceedmain' : 'industryinnerProceedmain deactiveGoal'
                    }
                >
                    <div className="industryProceed">
                        <Title>Select an industry to proceed</Title>
                        <SimpleGrid
                            cols={1}
                            spacing="lg"
                            breakpoints={[
                                { maxWidth: '62rem', cols: 3, spacing: 'md' },
                                { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                                { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                            ]}
                            className="industrySimpleGrid"
                        >
                            {industryProccedDataMobile?.map((item, indexOfitem) => (
                                <div id={item.id} className="industryitemGrid" key={indexOfitem}>
                                    <Image
                                        maw={240}
                                        mx="auto"
                                        radius="md"
                                        src={item.img}
                                        alt="Random image"
                                        className="imageBox"
                                        onClick={() => {
                                            setActiveGoal(!activeGoal);
                                            setDataReference(sourceData[item?.text]);
                                            setName(item?.text);
                                        }}
                                    />
                                    {/* <Text size="sm" className="textItem">
                                        {item.text}
                                    </Text> */}
                                </div>
                            ))}
                        </SimpleGrid>
                    </div>

                    <div className="YourGoalBox">
                        <MobileYourGoal sourceData={dataReference} name={name} />
                    </div>
                </div>
            </div>
            {/* <div>{serviceSuccesFlag ? <MobServicesSummary /> : <></>}</div> */}
        </>
    );
};
export default MobileIndustryProceed;
