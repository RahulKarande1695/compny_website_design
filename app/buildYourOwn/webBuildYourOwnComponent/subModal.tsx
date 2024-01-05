'use client';
import GlobalData from '@/app/context/context';
import { Avatar, Button, Card, Checkbox, Group, SimpleGrid, Text, Title, createStyles } from '@mantine/core';
import { useState, useEffect, useContext } from 'react';
const SubModal = (props: any) => {
    const {
        setContextFlag,
        serviceSuccesFlag,
        setserviceSuccesFlag,
        checkBoxData,
        setCheckBoxData,
        flag,
        setFlag,
        servicessFlag,
        setServicessFlag,
    }: any = useContext(GlobalData);
    const subModalData = checkBoxData;
    const [sourceData, setSourceData] = useState<any>([]);
    useEffect(() => {
        setSourceData([...checkBoxData]);
    }, [checkBoxData]);
    // const { subModalData, setFlag, setCheckBoxData, sourceData, setServicessFlag } = props;
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        let output = subModalData.filter((itemOfFilter: any) => {
            if (itemOfFilter.checked !== false) {
                return { ...itemOfFilter };
            }
        });
        setData(output);
    }, [subModalData]);
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
            <Title className='SubModalContainerTitle'>Added Services</Title>
            <div className="subModalinnerContainer">
                {data?.map((item: any, indexOfItemany: any) => (
                    <div
                        key={indexOfItemany + 1 * 23}
                        id={`addedservices-${indexOfItemany}}`}
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
                                    key={index + 1 * 24}
                                    id={`addedservicesaprt-${index}}`}
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
                <Button
                    className="SubModalbottomButton"
                    onClick={() => {
                        setserviceSuccesFlag(!serviceSuccesFlag);
                        setServicessFlag(true);
                    }}
                >
                   View Summary
                </Button>
            </Group>
        </div>
    );
};
export default SubModal;
