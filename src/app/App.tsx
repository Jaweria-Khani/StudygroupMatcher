import { Home, Users, User, Search, ArrowRight, ArrowDown, ChevronLeft, Send } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 overflow-x-auto">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 border-b-4 border-gray-900 inline-block pb-2 mb-2">
            Study Group Matcher
          </h1>
        </div>

        {/* Row 1: Home Screen -> Subject Selection */}
        <div className="flex items-center justify-center gap-8 mb-16 flex-wrap">
          {/* Home Screen */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Home Screen</h3>
            <div className="relative w-64 h-96 bg-white rounded-[40px] border-4 border-gray-900 shadow-lg p-6">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
              
              {/* Screen content */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-center mb-8 border-b-2 border-gray-900 pb-2">
                  Study Group Matcher
                </h2>
                
                <div className="space-y-4 mb-12">
                  <button className="w-full py-3 border-3 border-gray-900 rounded-lg bg-white font-semibold hover:bg-gray-100">
                    Find Group
                  </button>
                  <button className="w-full py-3 border-3 border-gray-900 rounded-lg bg-white font-semibold hover:bg-gray-100">
                    Create Group
                  </button>
                </div>

                {/* Bottom Navigation */}
                <div className="absolute bottom-6 left-6 right-6 border-t-2 border-gray-900 pt-3 flex justify-around">
                  <div className="flex flex-col items-center gap-1">
                    <Home className="w-6 h-6" />
                    <span className="text-xs">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Users className="w-6 h-6" />
                    <span className="text-xs">My Groups</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <User className="w-6 h-6" />
                    <span className="text-xs">Profile</span>
                  </div>
                </div>
              </div>

              {/* Phone bottom indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-12 h-12 text-gray-900 hidden md:block" strokeWidth={3} />

          {/* Subject Selection Screen */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Subject Selection</h3>
            <div className="relative w-64 h-96 bg-white rounded-[40px] border-4 border-gray-900 shadow-lg p-6">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
              
              {/* Screen content */}
              <div className="mt-6">
                {/* Search bar */}
                <div className="flex items-center gap-2 border-2 border-gray-900 rounded-full px-4 py-2 mb-4">
                  <Search className="w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    className="flex-1 outline-none bg-transparent text-sm"
                    readOnly
                  />
                </div>

                <h2 className="text-lg font-semibold mb-4 border-b-2 border-gray-900 pb-2">
                  Select Subject
                </h2>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-900 bg-gray-900 flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-medium">Data Structures</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-900"></div>
                    <span className="font-medium">Calculus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-900"></div>
                    <span className="font-medium">Database Systems</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-900"></div>
                    <span className="font-medium">4 PM</span>
                  </div>
                </div>
              </div>

              {/* Phone bottom indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-8">
          <ArrowDown className="w-12 h-12 text-gray-900" strokeWidth={3} />
        </div>

        {/* Row 2: Group Listing -> Group Details */}
        <div className="flex items-center justify-center gap-8 mb-16 flex-wrap">
          {/* Group Listing Screen */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Group Listing</h3>
            <div className="relative w-64 h-96 bg-white rounded-[40px] border-4 border-gray-900 shadow-lg p-6">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
              
              {/* Screen content */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-6 border-b-2 border-gray-900 pb-2">
                  Data Structures
                </h2>

                <div className="border-2 border-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold text-lg">Group A</p>
                      <p className="text-sm">Members</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">3 PM</p>
                      <p className="text-sm">4 PM</p>
                    </div>
                  </div>
                  <button className="w-full py-2 border-2 border-gray-900 rounded-lg font-semibold hover:bg-gray-100 flex items-center justify-center gap-2">
                    View Details
                    <span>&gt;</span>
                  </button>
                </div>
              </div>

              {/* Phone bottom indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-12 h-12 text-gray-900 hidden md:block" strokeWidth={3} />

          {/* Group Details Screen */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Group Details</h3>
            <div className="relative w-64 h-96 bg-white rounded-[40px] border-4 border-gray-900 shadow-lg p-6">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
              
              {/* Screen content */}
              <div className="mt-6">
                <div className="flex items-center gap-3 mb-6 border-b-2 border-gray-900 pb-3">
                  <ChevronLeft className="w-6 h-6" />
                  <h2 className="text-xl font-semibold">Group B</h2>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="font-medium"><span className="font-bold">Subject:</span> Data Structures</p>
                  <p className="font-medium"><span className="font-bold">Members:</span> 5</p>
                  <p className="font-medium"><span className="font-bold">Location:</span> Library</p>
                  <p className="font-medium"><span className="font-bold">Time:</span> 4 PM</p>
                </div>

                <button className="w-full py-3 border-3 border-gray-900 rounded-lg bg-white font-semibold hover:bg-gray-100 flex items-center justify-center gap-2">
                  Join Group
                  <span>&gt;</span>
                </button>
              </div>

              {/* Phone bottom indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-8">
          <ArrowDown className="w-12 h-12 text-gray-900" strokeWidth={3} />
        </div>

        {/* Row 3: My Groups/Chat (before) -> My Groups/Chat (after) */}
        <div className="flex items-center justify-center gap-8 mb-8 flex-wrap">
          {/* Chat Screen - Before */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">My Groups / Chat</h3>
            <div className="relative w-64 h-96 bg-white rounded-[40px] border-4 border-gray-900 shadow-lg p-6">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
              
              {/* Screen content */}
              <div className="mt-6 flex flex-col h-full">
                <div className="flex items-center gap-2 border-2 border-gray-900 rounded-full px-4 py-2 mb-4">
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">Data Structures Group</span>
                </div>

                <div className="flex-1 space-y-4 mb-4">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Ali</p>
                      <div className="border-2 border-gray-900 rounded-2xl rounded-tl-none px-3 py-2 bg-white">
                        <p className="text-sm">Hi everyone!</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Sara</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 border-t-2 border-gray-900 pt-3">
                  <input 
                    type="text" 
                    className="flex-1 border-2 border-gray-900 rounded-lg px-3 py-2 outline-none"
                    readOnly
                  />
                  <button className="w-10 h-10 border-2 border-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-100">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Phone bottom indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          {/* Arrow */}
          <ArrowRight className="w-12 h-12 text-gray-900 hidden md:block" strokeWidth={3} />

          {/* Chat Screen - After */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">My Groups / Chat</h3>
            <div className="relative w-64 h-96 bg-white rounded-[40px] border-4 border-gray-900 shadow-lg p-6">
              {/* Phone notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl"></div>
              
              {/* Screen content */}
              <div className="mt-6 flex flex-col h-full">
                <h2 className="text-lg font-semibold mb-4 border-b-2 border-gray-900 pb-2">
                  Data Structures Group
                </h2>

                <div className="flex-1 space-y-4 mb-4">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="border-2 border-gray-900 rounded-2xl rounded-tl-none px-3 py-2 bg-white">
                        <p className="text-sm">Hi everyone!</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end gap-2 justify-end">
                    <div>
                      <div className="border-2 border-gray-900 rounded-2xl rounded-tr-none px-3 py-2 bg-gray-100">
                        <p className="text-sm">Welcome!</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 border-t-2 border-gray-900 pt-3">
                  <input 
                    type="text" 
                    className="flex-1 border-2 border-gray-900 rounded-lg px-3 py-2 outline-none"
                    readOnly
                  />
                  <button className="w-10 h-10 border-2 border-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-100">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Phone bottom indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
