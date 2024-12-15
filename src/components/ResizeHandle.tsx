import React from 'react';
import { PanelResizeHandle } from 'react-resizable-panels';
import { cn } from '../lib/utils';

function ResizeHandle({ className = '', ...props }) {
  return (
    <PanelResizeHandle
      className={cn(
        'w-2 bg-gray-100 hover:bg-gray-200 transition-colors',
        className
      )}
      {...props}
    />
  );
}

export default ResizeHandle;