import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Home, Search, Users, User, Send, ChevronLeft, MoreVertical, Smile } from 'lucide-react';

export default function MyGroups() {
  const navigate = useNavigate();
  const [selectedGroup, setSelectedGroup] = useState<number | null>(1);
  const [messageText, setMessageText] = useState('');

  const myGroups = [
    {
      id: 1,
      name: 'Data Structures Group',
      subject: 'Data Structures',
      lastMessage: 'Sara: Welcome!',
      time: '2:30 PM',
      unread: 2,
      avatar: 'DS',
      color: 'from-blue-600 to-purple-600',
    },
    {
      id: 2,
      name: 'Calc Warriors',
      subject: 'Calculus',
      lastMessage: 'John: See you tomorrow!',
      time: 'Yesterday',
      unread: 0,
      avatar: 'CW',
      color: 'from-green-600 to-teal-600',
    },
  ];

  const chatMessages = [
    {
      id: 1,
      sender: 'Ali',
      message: 'Hi everyone!',
      time: '2:15 PM',
      isMe: true,
      avatar: 'A',
    },
    {
      id: 2,
      sender: 'Sara',
      message: 'Welcome to the group!',
      time: '2:20 PM',
      isMe: false,
      avatar: 'S',
    },
    {
      id: 3,
      sender: 'Sara',
      message: 'Looking forward to studying together 📚',
      time: '2:21 PM',
      isMe: false,
      avatar: 'S',
    },
    {
      id: 4,
      sender: 'Mike',
      message: 'Hey Ali! Glad you joined us!',
      time: '2:25 PM',
      isMe: false,
      avatar: 'M',
    },
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // Add message logic here
      setMessageText('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {selectedGroup === null ? (
        // Groups List View
        <>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 pt-12 pb-6">
            <h1 className="text-2xl font-bold mb-1">My Groups</h1>
            <p className="text-blue-100 text-sm">{myGroups.length} active groups</p>
          </div>

          <div className="flex-1 px-6 mt-6">
            {myGroups.map((group) => (
              <button
                key={group.id}
                onClick={() => setSelectedGroup(group.id)}
                className="w-full bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all mb-3 flex items-center gap-4"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${group.color} rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                  {group.avatar}
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">{group.name}</h3>
                    <span className="text-xs text-gray-500">{group.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{group.lastMessage}</p>
                </div>
                {group.unread > 0 && (
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                    {group.unread}
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
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
              <button className="flex flex-col items-center gap-1 text-blue-600">
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
        </>
      ) : (
        // Chat View
        <>
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 pt-12 pb-4 shadow-md">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSelectedGroup(null)}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-semibold">
                DS
              </div>
              <div className="flex-1">
                <h2 className="font-semibold">Data Structures Group</h2>
                <p className="text-sm text-blue-100">5 members</p>
              </div>
              <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 p-6 overflow-y-auto">
            <div className="space-y-4 max-w-2xl mx-auto">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-end gap-2 ${msg.isMe ? 'flex-row-reverse' : ''}`}
                >
                  {!msg.isMe && (
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                      {msg.avatar}
                    </div>
                  )}
                  <div className={`max-w-[75%] ${msg.isMe ? 'items-end' : 'items-start'} flex flex-col`}>
                    {!msg.isMe && (
                      <span className="text-xs font-medium text-gray-600 mb-1 px-2">
                        {msg.sender}
                      </span>
                    )}
                    <div
                      className={`px-4 py-3 rounded-2xl shadow-sm ${
                        msg.isMe
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none'
                          : 'bg-white text-gray-900 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                    </div>
                    <span className="text-xs text-gray-500 mt-1 px-2">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
            <div className="flex items-center gap-3 max-w-2xl mx-auto">
              <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0">
                <Smile className="w-5 h-5 text-gray-600" />
              </button>
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all shadow-md flex-shrink-0"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
