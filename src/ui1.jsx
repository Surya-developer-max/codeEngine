const problems = [
  {
    id: 1,
    status: 'solved',
    title: 'Two Sum',
    difficulty: 'EASY',
    category: 'Arrays & Hashmap',
    successRate: 48.2,
    points: 10,
  },
  {
    id: 2,
    status: 'unsolved',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'MEDIUM',
    category: 'Strings, Sliding Window',
    successRate: 33.8,
    points: 25,
  },
  {
    id: 3,
    status: 'pending',
    title: 'Median of Two Sorted Arrays',
    difficulty: 'HARD',
    category: 'Binary Search',
    successRate: 12.5,
    points: 50,
  },
  {
    id: 4,
    status: 'solved',
    title: 'Reverse Integer',
    difficulty: 'EASY',
    category: 'Math',
    successRate: 27.1,
    points: 10,
  },
  {
    id: 5,
    status: 'unsolved',
    title: 'Container With Most Water',
    difficulty: 'MEDIUM',
    category: 'Two Pointers',
    successRate: 54.0,
    points: 25,
  },
]

const difficultyStyles = {
  EASY: 'bg-green-100 text-green-700',
  MEDIUM: 'bg-yellow-100 text-yellow-700',
  HARD: 'bg-red-100 text-red-700',
}

function StatusIcon({ status }) {
  if (status === 'solved') {
    return (
      <span
        className="material-symbols-outlined text-emerald-600"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        check_circle
      </span>
    )
  }
  if (status === 'pending') {
    return <span className="material-symbols-outlined text-purple-300">pending</span>
  }
  return <span className="material-symbols-outlined text-gray-300">circle</span>
}

export default function Ui1() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-[280px] bg-blue-900 text-white shadow-md flex flex-col py-8 z-50">
        <div className="px-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
              <span
                className="material-symbols-outlined text-blue-900"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                terminal
              </span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-none">FutoGen</h1>
              <p className="text-xs opacity-70 tracking-wider uppercase font-semibold mt-1">
                Computer Education
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-grow space-y-1">
          <a
            className="flex items-center gap-2 text-white/70 hover:bg-white/5 px-4 py-2 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-2 bg-white/10 border-l-4 border-emerald-300 text-white px-4 py-2"
            href="#"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              code
            </span>
            <span className="text-sm">Coding Arena</span>
          </a>
          <a
            className="flex items-center gap-2 text-white/70 hover:bg-white/5 px-4 py-2 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">assignment_turned_in</span>
            <span className="text-sm">Submissions</span>
          </a>
          <a
            className="flex items-center gap-2 text-white/70 hover:bg-white/5 px-4 py-2 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">quiz</span>
            <span className="text-sm">MCQ Tests</span>
          </a>
          <a
            className="flex items-center gap-2 text-white/70 hover:bg-white/5 px-4 py-2 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">person</span>
            <span className="text-sm">Profile</span>
          </a>
        </nav>

        <div className="px-4 mt-auto pt-8 border-t border-white/10">
          <div className="space-y-1">
            <a
              className="flex items-center gap-2 text-white/70 hover:bg-white/5 px-4 py-2 transition-colors rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm">Settings</span>
            </a>
            <a
              className="flex items-center gap-2 text-white/70 hover:bg-white/5 px-4 py-2 transition-colors rounded-lg"
              href="#"
            >
              <span className="material-symbols-outlined">help</span>
              <span className="text-sm">Support</span>
            </a>
          </div>
          <button className="mt-4 w-full bg-emerald-200 text-emerald-900 font-bold py-2 rounded-lg flex items-center justify-center gap-1 active:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined">add</span>
            Start New Test
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-[280px] flex-1 flex flex-col min-w-0">
        {/* Top Nav */}
        <header className="fixed top-0 right-0 w-[calc(100%-280px)] h-16 bg-white border-b border-gray-200 z-40 flex justify-between items-center px-6">
          <div className="flex items-center gap-6">
            <h2 className="text-xl font-bold text-blue-900">FutoGen Assessment Portal</h2>
            <nav className="hidden md:flex gap-4">
              <a className="text-gray-500 hover:text-blue-900 text-sm transition-colors" href="#">
                Materials
              </a>
              <a className="text-gray-500 hover:text-blue-900 text-sm transition-colors" href="#">
                Forum
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                search
              </span>
              <input
                className="pl-10 pr-4 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-emerald-500 outline-none w-64"
                placeholder="Quick search..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors relative">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
            </div>
            <div className="h-8 w-[1px] bg-gray-200 mx-1"></div>
            <div className="flex items-center gap-2">
              <button className="text-blue-900 text-sm hover:underline">Logout</button>
              <div className="w-10 h-10 rounded-full border-2 border-blue-900 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="A professional studio headshot of a young adult student with a warm, confident expression."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqYOjAk7kvl_LBi5cx4DLmHRjknmJvHdEUBIs1X74pEUnbPWUN54ceE1ncFqJRN0CWDXGt8Zf0hsJSf_E2MVZgnzZihXMmRTu6LoUkufsOrw8b7y5h-QAmC4rDqTeTrZxEa6XWXXe_C8KO9tXhHHrPcl1um1fu-PkJLs5r400_vLzlkajzU_-_wPVOt3P26tko6f-gi8La1SKsE8yJnXaj1h6cIzmpV2b-bCUxB1fX4ZM-5T1Qq2cPh_ee3rTeHwpPJdiNdcntO3s9"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}

      </main>


    </div>
  )
}
