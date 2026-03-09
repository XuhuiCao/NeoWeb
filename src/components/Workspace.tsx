import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, GitBranch, Layout, Star, ChevronRight, CheckCircle2, Circle, User } from 'lucide-react';

export default function Workspace({ onNavigateToDev }: { onNavigateToDev: () => void }) {
  const [taskInput, setTaskInput] = useState('');

  const handleTaskSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskInput.trim()) {
      onNavigateToDev();
    }
  };

  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-[#d0d7de] overflow-y-auto shrink-0 flex flex-col">
        <div className="p-3 space-y-0.5">
          <NavItem icon={<Layout className="w-4 h-4" />} label="首页" active />
          <NavItem icon={<CheckCircle2 className="w-4 h-4" />} label="待办" />
          <NavItem icon={<User className="w-4 h-4" />} label="团队" badge="NEW" />
        </div>
        
        <div className="mt-4">
          <div className="px-4 text-xs font-semibold text-gray-500 mb-2">我的研发</div>
          <div className="p-3 pt-0 space-y-0.5">
            <NavItem icon={<GitBranch className="w-4 h-4" />} label="迭代" />
            <NavItem icon={<Layout className="w-4 h-4" />} label="应用" />
            <NavItem icon={<BookOpen className="w-4 h-4" />} label="产品" />
          </div>
        </div>

        <div className="mt-4">
          <div className="px-4 text-xs font-semibold text-gray-500 mb-2 flex justify-between items-center">
            收藏
            <ChevronRight className="w-4 h-4" />
          </div>
          <div className="p-3 pt-0 space-y-0.5">
            <NavItem icon={<Star className="w-4 h-4 text-yellow-500" />} label="yuyan-snippets" />
            <NavItem icon={<Star className="w-4 h-4 text-yellow-500" />} label="yuyanAssetsNext" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <h1 className="text-2xl font-semibold text-gray-900">Good day, 使用雨燕开启新的一天 ;)</h1>
          
          {/* AI Task Input */}
          <div className="bg-white border border-[#d0d7de] rounded-lg shadow-sm p-1">
            <form onSubmit={handleTaskSubmit} className="flex items-center px-3 py-2">
              <Sparkles className="w-5 h-5 text-blue-500 mr-3 shrink-0" />
              <input 
                type="text" 
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="告诉我的你的研发任务，我来帮你搞定它~" 
                className="flex-1 outline-none text-base bg-transparent"
              />
              <button type="submit" className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="flex gap-6">
            {/* Left Column */}
            <div className="flex-1 space-y-6">
              {/* Ongoing */}
              <div className="bg-white border border-[#d0d7de] rounded-lg shadow-sm overflow-hidden">
                <div className="border-b border-[#d0d7de] px-4 py-3 flex gap-4 bg-gray-50/50">
                  <button className="font-semibold text-gray-900 border-b-2 border-blue-500 pb-3 -mb-3">进行中的 <span className="bg-gray-200 text-gray-600 py-0.5 px-2 rounded-full text-xs ml-1">12</span></button>
                  <button className="text-gray-500 hover:text-gray-900 pb-3 -mb-3">已发布的 <span className="bg-gray-200 text-gray-600 py-0.5 px-2 rounded-full text-xs ml-1">25</span></button>
                </div>
                <div className="divide-y divide-[#d0d7de]">
                  <ProjectRow title="songx-pro-test-nov-2" desc="AntD_bigfish_Appname · 松仙 · 更新于 10月28日" status="dev" />
                  <ProjectRow title="songx-pro-test-nov-2" desc="AntD_bigfish_Appname · 松仙 · 更新于 10月28日" status="test" badge="5%灰度·门禁检测中" />
                  <ProjectRow title="songx-pro-test-nov-2" desc="AntD_bigfish_Appname · 松仙 · 更新于 10月28日" status="release" badge="5%灰度·门禁通过" badgeColor="green" />
                </div>
                <div className="p-3 text-center border-t border-[#d0d7de]">
                  <button className="text-sm text-blue-600 hover:underline">查看更多</button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-80 space-y-6 shrink-0">
              {/* Profile Stats */}
              <div className="bg-white border border-[#d0d7de] rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src="https://picsum.photos/seed/user/100/100" alt="User" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 flex items-center gap-2">
                      曹旭辉 (崇启)
                      <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded border border-green-200">已通过认证考试</span>
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                      <Layout className="w-3 h-3" /> 雨燕 <a href="#" className="text-blue-600 hover:underline">团队洞察 &gt;</a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center pt-4 border-t border-[#d0d7de]">
                  <div>
                    <div className="text-2xl font-light text-gray-900">5</div>
                    <div className="text-xs text-gray-500 mt-1">PR</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-gray-900">2</div>
                    <div className="text-xs text-gray-500 mt-1">测试</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-gray-900">0</div>
                    <div className="text-xs text-gray-500 mt-1">报警</div>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-gray-900">0</div>
                    <div className="text-xs text-gray-500 mt-1">应用治理</div>
                  </div>
                </div>
              </div>

              {/* Announcements */}
              <div className="bg-white border border-[#d0d7de] rounded-lg shadow-sm p-4">
                <div className="flex items-center gap-4 mb-4 text-sm font-semibold">
                  <span className="text-blue-600 border-b-2 border-blue-600 pb-1">公告</span>
                  <span className="text-gray-500 pb-1">封网日历</span>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg p-4 text-white mb-4 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="font-bold text-lg mb-1">雨燕 2.0，展翅高飞</div>
                    <div className="text-xs opacity-90">一站式 · 敏捷 · 高效 · 安全 · 开放</div>
                  </div>
                  <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 opacity-50" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-medium text-sm">🔥🔥09-01 产品更新公告</div>
                    <div className="text-xs text-gray-400">12.05</div>
                  </div>
                  <div className="text-xs text-gray-500 line-clamp-2">
                    那些更棒的点子来自于个体依然用过去习惯的方式思考创意时——坐在办公室里...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false, badge = null }: { icon: React.ReactNode, label: string, active?: boolean, badge?: string | null }) {
  return (
    <button className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
      <div className="flex items-center gap-2">
        {icon}
        {label}
      </div>
      {badge && <span className="text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-bold">{badge}</span>}
    </button>
  );
}

function ProjectRow({ title, desc, status, badge, badgeColor = 'blue' }: { title: string, desc: string, status: string, badge?: string, badgeColor?: string }) {
  return (
    <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group cursor-pointer">
      <div className="flex items-start gap-3">
        <div className="mt-1 text-yellow-500">
          <Layout className="w-5 h-5" />
        </div>
        <div>
          <div className="font-medium text-blue-600 group-hover:underline text-sm">{title}</div>
          <div className="text-xs text-gray-500 mt-1">{desc}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {badge && (
          <span className={`text-xs px-2 py-1 rounded-full bg-${badgeColor}-50 text-${badgeColor}-600 border border-${badgeColor}-200`}>
            {badge}
          </span>
        )}
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <div className={`flex items-center gap-1 ${status === 'dev' ? 'text-blue-600 font-medium' : ''}`}>
            <Circle className="w-2 h-2 fill-current" /> 开发
          </div>
          <div className="w-4 h-[1px] bg-gray-300"></div>
          <div className={`flex items-center gap-1 ${status === 'test' ? 'text-blue-600 font-medium' : ''}`}>
            <Circle className="w-2 h-2 fill-current" /> 测试
          </div>
          <div className="w-4 h-[1px] bg-gray-300"></div>
          <div className={`flex items-center gap-1 ${status === 'release' ? 'text-green-600 font-medium' : ''}`}>
            <Circle className="w-2 h-2 fill-current" /> 发布
          </div>
        </div>
      </div>
    </div>
  );
}
