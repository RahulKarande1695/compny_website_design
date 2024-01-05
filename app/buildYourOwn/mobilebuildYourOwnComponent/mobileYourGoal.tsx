'use client';
import { Avatar, Button, Card, Checkbox, Group, SimpleGrid, Text, Title, createStyles } from '@mantine/core';
import { useState, useEffect, useContext } from 'react';
import GlobalData from '@/app/context/context';
import { ImageAvtar } from '../webBuildYourOwnComponent/imageAvtar';
import SliderBar from '../webBuildYourOwnComponent/sliderBar';
import MobServicesSummary from '../mobileServicesSummary/mobServiceSummary';
const useStyles = createStyles((theme) => ({}));
const MobileYourGoal = (props: any) => {
    const { sourceData, name } = props;
    const { classes } = useStyles();
    const [flag, setFlag] = useState(false);
    const [value, setValue] = useState(8);
    const [checkBoxData, setCheckBoxData] = useState<any>([]);
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
                    cols={1}
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
                            key={index + 1 * 15}
                            id={`mobileyourgoal-${index}}`}
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder
                            className={item.checked ? 'active_card yourGoalCarditem' : 'deactive_card yourGoalCarditem'}
                        >
                            <div className="cardGroupSection">
                                <Group position="apart" mt="md" mb="xs" className="cardGroup">
                                    <Text className="cardGroupText">{item.title}</Text>
                                    <Checkbox
                                        className="cardGroupCheckbox"
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
                                    <ImageAvtar className='cardSectionLogo' childNumber={index} colorFill={item.checked ? 'black' : 'white'} />
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
            <div  className={flag?"servicesBox activeBottomServ":"servicesBox deactiveBottomServ"}>
                <div className="servicesBoxLeft">
                    <SliderBar setValue={setValue} />
                </div>
                <div className="servicesBoxRight">
                    <button className="buttonServices" onClick={() => setFlag(!flag)}>
                        <span>{preferenceCount}</span>{' '}
                        <small className="serviceBoxButtonText">View Selected Services</small>
                    </button>
                </div>
            </div>
            
        </div>

        {/* {flag && ( */}  
            <div className={flag?"activeBottom":"deactiveBottom"}>
                <MobServicesSummary setFlag={setFlag}/>
            </div>
        {/* )} */}
        </>
    


    );
};

const MobileSubModal = (props: any) => {
    const { contextFlag, setContextFlag, serviceSuccesFlag, setserviceSuccesFlag }: any = useContext(GlobalData);
    const { subModalData, setFlag, setCheckBoxData, sourceData } = props;
    const [data, setData] = useState<any>(() =>
        subModalData.filter((itemOfFilter: any) => {
            if (itemOfFilter.checked !== false) {
                return { ...itemOfFilter };
            }
        }),
    );

    const filterData = (titleOfItem: any) => {
        let filterData = data?.filter((item: any, index: any) => {
            if (item.title !== titleOfItem) {
                return item;
            }
        });

        setData(filterData);
    };

    return (
        <div className="SubModalContainer">
            <Title>Added Services</Title>
            <div className="subModalinnerContainer">
                {data?.map((item: any, indexOfItemany: any) => (
                    <div
                        key={indexOfItemany + 1 * 16}
                        id={`mobileyourgoal-${indexOfItemany}}`}
                        className="SubModalitemTitle"
                    >
                        <Group position="apart" mt="md" mb="xs" className="SubModalGroupTitle">
                            <Title style={{ color: 'red' }}>{item?.title || 'no data'} </Title>
                            <Avatar
                                className="SubModalGroupTitleimg"
                                src="./fluent_delete-regular.svg"
                                onClick={() => filterData(item?.title)}
                            />
                        </Group>

                        <div id={item?.id}>
                            {item?.list.map((itemN: any, index: any) => (
                                <Group
                                    position="apart"
                                    mt="md"
                                    mb="xs"
                                    className="SubModalitemChilid"
                                    key={index + 1 * 17}
                                    id={`mobileyourgoalavtar-${index}}`}
                                >
                                    <Avatar className="SubModalitemChilidimg" src={itemN?.img} />

                                    <Title>{itemN?.title}</Title>
                                </Group>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Group position="apart" mt="md" mb="xs" className="SubModalbottom">
                <div
                    onClick={() => {
                        setFlag(false);
                        setContextFlag(false);
                        if (data.length === 0) {
                            let newData = sourceData?.map((itemOfdata: any, indexOfdata: any) => {
                                return { ...itemOfdata, checked: false };
                            });

                            setCheckBoxData(newData);
                        } else {
                            let newData: any = [...sourceData];

                            let indexs: any = [];

                            data.map((itemOfData: any, indexOfData: any) => {
                                let index = sourceData?.findIndex((item: any) => item.title === itemOfData.title);

                                indexs.push(index);

                                newData[index] = { ...itemOfData, checked: true };
                            });

                            newData.map((itemOFNewData: any, indexNewData: any) => {
                                let useIndex = indexs.findIndex((value: any) => value === indexNewData);

                                if (useIndex === -1) {
                                    newData[indexNewData] = { ...itemOFNewData, checked: false };
                                }
                            });

                            setCheckBoxData(newData);
                        }
                    }}
                >
                    <Avatar src="./mingcuteEditLine.png" className="SubModalbottomAvatar" />
                </div>
                <Button className="SubModalbottomButton" onClick={() => setserviceSuccesFlag(!serviceSuccesFlag)}>
                    Submit Preferences
                </Button>
            </Group>
        </div>
    );
};
export default MobileYourGoal;
