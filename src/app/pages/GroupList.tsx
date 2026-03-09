import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, Users, Clock, MapPin, Home, Search, User, Filter } from 'lucide-react';

export default function GroupList() {
  const navigate = useNavigate();
  const { subject } = useParams();

  const subjectName = subject?.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') || 'Subject';

  const groups = [
    {
      id: 1,
      name: 'Group A - Morning Study',
      members: 3,
      maxMembers: 6,
      time: '3:00 PM',
      location: 'Library - Room 201',
      description: 'Focus on algorithms and problem solving',
      tags: ['Beginner Friendly', 'Active'],
    },
    {
      id: 2,
      name: 'Group B - Evening Session',
      members: 5,
      maxMembers: 8,
      time: '4:00 PM',
      location: 'Student Center',
      description: 'Advanced topics and exam preparation',
      tags: ['Advanced', 'Exam Prep'],
    },
    {
      id: 3,
      name: 'Group C - Weekend Warriors',
      members: 4,
      maxMembers: 6,
      time: '2:00 PM',
      location: 'Library - Room 105',
      description: 'Relaxed study environment',
      tags: ['Weekends', 'Flexible'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate('/subjects')}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{subjectName}</h1>
            <p className="text-blue-100 text-sm">{groups.length} study groups available</p>
          </div>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Groups List */}
      <div className="px-6 mt-6 space-y-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
          >
            <div className="p-5">
              {/* Group Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {group.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{group.description}</p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {group.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Group Info */}
              <div className="space-y-2 mb-4 border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">
                    <span className="font-semibold text-gray-900">{group.members}</span>/{group.maxMembers} members
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span className="text-sm">{group.time}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{group.location}</span>
                </div>
              </div>

              {/* View Details Button */}
              <button
                onClick={() => navigate(`/group/${group.id}`)}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-md flex items-center justify-center gap-2"
              >
                View Details
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {groups.length === 0 && (
        <div className="px-6 mt-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No groups yet</h3>
          <p className="text-gray-500 mb-6">Be the first to create a study group!</p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Create Group
          </button>
        </div>
      )}

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
          <button 
            onClick={() => navigate('/subjects')}
            className="flex flex-col items-center gap-1 text-blue-600"
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
