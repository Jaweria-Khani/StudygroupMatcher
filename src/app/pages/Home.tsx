import { useNavigate } from 'react-router';
import { Search, Users, User, Home as HomeIcon, BookOpen, TrendingUp, Clock, MapPin } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const popularSubjects = [
    { name: 'Data Structures', icon: '💻', groups: 12 },
    { name: 'Calculus', icon: '📐', groups: 8 },
    { name: 'Database Systems', icon: '🗄️', groups: 6 },
    { name: 'AI', icon: '🤖', groups: 10 },
  ];

  const recentGroups = [
    { name: 'DS Study Group', subject: 'Data Structures', members: 5, time: '4 PM' },
    { name: 'Calc Warriors', subject: 'Calculus', members: 4, time: '3 PM' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 pt-12 pb-8 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">Study Group Matcher</h1>
            <p className="text-blue-100">Find your perfect study team</p>
          </div>
          <button 
            onClick={() => navigate('/profile')}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <User className="w-6 h-6" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for subjects..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg"
            onClick={() => navigate('/subjects')}
            readOnly
          />
        </div>
      </div>

      <div className="px-6 mt-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => navigate('/subjects')}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-left"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <Search className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Find Groups</h3>
            <p className="text-sm text-gray-500">Search by subject</p>
          </button>

          <button
            onClick={() => navigate('/my-groups')}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all text-left"
          >
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">My Groups</h3>
            <p className="text-sm text-gray-500">View your groups</p>
          </button>
        </div>

        {/* Popular Subjects */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Popular Subjects</h2>
            <TrendingUp className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-3">
            {popularSubjects.map((subject, index) => (
              <button
                key={index}
                onClick={() => navigate(`/groups/${subject.name.toLowerCase().replace(/\s+/g, '-')}`)}
                className="w-full bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{subject.icon}</span>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{subject.name}</h3>
                    <p className="text-sm text-gray-500">{subject.groups} active groups</p>
                  </div>
                </div>
                <div className="text-blue-600">→</div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Groups</h2>
          <div className="space-y-3">
            {recentGroups.map((group, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-sm"
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{group.name}</h3>
                    <p className="text-sm text-gray-500">{group.subject}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Active
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {group.members} members
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {group.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1 text-blue-600">
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button 
            onClick={() => navigate('/subjects')}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"
          >
            <Search className="w-6 h-6" />
            <span className="text-xs font-medium">Find</span>
          </button>
          <button 
            onClick={() => navigate('/my-groups')}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"
          >
            <Users className="w-6 h-6" />
            <span className="text-xs font-medium">My Groups</span>
          </button>
          <button 
            onClick={() => navigate('/profile')}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
