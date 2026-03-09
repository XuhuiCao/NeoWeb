/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Workspace from './components/Workspace';
import IntelligentDev from './components/IntelligentDev';

export default function App() {
  const [activeTab, setActiveTab] = useState('workspace');

  return (
    <div className="min-h-screen bg-[#f6f8fa] flex flex-col font-sans text-[#24292f]">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-hidden flex flex-col">
        {activeTab === 'workspace' && <Workspace onNavigateToDev={() => setActiveTab('intelligent_dev')} />}
        {activeTab === 'intelligent_dev' && <IntelligentDev />}
      </div>
    </div>
  );
}
