import React, { useState, useEffect } from 'react';
import { generateMultipleJson } from 'dynamic-json-generator';
import Post from './models/post';

const postTemplate = {
  id: 'uuid',
  title: 'title',
  body: 'body',
  imageUrl: 'imageUrl',
};

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [expandedPosts, setExpandedPosts] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const data = generateMultipleJson(postTemplate, 12,'mm') as Post[];
    setPosts(data);
    console.log(data);
  }, []);

  const togglePost = (id: string) => {
    setExpandedPosts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <header className="bg-white shadow mb-8">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            DYNAMIC JSON GENERATOR NPM PACKAGE DEMO APP
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="bg-white overflow-hidden shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl">
              <img className="h-48 w-full object-cover" src={post.imageUrl} alt={post.title} />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">
                  {expandedPosts[post.id] ? post.body : `${post.body.substring(0, 100)}...`}
                </p>
                <button 
                  onClick={() => togglePost(post.id)} 
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200 mb-2"
                >
                  {expandedPosts[post.id] ? 'Read less' : 'Read more'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}