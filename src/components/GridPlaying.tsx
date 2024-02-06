import { Button, Flex, Center, Spacer, Grid, GridItem } from '@chakra-ui/react'

export const GridComponent = () => {
  return (
    <>
      <Button>Click on me!</Button>
      <Flex padding='1.5rem'>
        <Center color='red'bg='beige' p ='4' border-radius='4'>
          Box 1
        </Center>
        <Spacer></Spacer>
        <Center color='white' bg='red' p='5'>
          Box 2
        </Center>
      </Flex>

      <Grid 
        h='300px' 
        padding='2' // para espaçamento das bordas, gap para entre grid items
        bg='gray' 
        templateRows='repeat(3,1fr)'
        templateColumns='repeat(9, 1fr)'
        gap={4} > 
        
        <GridItem rowSpan={2} bg='green' color='white'>1</GridItem>
        <GridItem rowSpan={2} bg='blue' color='white'>2</GridItem>
        <GridItem rowSpan={3} colSpan={2} bg='black' color='white'>3</GridItem>
        <GridItem colStart={1} colSpan={2} bg='yellow' color='black'>4</GridItem> 
        <GridItem colStart ={5} colEnd={7} bg='red' color='white'>col 5 e 7</GridItem>
      </Grid>

      

      <Grid padding='2' templateAreas={`
      "header header header"
      "guess main main"
      "guess main main"
      "guess footer footer"` }
        
        h='300px' bg ='gray' gap={4}>
        <GridItem pl='2' bg='orange' area={'header'}></GridItem>
        <GridItem pl='2' bg='black' area={'guess'}></GridItem>
        <GridItem pl='2' bg='white' area={'footer'}></GridItem>
        <GridItem pl='2' bg='beige' area={'main'}></GridItem>
      </Grid>

      eita
    </>   )
}