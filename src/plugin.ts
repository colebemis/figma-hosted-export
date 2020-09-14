figma.showUI(__html__, {width: 240, height: 120})

type Message = {type: 'GET_SELECTION'} | {type: 'NOTIFY'; data: string}

figma.ui.onmessage = async (message: Message) => {
  switch (message.type) {
    case 'GET_SELECTION':
      sendSelectionToUi()
      break

    case 'NOTIFY':
      figma.notify(message.data)
      break
  }
}

figma.on('selectionchange', () => sendSelectionToUi())

async function sendSelectionToUi() {
  const selection = await Promise.all(
    figma.currentPage.selection
      .filter((node) => node.type === 'FRAME' || node.type === 'COMPONENT' || node.type === 'INSTANCE')
      .map(async (node) => {
        const svgUint8Array = await node.exportAsync({format: 'SVG'})
        const svgString = String.fromCharCode.apply(null, Array.from(svgUint8Array))
        return {
          name: node.name,
          contents: svgString,
        }
      })
  )

  figma.ui.postMessage({type: 'SELECTION_CHANGE', data: selection})
}
