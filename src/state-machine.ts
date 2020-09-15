import toJsx from '@mapbox/hast-util-to-jsx'
import copy from 'copy-to-clipboard'
import fromParse5 from 'hast-util-from-parse5'
import parse5 from 'parse5'
import {assign, Machine} from 'xstate'

interface Selection {
  name: string
  contents: string
}

interface Context {
  selection: Selection[]
  error: string
}

type Event = {type: 'SELECTION_CHANGE'; data: Selection[]} | {type: 'EXPORT'; index: number}

export default Machine<Context, Event>(
  {
    id: 'stateMachine',
    initial: 'idle',
    context: {
      selection: [],
      error: ''
    },
    states: {
      idle: {
        entry: ['figmaGetSelection'],
        on: {
          SELECTION_CHANGE: {
            actions: ['setSelection']
          },
          EXPORT: {
            target: 'fetchingImageUrl',
            actions: ['clearError']
          }
        }
      },
      fetchingImageUrl: {
        invoke: {
          id: 'fetchImageUrl',
          src: 'fetchImageUrl',
          onDone: {
            target: 'idle',
            actions: ['copyToClipboard', 'figmaNotifyCopied']
          },
          onError: {
            target: 'idle',
            actions: ['setError']
          }
        }
      }
    }
  },
  {
    actions: {
      setSelection: assign({
        selection: (context, event) => (event.type === 'SELECTION_CHANGE' ? event.data : context.selection)
      }),
      clearSelection: assign({
        selection: (context, event) => []
      }),
      copyToClipboard: (context, event: any) => copy(event.data),
      setError: assign({
        error: (context, event: any) => event.data.message
      }),
      clearError: assign({
        error: (context, event) => ''
      }),
      figmaNotifyCopied: () =>
        parent.postMessage({pluginMessage: {type: 'NOTIFY', data: 'Link copied to clipboard'}}, '*'),
      figmaClearSelection: () => parent.postMessage({pluginMessage: {type: 'CLEAR_SELECTION'}}, '*'),
      figmaGetSelection: () => parent.postMessage({pluginMessage: {type: 'GET_SELECTION'}}, '*')
    },
    services: {
      fetchImageUrl: async (context, event: any) => {
        const document = parse5.parse(context.selection[event.index].contents)
        const hast = fromParse5(document)
        const jsx = toJsx(hast)

        const response = await fetch('https://www.compai.pub/api/png', {
          method: 'POST',
          body: JSON.stringify({src: jsx})
        })

        const content = await response.json()

        return content.url
      }
    }
  }
)
