import { NextRequest, NextResponse } from 'next/server';
import { isAllowedEmail } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !isAllowedEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          error: '許可されたメールドメインのアドレスでログインしてください',
        },
        { status: 401 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: '実装予定',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { success: false, error: 'Authentication failed' },
      { status: 500 }
    );
  }
}
