'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Simple loading state during SSR
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-white text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  const featureCards = [
    { icon: "📄", title: "AI-Powered Writing", description: "Generate high-quality content effortlessly." },
    { icon: "⚙️", title: "Customization", description: "Fine-tune the content to match your needs." },
    { icon: "📖", title: "Templates", description: "Use pre-built templates for quick content." },
    { icon: "💬", title: "Collaboration", description: "Work together and refine your text." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white flex flex-col items-center justify-center px-6">
      {/* Main Content */}
      <div className="max-w-3xl text-center z-10">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          AI Content <span className="text-yellow-400">Generator</span>
        </h1>

        <p className="text-xl text-gray-200 mb-6 font-semibold">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>

        <Button
          className="px-6 py-3 text-lg font-bold bg-yellow-400 text-black rounded-xl shadow-lg hover:bg-yellow-500"
          onClick={() => router.push('/sign-in')}
        >
          <span>Log In →</span>
        </Button>
      </div>

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-8 mt-16 z-10">
        {featureCards.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white text-black rounded-lg shadow-lg text-center w-48 backdrop-blur-sm bg-opacity-90"
          >
            <div className="text-4xl mb-3">{feature.icon}</div>
            <h3 className="font-bold text-lg">{feature.title}</h3>
            <p className="text-sm text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}