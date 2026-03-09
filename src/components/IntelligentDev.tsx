import React, { useState } from 'react';
import { 
  Plus, Search, Filter, Send, Paperclip, Zap, Brain, GitBranch, 
  Terminal, FileCode, CheckCircle2, Circle, X, LayoutDashboard, 
  Activity, Rocket, ChevronRight, ChevronLeft, FileText, Check, ChevronDown, Sparkles
} from 'lucide-react';

export default function IntelligentDev() {
  const [detailsExpanded, setDetailsExpanded] = useState(false);
  const [activeDetailTab, setActiveDetailTab] = useState('code');
  const [activeWorkflowNode, setActiveWorkflowNode] = useState('code');
  
  const handleNodeClick = (nodeId: string) => {
    setActiveWorkflowNode(nodeId);
    setDetailsExpanded(true);
    // map node to tab
    const tabMap: Record<string, string> = {
      'init': 'code',
      'plan': 'code',
      'code': 'code',
      'mr': 'code',
      'build': 'ui',
      'inspect': 'inspect',
      'release': 'release'
    };
    setActiveDetailTab(tabMap[nodeId] || 'code');
  };

  return (
    <div className="flex-1 flex overflow-hidden bg-white">
      {/* 1. Session Management */}
      <div className="w-64 flex-shrink-0 border-r border-[#d0d7de] flex flex-col bg-[#f8f9fa]">
        <div className="p-3 border-b border-[#d0d7de]">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 px-4 flex items-center justify-center gap-2 text-sm font-medium transition-colors shadow-sm">
            <Plus className="w-4 h-4" />
            新开会话
          </button>
        </div>
        
        <div className="p-2 border-b border-[#d0d7de] flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 absolute left-2 top-2 text-gray-400" />
            <input type="text" placeholder="搜索会话..." className="w-full pl-7 pr-2 py-1.5 text-xs bg-white border border-[#d0d7de] rounded-md outline-none focus:border-blue-500" />
          </div>
          <button className="p-1.5 text-gray-500 hover:bg-gray-200 rounded-md border border-[#d0d7de] bg-white">
            <Filter className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-4">
          <SessionGroup title="今日" />
          <SessionGroup title="本周" />
        </div>
      </div>

      {/* 2. Conversation Panel */}
      <div className="flex-1 min-w-[400px] flex flex-col relative">
        {/* Header */}
        <div className="h-12 border-b border-[#d0d7de] flex items-center justify-between px-4 shrink-0 bg-white">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900 text-sm">实现首页任务对话入口</span>
            <span className="px-1.5 py-0.5 rounded-md bg-blue-50 text-blue-600 text-[10px] border border-blue-200">进行中</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <GitBranch className="w-3.5 h-3.5" />
            <span>feat/task-input-ui</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-gray-50">
          <UserMessage content="帮我在雨燕首页增加一个任务对话入口，支持从首页直接下达研发任务后进入智能研发的对话任务详情页面。" />
          <AIMessage>
            <p className="text-sm text-gray-800 mb-3">好的，我将为您在雨燕首页工作台添加任务对话入口。以下是我的执行计划：</p>
            <div className="bg-white border border-[#d0d7de] rounded-md overflow-hidden mb-3">
              <div className="bg-gray-100 px-3 py-1.5 border-b border-[#d0d7de] text-xs font-mono text-gray-600 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                执行计划
              </div>
              <div className="p-3 text-sm text-gray-700 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>分析 <code>src/components/Workspace.tsx</code> 结构</span>
                </div>
                <div className="flex items-start gap-2">
                  <Circle className="w-4 h-4 text-blue-500 mt-0.5" />
                  <span>在欢迎语下方插入输入框组件</span>
                </div>
                <div className="flex items-start gap-2">
                  <Circle className="w-4 h-4 text-gray-300 mt-0.5" />
                  <span>绑定提交事件，跳转至智能研发 Tab</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-800 mb-2">我正在修改代码...</p>
            <FileEditMessage filename="src/components/Workspace.tsx" additions={15} deletions={2} />
          </AIMessage>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-[#d0d7de]">
          <div className="border border-[#d0d7de] rounded-lg shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all bg-white">
            {/* Context Attachments */}
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100 overflow-x-auto">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs border border-blue-100 whitespace-nowrap">
                <Activity className="w-3 h-3" />
                <span>DIMA-1024: 首页增加对话入口</span>
                <button className="hover:text-blue-900"><X className="w-3 h-3" /></button>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 rounded text-xs border border-green-100 whitespace-nowrap">
                <FileText className="w-3 h-3" />
                <span>PRD: 智能研发升级方案</span>
                <button className="hover:text-green-900"><X className="w-3 h-3" /></button>
              </div>
            </div>
            
            <textarea 
              className="w-full max-h-48 min-h-[80px] p-3 outline-none text-sm resize-none bg-transparent"
              placeholder="描述你的需求，或输入 / 唤起快捷指令..."
            />
            
            <div className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-b-lg border-t border-gray-100">
              <div className="flex items-center gap-3">
                {/* Model & Mode Selector */}
                <div className="flex items-center bg-white border border-[#d0d7de] rounded-md overflow-hidden text-xs">
                  <button className="px-2 py-1 hover:bg-gray-50 flex items-center gap-1 border-r border-[#d0d7de]">
                    Neovate Pro <ChevronDown className="w-3 h-3" />
                  </button>
                  <button className="px-2 py-1 bg-blue-50 text-blue-600 flex items-center gap-1 border-r border-[#d0d7de]" title="思考模式">
                    <Brain className="w-3.5 h-3.5" />
                  </button>
                  <button className="px-2 py-1 hover:bg-gray-50 text-gray-500 flex items-center gap-1" title="快速模式">
                    <Zap className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Branch Info */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-white border border-[#d0d7de] px-2 py-1 rounded-md cursor-pointer hover:bg-gray-50">
                  <GitBranch className="w-3.5 h-3.5" />
                  <span>本地: feat/task-input-ui</span>
                  <ChevronDown className="w-3 h-3" />
                </div>

                <div className="h-4 w-[1px] bg-[#d0d7de]"></div>

                <button className="text-gray-500 hover:text-gray-900" title="添加上下文">
                  <Paperclip className="w-4 h-4" />
                </button>
              </div>
              
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-md transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Extended Content Details (Collapsible) */}
      {detailsExpanded && (
        <div className="w-[450px] flex-shrink-0 border-l border-[#d0d7de] flex flex-col bg-white shadow-[-4px_0_15px_rgba(0,0,0,0.05)] z-10">
          <div className="h-12 border-b border-[#d0d7de] flex items-center justify-between px-2 shrink-0 bg-gray-50">
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
              <DetailTab id="ui" icon={<LayoutDashboard className="w-3.5 h-3.5" />} label="UI 大盘" active={activeDetailTab === 'ui'} onClick={() => setActiveDetailTab('ui')} />
              <DetailTab id="code" icon={<FileCode className="w-3.5 h-3.5" />} label="代码变更" active={activeDetailTab === 'code'} onClick={() => setActiveDetailTab('code')} />
              <DetailTab id="inspect" icon={<Activity className="w-3.5 h-3.5" />} label="检测项" active={activeDetailTab === 'inspect'} onClick={() => setActiveDetailTab('inspect')} />
              <DetailTab id="release" icon={<Rocket className="w-3.5 h-3.5" />} label="发布操作" active={activeDetailTab === 'release'} onClick={() => setActiveDetailTab('release')} />
            </div>
            <button onClick={() => setDetailsExpanded(false)} className="p-1.5 text-gray-500 hover:bg-gray-200 rounded-md shrink-0 ml-2">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto bg-white">
            {activeDetailTab === 'code' && <CodeChangesDetail />}
            {activeDetailTab === 'ui' && <div className="p-6 text-center text-gray-500">UI 大盘预览内容</div>}
            {activeDetailTab === 'inspect' && <div className="p-6 text-center text-gray-500">门禁与检测项详情</div>}
            {activeDetailTab === 'release' && <div className="p-6 text-center text-gray-500">构建与发布操作面板</div>}
          </div>
        </div>
      )}

      {/* 4. Workflow */}
      <div className="w-64 flex-shrink-0 border-l border-[#d0d7de] bg-[#f8f9fa] flex flex-col">
        <div className="h-12 border-b border-[#d0d7de] flex items-center px-4 shrink-0 font-medium text-sm text-gray-900 bg-white">
          研发工作流
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-gray-200"></div>
            
            <div className="space-y-6 relative">
              <WorkflowNode id="init" title="初始化" status="done" desc="环境就绪" active={activeWorkflowNode === 'init'} onClick={() => handleNodeClick('init')} />
              <WorkflowNode id="plan" title="规划" status="done" desc="已生成执行计划" active={activeWorkflowNode === 'plan'} onClick={() => handleNodeClick('plan')} />
              <WorkflowNode id="code" title="编码" status="active" desc="正在修改 Workspace.tsx" active={activeWorkflowNode === 'code'} onClick={() => handleNodeClick('code')} />
              <WorkflowNode id="mr" title="合并请求" status="pending" desc="等待发起" active={activeWorkflowNode === 'mr'} onClick={() => handleNodeClick('mr')} />
              <WorkflowNode id="build" title="构建部署" status="pending" desc="未开始" active={activeWorkflowNode === 'build'} onClick={() => handleNodeClick('build')} />
              <WorkflowNode id="inspect" title="检测项" status="pending" desc="未开始" active={activeWorkflowNode === 'inspect'} onClick={() => handleNodeClick('inspect')} />
              <WorkflowNode id="release" title="发布" status="pending" desc="未开始" active={activeWorkflowNode === 'release'} onClick={() => handleNodeClick('release')} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SessionGroup({ title }: { title: string }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2 px-2 hover:text-gray-700 cursor-pointer group">
        <div className="flex items-center gap-1">
          <ChevronDown className="w-3 h-3" />
          {title}
        </div>
        <Plus className="w-3 h-3 opacity-0 group-hover:opacity-100" />
      </div>
      <div className="space-y-1">
        <SessionItem title="实现首页任务对话入口" status="active" branch="feat/task-input-ui" active />
        <SessionItem title="修复表格组件分页 Bug" status="done" branch="fix/table-pagination" />
        <SessionItem title="接入 Dima 工作项查询" status="pending" />
      </div>
    </div>
  );
}

function SessionItem({ title, status, branch, active = false }: { title: string, status: 'active' | 'done' | 'pending' | 'cancelled', branch?: string, active?: boolean }) {
  const statusColors = {
    active: 'bg-blue-500',
    done: 'bg-green-500',
    pending: 'bg-yellow-500',
    cancelled: 'bg-gray-400'
  };

  return (
    <div className={`p-2 rounded-md cursor-pointer transition-colors ${active ? 'bg-white border border-[#d0d7de] shadow-sm' : 'hover:bg-gray-200/50 border border-transparent'}`}>
      <div className="flex items-start gap-2">
        <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${statusColors[status]}`}></div>
        <div className="flex-1 min-w-0">
          <div className={`text-sm truncate ${active ? 'font-medium text-gray-900' : 'text-gray-700'}`}>{title}</div>
          {branch && (
            <div className="flex items-center gap-1 text-[10px] text-gray-500 mt-1 truncate">
              <GitBranch className="w-3 h-3 shrink-0" />
              <span className="truncate">{branch}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function UserMessage({ content }: { content: string }) {
  return (
    <div className="flex gap-3 max-w-3xl ml-auto flex-row-reverse">
      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 overflow-hidden">
        <img src="https://picsum.photos/seed/user/100/100" alt="User" />
      </div>
      <div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm shadow-sm">
        {content}
      </div>
    </div>
  );
}

function AIMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 max-w-3xl">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0 text-white">
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="bg-white border border-[#d0d7de] rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

function FileEditMessage({ filename, additions, deletions }: { filename: string, additions: number, deletions: number }) {
  return (
    <div className="border border-[#d0d7de] rounded-md overflow-hidden bg-white">
      <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-b border-[#d0d7de]">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <FileCode className="w-4 h-4 text-blue-500" />
          {filename}
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-green-600">+{additions}</span>
          <span className="text-red-600">-{deletions}</span>
        </div>
      </div>
      <div className="p-3 bg-[#1e1e1e] text-[#d4d4d4] font-mono text-xs overflow-x-auto">
        <pre>
          <code>
<span className="text-gray-500">  1 |</span> export default function Workspace() {'{\n'}
<span className="text-green-400 bg-green-900/30 block">  2 |   const [taskInput, setTaskInput] = useState('');\n</span>
<span className="text-green-400 bg-green-900/30 block">  3 |   \n</span>
<span className="text-green-400 bg-green-900/30 block">  4 |   const handleTaskSubmit = (e) =&gt; {'{\n'}</span>
<span className="text-green-400 bg-green-900/30 block">  5 |     e.preventDefault();\n</span>
<span className="text-green-400 bg-green-900/30 block">  6 |     if (taskInput.trim()) onNavigateToDev();\n</span>
<span className="text-green-400 bg-green-900/30 block">  7 |   {'}'};\n</span>
<span className="text-gray-500">  8 |</span>   return (\n
<span className="text-gray-500">  9 |</span>     &lt;div className="flex-1"&gt;\n
<span className="text-red-400 bg-red-900/30 block"> 10 | -     &lt;h1&gt;Good day&lt;/h1&gt;\n</span>
<span className="text-green-400 bg-green-900/30 block"> 11 | +     &lt;h1 className="text-2xl"&gt;Good day, 使用雨燕开启新的一天 ;)&lt;/h1&gt;\n</span>
          </code>
        </pre>
      </div>
    </div>
  );
}

function DetailTab({ id, icon, label, active, onClick }: { id: string, icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md whitespace-nowrap transition-colors ${
        active ? 'bg-white text-blue-600 shadow-sm border border-[#d0d7de]' : 'text-gray-600 hover:bg-gray-200'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function CodeChangesDetail() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-[#d0d7de] flex justify-between items-center bg-gray-50">
        <div className="text-sm font-medium">变更文件 (1)</div>
        <div className="flex gap-2">
          <button className="px-2 py-1 text-xs bg-white border border-[#d0d7de] rounded hover:bg-gray-50">全部展开</button>
          <button className="px-2 py-1 text-xs bg-blue-600 text-white rounded hover:bg-blue-700">提交变更</button>
        </div>
      </div>
      <div className="p-4">
        <div className="border border-[#d0d7de] rounded-md overflow-hidden">
          <div className="flex items-center justify-between px-3 py-2 bg-gray-50 border-b border-[#d0d7de] cursor-pointer hover:bg-gray-100">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <ChevronDown className="w-4 h-4 text-gray-400" />
              <FileCode className="w-4 h-4 text-blue-500" />
              src/components/Workspace.tsx
            </div>
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-green-600">+15</span>
              <span className="text-red-600">-2</span>
            </div>
          </div>
          <div className="p-0 bg-white text-sm font-mono overflow-x-auto">
            <div className="flex bg-red-50 text-red-800 px-2 py-0.5">
              <div className="w-8 text-right text-red-400 select-none pr-2">10</div>
              <div className="w-8 text-right text-red-400 select-none pr-2">-</div>
              <div className="whitespace-pre">      &lt;h1&gt;Good day&lt;/h1&gt;</div>
            </div>
            <div className="flex bg-green-50 text-green-800 px-2 py-0.5">
              <div className="w-8 text-right text-green-400 select-none pr-2">+</div>
              <div className="w-8 text-right text-green-400 select-none pr-2">10</div>
              <div className="whitespace-pre">      &lt;h1 className="text-2xl font-semibold text-gray-900"&gt;Good day, 使用雨燕开启新的一天 ;)&lt;/h1&gt;</div>
            </div>
            <div className="flex bg-green-50 text-green-800 px-2 py-0.5">
              <div className="w-8 text-right text-green-400 select-none pr-2">+</div>
              <div className="w-8 text-right text-green-400 select-none pr-2">11</div>
              <div className="whitespace-pre">      </div>
            </div>
            <div className="flex bg-green-50 text-green-800 px-2 py-0.5">
              <div className="w-8 text-right text-green-400 select-none pr-2">+</div>
              <div className="w-8 text-right text-green-400 select-none pr-2">12</div>
              <div className="whitespace-pre">      {`{/* AI Task Input */}`}</div>
            </div>
            <div className="flex bg-green-50 text-green-800 px-2 py-0.5">
              <div className="w-8 text-right text-green-400 select-none pr-2">+</div>
              <div className="w-8 text-right text-green-400 select-none pr-2">13</div>
              <div className="whitespace-pre">      &lt;div className="bg-white border border-[#d0d7de] rounded-lg shadow-sm p-1"&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WorkflowNode({ id, title, status, desc, active, onClick }: { id: string, title: string, status: 'done' | 'active' | 'pending', desc: string, active: boolean, onClick: () => void }) {
  const statusConfig = {
    done: { icon: <Check className="w-3.5 h-3.5 text-white" />, bg: 'bg-green-500', border: 'border-green-500' },
    active: { icon: <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />, bg: 'bg-white', border: 'border-blue-500' },
    pending: { icon: null, bg: 'bg-white', border: 'border-gray-300' }
  };
  
  const conf = statusConfig[status];

  return (
    <div 
      className={`relative flex items-start gap-3 p-2 -ml-2 rounded-lg cursor-pointer transition-colors ${active ? 'bg-blue-50' : 'hover:bg-gray-100'}`}
      onClick={onClick}
    >
      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 z-10 mt-0.5 ${conf.bg} ${conf.border}`}>
        {conf.icon}
      </div>
      <div>
        <div className={`font-medium text-sm ${active ? 'text-blue-700' : 'text-gray-900'}`}>{title}</div>
        <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
      </div>
    </div>
  );
}
