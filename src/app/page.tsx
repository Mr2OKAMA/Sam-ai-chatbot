export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Sam AI Chatbot
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          下水処理場運転管理AIチャットボット
        </p>
        <p className="text-sm text-gray-500 mb-8">
          会社のメールアドレスでログインしてください
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/chat"
            className="rounded-lg bg-blue-500 px-8 py-3 text-white font-semibold hover:bg-blue-600 transition-colors"
          >
            チャットを開始
          </a>
        </div>
      </div>
    </main>
  );
}
