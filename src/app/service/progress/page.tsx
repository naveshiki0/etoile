// app/progress/page.tsx
export default function ProgressPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">進捗管理</h1>
      <p className="text-gray-700 mb-6">
        学習・活動のログと目標に沿ったサポート。
      </p>
      {/* ここに進捗ログのリストや追加フォームなどを追加 */}
      <div className="border rounded-lg p-4 shadow bg-white">
        <p className="text-gray-500">
          ここに進捗の一覧や記録フォームが表示されます。
        </p>
      </div>
    </main>
  );
}
