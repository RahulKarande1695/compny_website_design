import dynamic from 'next/dynamic';

const YourGoal = dynamic(() => import('./yourGoal'));

import { Center, SimpleGrid, Title, Text, Image, createStyles } from '@mantine/core';
import { industryProccedData, sourceData } from './utils';
import { useContext, useState } from 'react';
import ServicesSummary from '../webServicesSummary/serviceSummary';
import GlobalData from '@/app/context/context';
const useStyles = createStyles((theme) => ({}));
const IndustryProceed = () => {
    const { classes } = useStyles();
    const { contextFlag, serviceSuccesFlag }: any = useContext(GlobalData);
    const [activeGoal, setActiveGoal] = useState(false);
    const [dataReference, setDataReference] = useState([]);
    const [name, setName] = useState('');

    return (
        <>
            <div className="industryProceedmain web_industry_proceed">
                <div
                    className={
                        activeGoal ? ' activeGoal industryinnerProceedmain' : 'industryinnerProceedmain deactiveGoal'
                    }
                >
                    <div className="industryProceed">
                        <Title>Select an industry to proceed</Title>
                        <SimpleGrid
                            cols={5}
                            spacing="lg"
                            breakpoints={[
                                { maxWidth: '62rem', cols: 3, spacing: 'md' },
                                { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                                { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                            ]}
                            className="industrySimpleGrid"
                        >
                            {industryProccedData?.map((item: any, indexOfitem: any) => (
                                <div
                                    className="industryitemGrid"
                                    key={indexOfitem + 1 * 21}
                                    id={`industryproceed-${indexOfitem}}`}
                                >
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
                                    <Text size="sm" className="textItem">
                                        {item.text}
                                    </Text>
                                </div>
                            ))}
                        </SimpleGrid>
                    </div>

                    <div className="YourGoalBox">
                        <YourGoal sourceData={dataReference} name={name} />
                    </div>
                </div>
            </div>
          
        </>
    );
};
export default IndustryProceed;
