'use client';

import { useState } from 'react';
import MessageList from './MessageList';
import InputBox from './InputBox';

interface ChatInterfaceProps {
  isLoading: boolean;
}

export default function ChatInterface({ isLoading }: ChatInterfaceProps) {
  const [messages, setMessages] = useState([
    {
      id: '1',
      role: 'assistant' as const,
      content:
        'こんにちは！下水処理場の運転管理に関することでしたら、何でもお気軽にお尋ねください。',
      createdAt: new Date(),
    },
  ]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: text,
      createdAt: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: `「${text}」についてのアドバイスです。（実装予定）`,
        createdAt: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <MessageList messages={messages} isLoading={isLoading} />
      <InputBox onSendMessage={handleSendMessage} disabled={isLoading} />
    </div>
  );
}
