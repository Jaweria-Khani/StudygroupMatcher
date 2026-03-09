import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Search, ChevronLeft, BookOpen, Home, Users, User } from 'lucide-react';

export default function SubjectSelection() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const subjects = [
    { id: 1, name: 'Data Structures', icon: '💻', groups: 12, color: 'bg-blue-100 text-blue-600' },
    { id: 2, name: 'Calculus', icon: '📐', groups: 8, color: 'bg-green-100 text-green-600' },
    { id: 3, name: 'Database Systems', icon: '🗄️', groups: 6, color: 'bg-purple-100 text-purple-600' },
    { id: 4, name: 'Artificial Intelligence', icon: '🤖', groups: 10, color: 'bg-orange-100 text-orange-600' },
    { id: 5, name: 'Operating Systems', icon: '⚙️', groups: 7, color: 'bg-red-100 text-red-600' },
    { id: 6, name: 'Computer Networks', icon: '🌐', groups: 5, color: 'bg-indigo-100 text-indigo-600' },
    { id: 7, name: 'Software Engineering', icon: '🔧', groups: 9, color: 'bg-pink-100 text-pink-600' },
    { id: 8, name: 'Machine Learning', icon: '🧠', groups: 11, color: 'bg-teal-100 text-teal-600' },
  ];

  const filteredSubjects = subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-12 pb-6 shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/home')}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Select Subject</h1>
            <p className="text-sm text-gray-500">Choose a subject to find groups</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search subjects..."
            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Subject List */}
      <div className="px-6 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-gray-600" />
          <p className="text-sm text-gray-600 font-medium">
            {filteredSubjects.length} subjects available
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {filteredSubjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => navigate(`/groups/${subject.name.toLowerCase().replace(/\s+/g, '-')}`)}
              className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-lg transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 ${subject.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {subject.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">{subject.name}</h3>
                  <p className="text-sm text-gray-500">{subject.groups} active groups</p>
                </div>
              </div>
              <div className="text-blue-600 group-hover:translate-x-1 transition-transform">
                →
              </div>
            </button>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No subjects found</h3>
            <p className="text-gray-500">Try searching with different keywords</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button 
            onClick={() => navigate('/home')}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-blue-600">
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
