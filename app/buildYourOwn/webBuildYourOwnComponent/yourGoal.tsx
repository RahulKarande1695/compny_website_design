'use client';
import { Avatar, Button, Card, Checkbox, Group, SimpleGrid, Text, Title, createStyles } from '@mantine/core';
import { useState, useEffect, useContext } from 'react';

import { ImageAvtar } from './imageAvtar';
import GlobalData from '@/app/context/context';
import SliderBar from './sliderBar';
import ServicesSummary from '../webServicesSummary/serviceSummary';
import SubModal from './subModal';
const useStyles = createStyles((theme) => ({}));
const YourGoal = (props: any) => {
    const { setCheckBoxData, checkBoxData, flag, setFlag, servicessFlag, setServicessFlag }: any =
        useContext(GlobalData);
    const { sourceData, name } = props;
    const { classes } = useStyles();

    const [value, setValue] = useState(0);

    useEffect(() => {
        setCheckBoxData([...sourceData]);
    }, [sourceData]);
    const [preferenceCount, setPreferenceCount] = useState<any>(() => {
        let count = 0;

        sourceData?.map((item: any) => {
            if (item.checked === true) {
                count = count + 1;
            }
        });

        return count;
    });

    useEffect(() => {
        let count = 0;

        checkBoxData?.map((item: any) => {
            if (item.checked === true) {
                count = count + 1;
            }
        });

        setPreferenceCount(count);
    }, [checkBoxData]);

    return (
        <>
            <div className="goalsYourBox">
                <Title className="goalsYourBoxTitle">Select your goals {name}</Title>
                <div className="yourGoalGrid">
                    <SimpleGrid
                        cols={sourceData.length / 2}
                        spacing="lg"
                        breakpoints={[
                            { maxWidth: 'md', cols: 3, spacing: 'md' },
                            { maxWidth: 'sm', cols: 2, spacing: 'sm' },
                            { maxWidth: 'xs', cols: 1, spacing: 'sm' },
                        ]}
                        style={{ marginLeft: `${-value}%`, transition: 'all 10s easeOut' }}
                        className="yourGoalSimpleGrid"
                    >
                        {checkBoxData?.map((item: any, index: any) => (
                            <Card
                                key={index}
                                shadow="sm"
                                padding="lg"
                                radius="md"
                                withBorder
                                id={item.id}
                                className={
                                    item.checked ? 'active_card yourGoalCarditem' : 'deactive_card yourGoalCarditem'
                                }
                            >
                                <div className="cardGroupSection">
                                    <Group position="apart" mt="md" mb="xs" className="cardGroup">
                                        <Text className="cardGroupText">{item.title}</Text>
                                        <Checkbox
                                            className="cardGroupCheckbox"
                                            size={17}
                                            radius={3}
                                            checked={item.checked}
                                            onClick={() => {
                                                let data = { ...item, checked: !item.checked };
                                                let newData = checkBoxData.map((element: any, elementIndex: any) => {
                                                    if (element.title === data.title) {
                                                        return data;
                                                    } else {
                                                        return element;
                                                    }
                                                });

                                                let count = newData.filter((item: any) => {
                                                    if (item.checked !== false) return item;
                                                });

                                                setPreferenceCount(count.length);
                                                setCheckBoxData(newData);
                                            }}
                                        />
                                    </Group>
                                    <Card.Section className="cardSection">
                                        <ImageAvtar childNumber={index} colorFill={item.checked ? 'black' : 'white'} />
                                    </Card.Section>
                                    <Text size="sm" color="dimmed" className="cardGroupitem">
                                        {item.text}
                                    </Text>
                                </div>
                                <span className="act"></span>
                            </Card>
                        ))}
                    </SimpleGrid>
                </div>
                <div className="servicesBox">
                    <div className="servicesBoxLeft">
                        <SliderBar setValue={setValue} />
                    </div>
                    <div className="servicesBoxRight">
                        <button className="buttonServices" onClick={() => setFlag(true)}>
                            <span>{preferenceCount}</span>{' '}
                            <small className="serviceBoxButtonText">View Selected Services</small>
                        </button>
                    </div>
                </div>
            </div>
            <div className={servicessFlag ? 'activeServices servicesSummary' : 'deactiveServices servicesSummary'}>
                {<ServicesSummary setServicessFlag={setServicessFlag} />}
            </div>
        </>
    );
};

export default YourGoal;
