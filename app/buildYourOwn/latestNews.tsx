import { createStyles, Container, Title, Text, Center, SimpleGrid, Image, Button, Overlay } from '@mantine/core';
import { SolarArrowRight } from '../assets/solarArrowRight';
import SlickSlider from '../components/SlickSlider';
const useStyles = createStyles((theme) => ({}));

const images = [
    {
        id: '1',
        img: '/latestnewsone.png',
        title: 'Demystifying Data',
        text: 'How High-Quality Data Drives Efficient Fleet Management',
    },
    {
        id: '2',
        img: '/latestnewstwo.png',
        title: 'Demystifying Data',
        text: 'How High-Quality Data Drives Efficient Fleet Management',
    },
    {
        id: '3',
        img: '/latestnewsthree.png',
        title: 'Demystifying Data',
        text: 'How High-Quality Data Drives Efficient Fleet Management',
    },
];

function LatestNews() {
    const { classes } = useStyles();

    return (
        <div className="latestNewsContainer">
            <div className="latestNewsContainerDiv">
                <Center>
                    <Title className="latestNewsTitle">Latest News</Title>
                </Center>
                <Center>
                    <Text className="latestNewsText">
                        The latest news and information about Intellicar and the future of transportation
                    </Text>
                </Center>
                <div className="mobile_news_slider">
                    <SlickSlider type="imageCard">
                        {' '}
                        {images.map((item, i) => (
                            <div className="card slickCard" key={i}>
                                <div
                                    style={{
                                        background: `linear-gradient(180deg, rgba(21, 21, 21, 0.00) 0%, #151515 100%), url(${item.img}), lightgray 50% / cover no-repeat`,

                                        // background: `url(${item.img})`
                                    }}
                                    className="slickCardNews"
                                >
                                    <div className="news_card_internal">
                                        <Title className="latestNewsTitle1">{item.title}</Title>
                                        <Text className="latestNewsText1">{item.text}</Text>

                                        <Button className="latestNewsButton" rightIcon={<SolarArrowRight />}>
                                            <p>Read More</p>
                                        </Button>
                                    </div>
                                </div>
                                {/* <Overlay className="usecasesOverlay" /> */}
                            </div>
                            // <div id={item.id} key={i} className="latestNewsItem" style={{ background: `url(${item.img})` }}>

                            //     <Title className="latestNewsTitle">{item.title}</Title>
                            //     <Text className="latestNewsText">{item.text}</Text>
                            //     <Button className="latestNewsButton" rightIcon={<SolarArrowRight />}>
                            //         Read More
                            //     </Button>
                            //     <Overlay className="usecasesOverlay" />
                            // </div>
                        ))}
                        {/* <div className="card">Content for Card 1</div>
                <div className="card">Content for Card 2</div>
                <div className="card">Content for Card 3</div> */}
                    </SlickSlider>
                </div>
                <SimpleGrid
                    className="latestNewsImage"
                    cols={3}
                    spacing={45}
                    breakpoints={[
                        { maxWidth: '62rem', cols: 3, spacing: 'md' },
                        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                    ]}
                >
                    {images.map((item: any, i: any) => (
                        <div
                            key={i + 1 * 31}
                            id={`latestnews-${i}}`}
                            className="latestNewsItem"
                            style={{ background: `url(${item.img})` }}
                        >
                            {/* <Image maw={240} mx="auto" radius="md" src={item.img} alt="Random image" /> */}
                            <Title className="latestNewsTitle">{item.title}</Title>
                            <Text className="latestNewsText">{item.text}</Text>
                            <Button className="latestNewsButton" rightIcon={<SolarArrowRight />}>
                                Read More
                            </Button>
                            <Overlay className="usecasesOverlay" />
                        </div>
                    ))}
                </SimpleGrid>
            </div>
        </div>
    );
}
export default LatestNews;
