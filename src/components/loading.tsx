import React, {PropsWithChildren} from 'react'
import {Flex, Text} from '@primer/components'

export default function Loading({children}: PropsWithChildren<{}>) {
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" py={7}>
      <img src={require('../mona-loader.gif')} width={88} />
      <Text fontSize={1} color="gray.7">
        {children}
      </Text>
    </Flex>
  )
}
