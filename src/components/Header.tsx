'use client';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sam AI Chatbot</h1>
            <p className="text-sm text-gray-600">下水処理場運転管理アシスタント</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm text-gray-600 hover:text-gray-900">
              ヘルプ
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-900">
              ログアウト
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
