import { useCallback } from 'react';
import { useNodesState, useEdgesState, addEdge, Node } from 'reactflow';
import { useStore } from '../store/useStore';

export function useFlowNodes() {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const addNode = useStore((state) => state.addNode);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      const position = {
        x: event.clientX - event.target.getBoundingClientRect().left,
        y: event.clientY - event.target.getBoundingClientRect().top,
      };

      const newNode: Node = {
        id: `${type}-${Date.now()}`,
        type: 'custom',
        position,
        data: { type, label: type },
      };

      setNodes((nds) => nds.concat(newNode));
      addNode(newNode);
    },
    [setNodes, addNode]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onDrop,
    onDragOver
  };
}