'use client';

import { CheckArrow } from '@/app/assets/Check';
import { ForwardArrow } from '@/app/assets/forwardArrow';
import { allDone, carouselSlideInfo, indicator } from '@/app/utils';
import { Text, TextInput, Title, createStyles } from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
    root: {},
    cnt: {
        paddingLeft: '35vw',
        maxWidth: '100%',
        height: '90vh',
        background: theme.colors.primary,
    },
}));

export const CustomisedCraousel = (props: any) => {
    const { setCloseIndictor, closeIndictor } = props;
    const { classes, cx } = useStyles();
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState(carouselSlideInfo[0]);
    const [details, setDetails] = useState({ name: '', email: '', phone: '' });
    const fillDetails = (event: any) => {
        count === 0
            ? setDetails({ ...details, name: event.currentTarget.value })
            : count === 1
            ? setDetails({ ...details, email: event.currentTarget.value })
            : setDetails({ ...details, phone: event.currentTarget.value });
    };
    return (
        <>
            {carouselSlideInfo.length > count &&
                indicator?.map((item: any, index: any) => (
                    <div
                        className={index <= count ? 'active' : 'deActive'}
                        key={index + 1 * 31}
                        id={`craousel-${index}}`}
                    ></div>
                ))}
            {carouselSlideInfo.length > count ? (
                <div className="craouselform" data-aos="zoom-in-down">
                    <TextInput
                        id={`${info?.id}`}
                        placeholder={info?.placeHolder}
                        label={info?.question}
                        value={count === 0 ? details.name : count === 1 ? details.email : details.phone}
                        onChange={(event) => fillDetails(event)}
                    />
                </div>
            ) : (
                <div>
                    <Title>All Done!</Title>
                    <Text className="rightgridText">Sit back and relax while we take care of the rest</Text>
                    <ul>
                        {allDone?.map((list: any, index: any) => (
                            <li
                                className={index === 0 ? 'act' : list?.name}
                                key={index + 1 * 32}
                                id={`craouselalldone-${index}}`}
                            >
                                <small>{index === 0 ? <CheckArrow /> : list?.id}</small>
                                <span>{list?.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div
                onClick={() => {
                    setInfo(carouselSlideInfo[count + 1]);
                    setCount(count + 1);
                    setCloseIndictor(closeIndictor + 1);
                }}
                className={carouselSlideInfo.length > count ? 'forwardArrow' : ''}
            >
                {carouselSlideInfo.length > count && (
                    <div className="popupArrow">
                        <ForwardArrow />
                        <span></span>
                    </div>
                )}
            </div>
        </>
    );
};
