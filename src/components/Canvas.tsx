import React from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  NodeTypes
} from 'reactflow';
import { useFlowNodes } from '../hooks/useFlowNodes';
import CustomNode from './nodes/CustomNode';
import Toolbar from './toolbar/Toolbar';
import 'reactflow/dist/style.css';

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

function Canvas() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onDrop,
    onDragOver
  } = useFlowNodes();

  return (
    <div className="h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
        <Toolbar />
      </ReactFlow>
    </div>
  );
}

export default Canvas;