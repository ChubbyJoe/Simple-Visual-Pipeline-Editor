// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '12px 16px', background: '#0B1220', borderBottom: '1px solid #1E293B' }}>
            <div style={{ color: '#E2E8F0', fontWeight: 600 }}>Nodes</div>
            <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='param' label='Param' />
                <DraggableNode type='image' label='Image' />
                <DraggableNode type='math' label='Math' />
                <DraggableNode type='delay' label='Delay' />
                <DraggableNode type='logger' label='Logger' />
            </div>
        </div>
    );
};
