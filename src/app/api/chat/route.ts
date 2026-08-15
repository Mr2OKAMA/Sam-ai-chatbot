import { NextRequest, NextResponse } from 'next/server';
import { getOpenAIClient, SYSTEM_PROMPT } from '@/lib/openai';
import { ChatRequest, ChatResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, sessionId } = body as ChatRequest;

    if (!message || !sessionId) {
      return NextResponse.json(
        { success: false, error: 'Message and sessionId are required' },
        { status: 400 }
      );
    }

    const openai = getOpenAIClient();

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const assistantMessage =
      completion.choices[0].message.content || '応答できませんでした';

    const response: ChatResponse = {
      id: completion.id,
      content: assistantMessage,
      sessionId,
      createdAt: new Date(),
    };

    return NextResponse.json(
      { success: true, data: response },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process chat message' },
      { status: 500 }
    );
  }
}
