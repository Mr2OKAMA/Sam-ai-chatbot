'use client';

import { useState } from 'react';
import ChatInterface from '@/components/ChatInterface';
import Header from '@/components/Header';

export default function ChatPage() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-white">
      <Header />
      <div className="flex-1 overflow-hidden">
        <ChatInterface isLoading={isLoading} />
      </div>
    </div>
  );
}
