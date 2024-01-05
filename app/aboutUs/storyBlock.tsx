import { createStyles, Title, Text } from '@mantine/core';
const useStyles = createStyles((theme) => ({}));
export const StoryBlock = () => {
    const { classes } = useStyles();
    return (
        <div className="ourStory">
            <Title>Our Story</Title>
            <Text className="ourStoryText">
                <p>
                    Intellicar started in 2015 with a clear vision: to harness the power of data through IoT to
                    revolutionize telematics. With a couple of laptops, endless cups of coffee, and a burning desire to
                    make a difference, our founders set out to bring their vision to life. Fast forward to today,
                    Intellicar has grown from a fledgling startup into a leading provider of IoT and fleet management
                    solutions. With over 100K installations across 100+ cities, we ve made a significant impact in
                    industries ranging from logistics and transportation to finance and insurance.
                </p>
                <p>
                At Intellicar, we
                    have built around innovation. We love crafting solutions that make sense and approach our work with
                    logic no fluff! . Our team has built a no-BS approach to problem solving and as a team of nice
                    guys, we have Kindness is at the heart of our culture. This makes us easy to work with. We re
                    excited to welcome individuals who share our values and are ready to contribute to our journey of
                    making a positive impact. born.
                </p>
            </Text>
        </div>
    );
};
export default StoryBlock;
