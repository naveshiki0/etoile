// app/matching/page.tsx
export default function MatchingPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">企業マッチング</h1>
      <p className="text-gray-700 mb-6">学生の強みに合った企業をAI推薦。</p>
      {/* 企業の一覧やフィルター、マッチング提案など */}
      <div className="border rounded-lg p-4 shadow bg-white">
        <p className="text-gray-500">
          ここに企業マッチングの結果が表示されます。
        </p>
      </div>
    </main>
  );
}
