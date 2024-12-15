import React from 'react';

function Sidebar({ services }) {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="h-full bg-white border-r p-4">
      {services.map((category) => (
        <div key={category.category} className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 mb-2">
            {category.category}
          </h3>
          <div className="space-y-2">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center p-2 rounded hover:bg-gray-100 cursor-move"
                draggable
                onDragStart={(e) => onDragStart(e, item.id)}
              >
                <item.icon className="w-5 h-5 mr-2" />
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;