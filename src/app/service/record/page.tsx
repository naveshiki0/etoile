// app/interviews/page.tsx
export default function InterviewPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">面談記録</h1>
      <p className="text-gray-700 mb-6">
        過去面談を蓄積、振り返りや今後の計画を支援。
      </p>
      {/* 面談の履歴や新規登録フォームなど */}
      <div className="border rounded-lg p-4 shadow bg-white">
        <p className="text-gray-500">ここに面談記録の内容が表示されます。</p>
      </div>
    </main>
  );
}
