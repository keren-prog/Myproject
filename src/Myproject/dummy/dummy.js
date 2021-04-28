import React from 'react'
import { Box, Button, Stack , ButtonGroup, IconButton, Spinner} from "@chakra-ui/react"
import HomePage from '../Homepage/HomePage'

const Dummy = () => {
    return (
        <>
<HomePage/>
<ButtonGroup size="sm" isAttached variant="outline">
  <Button mr="-px">Save</Button>

  <IconButton aria-label="Add to friends" />
</ButtonGroup>

<Spinner
  thickness="4px"
  speed="0.65s"
  emptyColor="gray.200"
  color="blue.500"
  size="xl"
/>
            {/* <Stack spacing={10} direction="row" align="center">
                <Button  isLoading  colorScheme="teal" size="xs">
                    Button
  </Button>
                <Button colorScheme="teal" size="sm">
                    Button
  </Button>
                <Button colorScheme="teal" size="md">
                    Button
  </Button>
                <Button colorScheme="teal" size="lg">
                    Button
  </Button>
            </Stack> */}
        </>
    )
}

export default Dummy;
