Sam-ai-chatbot 使い方ガイド
📋 プロジェクト概要
Sam-ai-chatbot は、下水処理場の運転管理をサポートする AI チャットボットアプリケーションです。TypeScript と Next.js を使用した Web アプリケーションで、会社のメールアドレスでログインして利用します。

🛠️ セットアップ
1. 環境準備
bash
# リポジトリをクローン
git clone https://github.com/Mr2OKAMA/Sam-ai-chatbot.git
cd Sam-ai-chatbot

# 依存パッケージをインストール
npm install
2. 環境変数の設定
.env.example を参考に、.env.local ファイルを作成してください：

env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
OPENAI_API_KEY=sk-your-api-key
ALLOWED_EMAIL_DOMAIN=your-company.jp
AUTH_SECRET=your-secret-key-for-jwt
NEXT_PUBLIC_APP_URL=http://localhost:3000
必要な設定項目：

Supabase: 認証・データベース用
OpenAI API: AI チャットボット機能用
認可ドメイン: 特定のメールドメインでのみログインを許可
🚀 開発・実行方法
bash
# 開発サーバーの起動
npm run dev

# ブラウザで http://localhost:3000 にアクセス
bash
# 本番環境へのビルド
npm run build

# 本番環境の実行
npm start
📱 アプリケーションの使い方
ホーム画面
アプリケーションを開くと、「Sam AI Chatbot」というタイトルが表示されます
「チャットを開始」 ボタンをクリック
チャット画面
メッセージの送信

下部の入力欄にテキストを入力
送信ボタンをクリック、または Enter キーで送信
メッセージの表示

ユーザーのメッセージは右側に青色で表示
AI のレスポンスは左側にグレーで表示
メッセージごとに日時が記録される
会話内容

AI が下水処理場の運転管理に関する質問に対応します
例：「曝気池の管理方法は？」「スクリーン清掃の頻度は？」など
🏗️ 技術スタック
技術	用途
Next.js 14	React フレームワーク
React 18	UI コンポーネント
TypeScript	型安全な開発
Tailwind CSS	スタイリング
Supabase	認証・DB
OpenAI API	AI チャット機能
📁 ディレクトリ構成
Code
src/
├── app/               # Next.js App Router
│   ├── layout.tsx     # 共通レイアウト
│   ├── page.tsx       # ホームページ
│   ├── globals.css    # グローバルスタイル
│   ├── api/           # API エンドポイント
│   └── chat/          # チャットページ
├── components/        # React コンポーネント
│   ├── ChatInterface.tsx  # チャット画面
│   ├── MessageList.tsx    # メッセージ一覧
│   ├── InputBox.tsx       # 入力フォーム
│   └── Header.tsx         # ヘッダー
├── lib/               # ユーティリティ関数
└── types/             # TypeScript 型定義
⚙️ 主要機能
✅ 認証機能 - 会社メールアドレスでのセキュアなログイン
✅ チャット機能 - リアルタイム会話インターフェース
✅ メッセージ管理 - チャット履歴の保存と表示
✅ AI レスポンス - OpenAI API による自動応答

📝 注意事項
本アプリケーションは開発段階です（一部機能は「実装予定」です）
メールドメインによるアクセス制限があります
Supabase と OpenAI API のクレデンシャル設定が必須です
🔗 関連リンク
Next.js 公式ドキュメント
Supabase 公式ドキュメント
OpenAI API ドキュメント
