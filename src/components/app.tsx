import {useMachine} from '@xstate/react'
import 'figma-plugin-ds/dist/figma-plugin-ds.css'
import React from 'react'
import stateMachine from '../state-machine'

export default function App() {
  const [state, send] = useMachine(stateMachine)

  onmessage = event => {
    switch (event.data.pluginMessage.type) {
      case 'SELECTION_CHANGE':
        send({type: 'SELECTION_CHANGE', data: event.data.pluginMessage.data})
        break
    }
  }

  return (
    <div>
      {state.matches('fetchingImageUrl') ? (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 0'}}>
          <div style={{backgroundPosition: 'initial'}} className="icon icon--spinner icon--spin"></div>
          <div className="type">Fetching image URL...</div>
        </div>
      ) : null}
      {state.matches('idle') ? (
        state.context.selection.length === 0 ? (
          <div className="type" style={{padding: '24px 0', textAlign: 'center'}}>
            No frames selected
          </div>
        ) : (
          <div style={{padding: '4px 0'}}>
            {state.context.selection.map((selection, index) => (
              <div
                key={`${selection.name} ${index}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 4px 0 16px'
                }}
              >
                <div className="type">{selection.name}</div>
                <button
                  className="icon-button"
                  aria-label="Copy image URL"
                  title="Copy image URL"
                  style={{padding: 0, cursor: 'default'}}
                  onClick={() => send({type: 'EXPORT', index})}
                >
                  <div style={{marginTop: -2}} className="icon icon--hyperlink"></div>
                </button>
              </div>
            ))}
          </div>
        )
      ) : null}
    </div>
  )
}
