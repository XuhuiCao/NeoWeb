import React from 'react';
import { Search, Plus, Bell, HelpCircle, User } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: 'workspace', label: '工作台' },
    { id: 'intelligent_dev', label: '智能研发' },
    { id: 'task_market', label: '任务市场' },
    { id: 'yanshuo', label: '燕说' },
  ];

  return (
    <header className="h-14 bg-white border-b border-[#d0d7de] flex items-center px-4 justify-between shrink-0">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22H22L12 2Z" fill="currentColor"/>
          </svg>
          雨燕
        </div>
        <nav className="flex items-center gap-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-2.5 top-1.5 text-gray-400" />
          <input 
            type="text" 
            placeholder="搜索" 
            className="pl-8 pr-3 py-1 bg-gray-100 border border-transparent focus:border-blue-500 focus:bg-white rounded-md text-sm w-64 outline-none transition-all"
          />
          <div className="absolute right-2 top-1.5 text-xs text-gray-400 border border-gray-300 rounded px-1">/</div>
        </div>
        
        <div className="flex items-center gap-3 text-gray-500">
          <button className="p-1 hover:text-gray-900 bg-blue-600 text-white rounded-md"><Plus className="w-4 h-4" /></button>
          <button className="p-1 hover:text-gray-900"><Bell className="w-5 h-5" /></button>
          <button className="p-1 hover:text-gray-900"><HelpCircle className="w-5 h-5" /></button>
          <div className="flex items-center gap-2 text-sm border-l pl-3 ml-1">
            <span>主站 _ sit</span>
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
              <User className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
