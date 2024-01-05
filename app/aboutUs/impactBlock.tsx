import { createStyles,Title, Button, Text, Image } from '@mantine/core';
import { ForwardArrow } from '../assets/forwardArrow';
const useStyles = createStyles((theme) => ({}));
export const ImpactBlock = () => {
    const { classes } = useStyles();
    return (
        <div className="impactBlock">
            <Title>Ready to make big impact?</Title>
            <div className="impactBlockgrid">
                <div className="impactBlockgridimg">
                    <Image
                        maw={240}
                        mx="auto"
                        radius="md"
                        src="./business-team-manager-meeting.svg"
                        alt="Random image"
                    />
                </div>
                <div className="impactBlockgridText">
                    <p>
                        At Intellicar, we are always on the lookout for bright minds, innovators, and go-getters who are
                        ready to take on exciting challenges in the world of data and fleet management. We believe in
                        fostering an environment where everyone can grow, contribute, and have a blast doing it. If
                        you are passionate about technology, eager to learn, and looking to join a team where your work
                        truly makes a difference, then you might just be our next superstar. 
                    </p>
                    <p>
                    Check out our open
                        positions and start your journey with Intellicar today!
                    </p>
                    <Button rightIcon={<ForwardArrow />} className='openRolesButton'>
                        View Open Roles
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default ImpactBlock 
