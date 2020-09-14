import {BaseStyles, Button, Text, Flex, Tooltip} from '@primer/components'
import {useMachine} from '@xstate/react'
import React from 'react'
import stateMachine from '../state-machine'
import {LinkIcon} from '@primer/octicons-react'

export default function App() {
  const [state, send] = useMachine(stateMachine)

  onmessage = (event) => {
    switch (event.data.pluginMessage.type) {
      case 'SELECTION_CHANGE':
        send({type: 'SELECTION_CHANGE', data: event.data.pluginMessage.data})
        break
    }
  }

  return (
    <BaseStyles>
      {state.matches('fetchingImageUrl') ? (
        <Text as="p" m={0} py={5} color="gray.6" fontSize={1} textAlign="center">
          Fetching image URL...
        </Text>
      ) : null}
      {state.matches('idle') ? (
        state.context.selection.length === 0 ? (
          <Text as="p" m={0} py={5} color="gray.6" fontSize={1} textAlign="center">
            No frames selected
          </Text>
        ) : (
          <Flex flexDirection="column" py={1}>
            {state.context.selection.map((selection, index) => (
              <Flex key={`${selection.name} ${index}`} px={3} py={1} justifyContent="space-between">
                <Text fontSize={1}>{selection.name}</Text>
                <Tooltip text="Copy image URL" direction="w">
                  <Button
                    variant="small"
                    p={1}
                    sx={{border: 0, background: 'transparent', boxShadow: 'none'}}
                    onClick={() => send({type: 'EXPORT', index})}
                    aria-label="Copy image URL"
                  >
                    <LinkIcon />
                  </Button>
                </Tooltip>
              </Flex>
            ))}
          </Flex>
        )
      ) : null}
    </BaseStyles>
  )
}
