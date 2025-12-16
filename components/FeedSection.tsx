import React from 'react';
import { Post } from '../types';
import { ThumbsUp, MessageSquare, Repeat, Send } from 'lucide-react';

interface FeedSectionProps {
  posts: Post[];
  loading: boolean;
}

export const FeedSection: React.FC<FeedSectionProps> = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="space-y-4 mt-2">
        {[1, 2].map((i) => (
          <div key={i} className="bg-white p-4 rounded-lg border border-gray-200 animate-pulse">
            <div className="flex gap-3 items-center mb-4">
               <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
               <div className="flex-1">
                 <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
                 <div className="h-3 bg-gray-200 rounded w-1/4"></div>
               </div>
            </div>
            <div className="h-24 bg-gray-200 rounded mb-4"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2 mt-2">
      {/* Filter Bar */}
      <div className="bg-white p-3 rounded-lg border border-gray-200 flex gap-2 overflow-x-auto">
        <button className="px-4 py-1.5 bg-green-700 text-white rounded-full text-sm font-semibold whitespace-nowrap">All</button>
        <button className="px-4 py-1.5 border border-gray-400 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-semibold whitespace-nowrap">Images</button>
        <button className="px-4 py-1.5 border border-gray-400 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-semibold whitespace-nowrap">Videos</button>
        <button className="px-4 py-1.5 border border-gray-400 text-gray-600 hover:bg-gray-100 rounded-full text-sm font-semibold whitespace-nowrap">Articles</button>
      </div>

      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="px-4 pt-3 pb-2 flex gap-3">
                <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded object-cover" />
                <div>
                    <div className="flex items-center gap-1">
                         <h3 className="text-sm font-semibold text-gray-900 hover:text-linkedin-blue hover:underline cursor-pointer">{post.author}</h3>
                         <span className="text-gray-400 text-xs">• Following</span>
                    </div>
                    <p className="text-xs text-gray-500">23,402 followers</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                        <span>{post.timeAgo}</span>
                        <span>•</span>
                        <span className="text-gray-500">Edited</span>
                        <span>•</span>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="w-3.5 h-3.5" focusable="false">
                            <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H9.5v-.27a.75.75 0 01.22-.53l.56-.56a.75.75 0 01.53-.22h.27a.75.75 0 00.53-.22l.27-.27a.75.75 0 000-1.06l-.27-.27a.75.75 0 00-.53-.22h-.27A.75.75 0 0110 4.27v-.27A.75.75 0 0110.27 3.47l.27-.27A.75.75 0 0111 3a5 5 0 012.21 8.25z"></path>
                        </svg>
                    </div>
                </div>
                <div className="ml-auto">
                    <button className="text-gray-600 hover:bg-gray-100 p-1 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="px-4 py-1">
                <p className="text-sm text-gray-900 leading-normal">{post.content}</p>
            </div>

            {/* Image */}
            {post.image && (
                <div className="mt-2 w-full">
                    <img src={post.image} alt="Post content" className="w-full h-auto object-cover max-h-[500px]" />
                </div>
            )}

            {/* Stats */}
            <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
                <div className="flex items-center gap-1">
                     <div className="flex -space-x-1">
                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center z-20 border border-white">
                             <ThumbsUp className="w-2.5 h-2.5 text-white fill-current" />
                        </div>
                        <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center z-10 border border-white">
                             <svg viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5 text-white"><path d="M8 13.55a.65.65 0 01-.48-.22l-5.63-5.94a4.18 4.18 0 016.11-5.59 4.16 4.16 0 016.11 5.57l-5.63 5.95a.65.65 0 01-.48.23z"></path></svg>
                        </div>
                     </div>
                     <span className="text-xs text-gray-500 hover:text-linkedin-blue hover:underline cursor-pointer ml-1">{post.likes}</span>
                </div>
                <div className="text-xs text-gray-500 hover:text-linkedin-blue hover:underline cursor-pointer">
                    {post.comments} comments • 24 reposts
                </div>
            </div>

            {/* Actions disabled */}
            <div className="px-2 py-2 grid grid-cols-4 gap-2 border-t border-gray-100">
                {[
                  { icon: ThumbsUp, label: 'Like' },
                  { icon: MessageSquare, label: 'Comment' },
                  { icon: Repeat, label: 'Repost' },
                  { icon: Send, label: 'Send' }
                ].map((action) => (
                  <div
                    key={action.label}
                    className="flex items-center justify-center gap-2 px-3 py-2 rounded flex-1 text-gray-400 bg-gray-50 border border-gray-200 cursor-not-allowed select-none"
                    aria-disabled="true"
                    title={`${action.label} disabled`}
                  >
                    <action.icon className="w-5 h-5" />
                    <span className="text-sm font-semibold">{action.label}</span>
                  </div>
                ))}
            </div>
        </div>
      ))}
    </div>
  );
};