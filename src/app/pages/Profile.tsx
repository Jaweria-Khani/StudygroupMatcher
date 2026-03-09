import { useNavigate } from 'react-router';
import { ChevronLeft, User, Mail, Phone, GraduationCap, Calendar, MapPin, Settings, LogOut, Bell, Shield, HelpCircle, ChevronRight, Home, Search, Users } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();

  const userInfo = {
    name: 'Ali Rahman',
    email: 'ali.rahman@university.edu',
    phone: '+1 (555) 123-4567',
    major: 'Computer Science',
    year: 'Junior',
    joinedDate: 'January 2024',
    location: 'University Campus',
    groupsJoined: 3,
    studyHours: 24,
  };

  const menuItems = [
    { icon: Settings, label: 'Account Settings', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Bell, label: 'Notifications', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Shield, label: 'Privacy & Security', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: HelpCircle, label: 'Help & Support', color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 pt-12 pb-20">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/home')}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold">My Profile</h1>
        </div>
      </div>

      <div className="px-6 -mt-16">
        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-6">
          {/* Avatar & Name */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 shadow-lg">
              {userInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{userInfo.name}</h2>
            <p className="text-gray-500">{userInfo.email}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-100">
            <div className="text-center p-4 bg-blue-50 rounded-2xl">
              <p className="text-3xl font-bold text-blue-600 mb-1">{userInfo.groupsJoined}</p>
              <p className="text-sm text-gray-600">Groups Joined</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-2xl">
              <p className="text-3xl font-bold text-purple-600 mb-1">{userInfo.studyHours}</p>
              <p className="text-sm text-gray-600">Study Hours</p>
            </div>
          </div>

          {/* User Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{userInfo.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="font-medium text-gray-900">{userInfo.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Major</p>
                <p className="font-medium text-gray-900">{userInfo.major}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Year & Joined</p>
                <p className="font-medium text-gray-900">{userInfo.year} • {userInfo.joinedDate}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="font-medium text-gray-900">{userInfo.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-3xl shadow-md p-4 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 px-2 mb-3">Settings</h3>
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${item.bg} rounded-full flex items-center justify-center`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <span className="font-medium text-gray-900">{item.label}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={() => navigate('/')}
          className="w-full bg-white rounded-2xl shadow-md p-4 flex items-center justify-center gap-2 text-red-600 font-semibold hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
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
          <button className="flex flex-col items-center gap-1 text-blue-600">
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
