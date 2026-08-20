



"use client"
import {
  Award,
  BrainCircuit,
  Layers,

} from 'lucide-react'


const DashboardWidgets = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      {/* Widget 1: Static Curriculum Overview */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4 hover:border-amber-300 transition-colors">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-500/20">
          <Layers className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Learning Tracks</span>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">Available</span>
          </div>
          <div className="text-xl font-black text-slate-900 mt-0.5">24+ AI Modules</div>
          <p className="text-xs text-slate-500 mt-0.5">Structured pathways from basics to production level.</p>
        </div>
      </div>

      {/* Widget 2: Static Interactive Labs */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4 hover:border-amber-300 transition-colors">
        <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-amber-400 shrink-0 shadow-md">
          <Award className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Practical Exercises</span>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-sans">Self-Paced</span>
          </div>
          <div className="text-xl font-black text-slate-900 mt-0.5">100+ Hands-On Labs</div>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">Interactive code sandboxes & quiz checks.</p>
        </div>
      </div>

      {/* Widget 3: AI Learning Tip Card */}
      <div className="bg-gradient-to-br from-amber-500/10 via-amber-50/50 to-white rounded-2xl p-5 border border-amber-200/80 shadow-sm flex items-start gap-3">
        <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
          <BrainCircuit className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">AI Daily Tip</span>
          <p className="text-xs text-slate-700 mt-1 leading-relaxed font-medium">
            "Testing yourself right after reading a section increases retention by up to 40%."
          </p>
        </div>
      </div>

    </div>
  )
}





export default DashboardWidgets