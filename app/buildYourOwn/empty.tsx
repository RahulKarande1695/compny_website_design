import { createStyles,Container,Title,Text, Center} from '@mantine/core';


const useStyles = createStyles((theme) => ({
 
}));

export function Empty() {
  const { classes } = useStyles();

  return (
    <div>
      <Container >
       <Center><Title>Use-cases</Title></Center> 
       <Center><Text> To be designed</Text></Center>
      </Container>
    </div>
  );
}