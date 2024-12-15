import React from 'react';
import { Save, Play, Download } from 'lucide-react';

function Toolbar() {
  return (
    <div className="absolute top-4 right-4 bg-white rounded-md shadow-md p-2 flex space-x-2">
      <button className="p-2 hover:bg-gray-100 rounded-md" title="Save">
        <Save className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-md" title="Deploy">
        <Play className="w-4 h-4" />
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-md" title="Export">
        <Download className="w-4 h-4" />
      </button>
    </div>
  );
}

export default Toolbar;