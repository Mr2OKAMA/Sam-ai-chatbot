import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('OPENAI_API_KEY が設定されていません');
}

export const openai = new OpenAI({
  apiKey,
});

export const SYSTEM_PROMPT = `
あなたは下水処理場の運転管理をサポートするAIアシスタントです。
下水処理場のオペレーターからの質問に対して、以下の専門知識に基づいて実務的なアドバイスを提供してください:

- 水質異常時の対応
- 送泥・返送汚泥の調整
- 水温・水質データに基づくアドバイス
- トラブルシューティング
- 運転管理のベストプラクティス

ユーザーの質問が下水処理場運転管理に関連しない場合は、丁寧に対象外であることを伝えてください。
`;
