import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ChevronLeft, Users, Clock, MapPin, Calendar, User, CheckCircle, Home, Search } from 'lucide-react';
import { toast } from 'sonner';

export default function GroupDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [joined, setJoined] = useState(false);

  const group = {
    id: parseInt(id || '1'),
    name: 'Group B - Evening Session',
    subject: 'Data Structures',
    members: 5,
    maxMembers: 8,
    time: '4:00 PM',
    date: 'Every Mon, Wed, Fri',
    location: 'Library - Room 201',
    description: 'We focus on advanced data structures topics including trees, graphs, and dynamic programming. Perfect for exam preparation and project collaboration.',
    organizer: {
      name: 'Sarah Johnson',
      role: 'Computer Science Senior',
      avatar: 'SJ',
    },
    memberList: [
      { name: 'Alex Chen', avatar: 'AC', role: 'Junior' },
      { name: 'Maria Garcia', avatar: 'MG', role: 'Sophomore' },
      { name: 'James Wilson', avatar: 'JW', role: 'Senior' },
      { name: 'Emily Brown', avatar: 'EB', role: 'Junior' },
      { name: 'David Lee', avatar: 'DL', role: 'Sophomore' },
    ],
    tags: ['Advanced', 'Exam Prep', 'Active'],
  };

  const handleJoinGroup = () => {
    setJoined(true);
    toast.success('Successfully joined the group!', {
      description: 'You can now chat with members.',
    });
    setTimeout(() => {
      navigate('/my-groups');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-1">{group.name}</h1>
            <p className="text-blue-100 text-sm">{group.subject}</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-6">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          {/* Description */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">About This Group</h2>
            <p className="text-gray-600 leading-relaxed">{group.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {group.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Members</p>
                <p className="font-semibold text-gray-900">{group.members}/{group.maxMembers}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Time</p>
                <p className="font-semibold text-gray-900">{group.time}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Schedule</p>
                <p className="font-semibold text-gray-900 text-sm">{group.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-semibold text-gray-900 text-sm">{group.location}</p>
              </div>
            </div>
          </div>

          {/* Organizer */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Group Organizer</h3>
            <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                {group.organizer.avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{group.organizer.name}</p>
                <p className="text-sm text-gray-500">{group.organizer.role}</p>
              </div>
            </div>
          </div>

          {/* Members List */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Members ({group.memberList.length})</h3>
            <div className="space-y-2">
              {group.memberList.map((member, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {member.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{member.name}</p>
                    <p className="text-xs text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Join Button - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
        <button
          onClick={handleJoinGroup}
          disabled={joined}
          className={`w-full max-w-md mx-auto flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold transition-all shadow-lg ${
            joined
              ? 'bg-green-600 text-white'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
          }`}
        >
          {joined ? (
            <>
              <CheckCircle className="w-6 h-6" />
              Joined Successfully!
            </>
          ) : (
            <>
              <Users className="w-6 h-6" />
              Join This Group
            </>
          )}
        </button>
      </div>
    </div>
  );
}
