'use client';
import { createStyles, Title } from '@mantine/core';
import { useState } from 'react';
const useStyles = createStyles((theme) => ({}));
const dataOfValues = [
    {
        id: '1',
        title: 'Always Curious',
        text: 'We are about the people who use our products. We listen, we understand, and then we make things that solve real problem. We’re not just here to sell you something. We’re here to make your life easier. And we believe that when we put people first, success naturally follows.',
    },
    {
        id: '2',
        title: 'Customer-First',
        text: 'We are about the people who use our products. We listen, we understand, and then we make things that solve real problem. We’re not just here to sell you something. We’re here to make your life easier. And we believe that when we put people first, success naturally follows.',
    },
    {
        id: '3',
        title: 'Data Nerds with Principles',
        text: 'We are about the people who use our products. We listen, we understand, and then we make things that solve real problem. We’re not just here to sell you something. We’re here to make your life easier. And we believe that when we put people first, success naturally follows.',
    },
];
export const ValuesBlockWeb = () => {
    const { classes } = useStyles();
    const [number, setNumber] = useState(1);
    return (
        <div className="ourCoreValues values_block_web">
            <Title>Our Core Values</Title>
            {dataOfValues?.map((item: any, index: any) => (
                <div
                    className={index === number ? 'customerFirstBox' : 'customerFirstBoxin'}
                    onMouseEnter={() => setNumber(index)}
                    key={index + 1 * 5}
                    id={`valueswebslide-${index}`}
                >
                    <h3>{item.title}</h3>
                    {index === number && (
                        <p>
                            We are about the people who use our products. We listen, we understand, and then we make
                            things that solve real problem. We’re not just here to sell you something. We’re here to
                            make your life easier. And we believe that when we put people first, success naturally
                            follows.
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};
export default ValuesBlockWeb;
