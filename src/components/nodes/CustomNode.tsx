import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { cloudServices } from '../../constants/cloudServices';

function CustomNode({ data }) {
  const service = cloudServices
    .flatMap(category => category.items)
    .find(item => item.id === data.type);

  const Icon = service?.icon;

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-gray-200">
      <div className="flex items-center">
        {Icon && <Icon className="h-4 w-4 mr-2" />}
        <div className="text-sm font-medium">{service?.name || data.label}</div>
      </div>
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
    </div>
  );
}

export default memo(CustomNode);