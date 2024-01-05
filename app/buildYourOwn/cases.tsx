import { createStyles, Container, Title, Text, Center, SimpleGrid, Image, Button, Overlay } from '@mantine/core';
import { SolarArrowRight } from '../assets/solarArrowRight';
import { IcRoundSearch } from '../assets/icRoundSearch';
import { MingcuteStarLine } from '../assets/mingcuteStarLine';
import { BellCurve } from '../assets/bellCurve';
import { IcOutlineNotification } from '../assets/icOutlineNotification';
import { MaterialSymbol } from '../assets/materialSymbol';
import { useState } from 'react';
import { banner, casesData, innerData, tabs } from './utils';
const useStyles = createStyles((theme) => ({}));

const Banner = (props: any) => {
    const { list } = props;
    return (
        <div>
            {list.map((item: any, index: any) => (
                <div id={`bannercases-${index}`} className="casesList" key={index + 1 * 7}>
                    <div className="casesSymbol">
                        {index === 0 ? (
                            <IcRoundSearch />
                        ) : index === 1 ? (
                            <MingcuteStarLine />
                        ) : index === 2 ? (
                            <MaterialSymbol />
                        ) : index === 3 ? (
                            <BellCurve />
                        ) : (
                            <IcOutlineNotification />
                        )}
                    </div>
                    <div style={{ flexDirection: 'column' }}>
                        <div className="casesItems">
                            <Title>{item.title}</Title>
                        </div>
                        <Text className="casesItemsText">{item.text && item.text}</Text>
                    </div>
                </div>
            ))}
        </div>
    );
};
function Cases() {
    const { classes } = useStyles();
    const [accessIndex, setAccessIndex] = useState<number>(0);
    return (
        <div className="usecasesContainer">
            <Container className="usecasesCont">
                <Center>
                    <Title>Usecases</Title>
                </Center>
                <Center>
                    <Text className="usecasesTextSubHeading">Ready to adopt solutions for most scenarios</Text>
                </Center>
                <ul>
                    {tabs.map((item: any, index: any) => (
                        <li
                            key={item.id + 1 * 8}
                            id={`cases-${index}`}
                            onClick={() => setAccessIndex(index)}
                            className={index === accessIndex ? 'active' : 'deactive'}
                        >
                            {item.tab}
                        </li>
                    ))}
                </ul>
                <div
                    className={
                        accessIndex === 0
                            ? `one usecasesTabContainer ${accessIndex === 0 ? 'activeUsecase' : 'deactiveUseCase'}`
                            : accessIndex === 1
                            ? `Two usecasesTabContainer ${accessIndex === 1 ? 'activeUsecase' : 'deactiveUseCase'}`
                            : accessIndex === 2
                            ? `Three usecasesTabContainer ${accessIndex === 2 ? 'activeUsecase' : 'deactiveUseCase'}`
                            : `Four usecasesTabContainer ${accessIndex > 2 ? 'activeUsecase' : 'deactiveUseCase'}`
                    }
                >
                    {/* <Overlay className="usecasesOverlay" /> */}
                    <div className="usecasSubContainer">
                        {casesData?.map((itemOfcases: any, indexOfCases: any) => {
                            if (accessIndex === indexOfCases) {
                                return (
                                    <div key={indexOfCases + 1 * 9} id={`casestext-${indexOfCases}`}>
                                        <Text className="usecasesText">{itemOfcases.text}</Text>
                                        <Banner list={itemOfcases.list} />
                                    </div>
                                );
                            }
                        })}
                    </div>
                    <Button rightIcon={<SolarArrowRight />} className="casesButton">
                        <span> Read Case Study </span>
                    </Button>
                </div>
            </Container>
            <div className="bottom_tab">
                <ul>
                    {tabs.map((item: any, index: any) => (
                        <li
                            key={index + 1 * 38}
                            id={`caseslist-${index}`}
                            onClick={() => setAccessIndex(index)}
                            className={index === accessIndex ? 'active' : 'deactive'}
                        >
                            <span></span>
                            {item.tab}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Cases;
