"use client";

import Link from "next/link";
import { 
  BarChart3, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  Layout, 
  Users, 
  Zap 
} from "lucide-react";
import { ModeToggle } from "@/components/ui/ThemeModeToggle";

function LandingPage() {
  return (
    // Updated: Added dark:bg-neutral-950 for dark background
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      
      {/* ==================== NAVBAR ==================== */}
      {/* Updated: Added dark border and bg colors */}
      <nav className="fixed top-0 w-full h-16 border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-neutral-900 dark:text-white">
            <div className="size-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Layout className="size-5" />
            </div>
            Planora
          </div>
          {/* Updated: Link hover colors for dark mode */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <Link href="#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Features</Link>
            <Link href="#solutions" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Solutions</Link>
            <Link href="#pricing" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Pricing</Link>
          </div>
          
          <div className="flex items-center gap-4">
             {/* Mode Toggle Button Here */}
            <div className="flex items-center">
                <ModeToggle />
            </div>
            <Link 
              href="/signin" 
              className="hidden sm:block text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white px-4 py-2"
            >
              Log in
            </Link>
            <Link 
              href="/signup" 
              className="text-sm font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 rounded-md hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        {/* Updated: Badge dark mode colors */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium mb-6 border border-blue-100 dark:border-blue-800">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          v1.0 is now live
        </div>
        
        {/* Updated: Headings text color */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
          Manage projects <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            with clarity & speed.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Planora connects your tasks, documents, and teams in one place. 
          Stop juggling tools and start shipping faster.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/signup" 
            className="h-12 px-8 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20"
          >
            Start for free <ChevronRight className="size-4" />
          </Link>
          {/* Updated: Secondary button dark styles */}
          <Link 
            href="#demo" 
            className="h-12 px-8 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center justify-center shadow-sm"
          >
            View Demo
          </Link>
        </div>

        {/* Mock Dashboard Visual (Updated for Dark Mode) */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
          <div className="relative rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-2xl overflow-hidden aspect-[16/9] flex flex-col">
            {/* Fake Browser Header */}
            <div className="h-10 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex items-center px-4 gap-2">
              <div className="size-3 rounded-full bg-red-400"></div>
              <div className="size-3 rounded-full bg-yellow-400"></div>
              <div className="size-3 rounded-full bg-green-400"></div>
            </div>
            {/* Fake Dashboard Content */}
            <div className="flex-1 flex">
              {/* Fake Sidebar */}
              <div className="w-64 border-r border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hidden md:block p-4 space-y-4">
                <div className="h-8 w-3/4 bg-neutral-200/50 dark:bg-neutral-700/50 rounded animate-pulse"></div>
                <div className="space-y-2 pt-4">
                  <div className="h-4 w-full bg-neutral-200/50 dark:bg-neutral-700/50 rounded"></div>
                  <div className="h-4 w-5/6 bg-neutral-200/50 dark:bg-neutral-700/50 rounded"></div>
                  <div className="h-4 w-4/6 bg-neutral-200/50 dark:bg-neutral-700/50 rounded"></div>
                </div>
              </div>
              {/* Fake Main Area */}
              <div className="flex-1 p-6 space-y-6">
                 <div className="flex justify-between items-center">
                    <div className="h-8 w-1/3 bg-neutral-200/50 dark:bg-neutral-700/50 rounded"></div>
                    <div className="h-8 w-24 bg-blue-100/50 dark:bg-blue-900/30 rounded"></div>
                 </div>
                 <div className="grid grid-cols-3 gap-4">
                    <div className="h-32 bg-neutral-100 dark:bg-neutral-800/50 rounded-lg border border-neutral-200/50 dark:border-neutral-800"></div>
                    <div className="h-32 bg-neutral-100 dark:bg-neutral-800/50 rounded-lg border border-neutral-200/50 dark:border-neutral-800"></div>
                    <div className="h-32 bg-neutral-100 dark:bg-neutral-800/50 rounded-lg border border-neutral-200/50 dark:border-neutral-800"></div>
                 </div>
                 <div className="h-64 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-100 dark:border-neutral-800 border-dashed flex items-center justify-center text-neutral-400 dark:text-neutral-600">
                    Interactive Workspace Preview
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUSTED BY ==================== */}
      {/* Updated: Background and border for dark mode */}
      <section className="py-10 border-y border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">TRUSTED BY INNOVATIVE TEAMS</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale dark:invert">
            {/* Logos will automatically invert color due to dark:invert */}
            <div className="font-bold text-xl text-neutral-800">ACME Corp</div>
            <div className="font-bold text-xl text-neutral-800">Quantum</div>
            <div className="font-bold text-xl text-neutral-800">Echo</div>
            <div className="font-bold text-xl text-neutral-800">NextGen</div>
            <div className="font-bold text-xl text-neutral-800">Starlight</div>
          </div>
        </div>
      </section>

      {/* ==================== FEATURES ==================== */}
      {/* Updated: Background color */}
      <section id="features" className="py-24 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4">
              Everything you need to ship faster
            </h2>
            <p className="text-lg text-neutral-500 dark:text-neutral-400">
              Planora streamlines your workflow with powerful tools designed for modern software teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Layout className="size-6 text-blue-600 dark:text-blue-400" />}
              title="Kanban Boards"
              description="Visualize your work with flexible boards. Drag and drop tasks to keep everyone aligned on status."
            />
            <FeatureCard 
              icon={<Calendar className="size-6 text-indigo-600 dark:text-indigo-400" />}
              title="Timeline View"
              description="Plan projects with Gantt-style charts to spot bottlenecks and manage dependencies effortlessly."
            />
            <FeatureCard 
              icon={<Zap className="size-6 text-amber-500 dark:text-amber-400" />}
              title="Automations"
              description="Save time by automating repetitive tasks. Let Planora handle the busy work for you."
            />
            <FeatureCard 
              icon={<Users className="size-6 text-emerald-600 dark:text-emerald-400" />}
              title="Team Collaboration"
              description="Real-time comments, mentions, and file sharing so your team stays connected."
            />
            <FeatureCard 
              icon={<BarChart3 className="size-6 text-rose-500 dark:text-rose-400" />}
              title="Advanced Analytics"
              description="Get insights into sprint velocity, burn-down charts, and individual performance."
            />
            <FeatureCard 
              icon={<CheckCircle2 className="size-6 text-cyan-600 dark:text-cyan-400" />}
              title="Goal Tracking"
              description="Set milestones and track progress against high-level company objectives."
            />
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-24 px-4">
        {/* Updated: Added dark border to make it pop against dark background */}
        <div className="max-w-5xl mx-auto bg-neutral-900 dark:bg-neutral-900/50 border border-transparent dark:border-neutral-800 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute -top-[50%] -left-[20%] w-[70%] h-[70%] rounded-full bg-blue-600/20 blur-[100px]"></div>
             <div className="absolute -bottom-[50%] -right-[20%] w-[70%] h-[70%] rounded-full bg-indigo-600/20 blur-[100px]"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to streamline your workflow?
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
              Join thousands of teams who use Planora to plan, track, and release software.
            </p>
            <Link 
              href="/signup" 
              className="inline-flex h-14 px-8 rounded-full bg-white text-neutral-900 font-bold hover:bg-neutral-100 transition-colors items-center justify-center"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      {/* Updated: Border and Background */}
      <footer className="border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl text-neutral-900 dark:text-white mb-4">
               <Layout className="size-6 text-blue-600" /> Planora
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm">
              Making project management effortless for modern teams.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Features</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Integrations</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Pricing</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Documentation</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">API Reference</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Community</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Careers</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Legal</Link></li>
              <li><Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
          <p>© 2024 Planora Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-neutral-600 dark:hover:text-neutral-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-neutral-600 dark:hover:text-neutral-300">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Component for Features
// Updated: Card background and text colors for dark mode
function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg hover:border-transparent transition-all duration-300 group">
      <div className="mb-4 p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg inline-block group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
        {icon}
      </div>
      <h3 className="font-semibold text-lg text-neutral-900 dark:text-white mb-2">{title}</h3>
      <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default LandingPage;