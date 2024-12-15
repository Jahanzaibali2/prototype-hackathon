import React from 'react';
import { Panel, PanelGroup } from 'react-resizable-panels';
import Canvas from './components/Canvas';
import Sidebar from './components/Sidebar';
import CodePanel from './components/CodePanel';
import ResizeHandle from './components/ResizeHandle';
import { cloudServices } from './constants/cloudServices';

function App() {
  return (
    <div className="h-screen bg-gray-100">
      <nav className="bg-white shadow-sm h-14 flex items-center px-4">
        <h1 className="text-xl font-semibold">Cloud Infrastructure Designer</h1>
      </nav>
      
      <PanelGroup direction="horizontal" className="h-[calc(100vh-3.5rem)]">
        <Panel defaultSize={20} minSize={15}>
          <Sidebar services={cloudServices} />
        </Panel>
        
        <ResizeHandle />
        
        <Panel defaultSize={50} minSize={30}>
          <Canvas />
        </Panel>
        
        <ResizeHandle />
        
        <Panel defaultSize={30} minSize={20}>
          <CodePanel />
        </Panel>
      </PanelGroup>
    </div>
  );
}

export default App;