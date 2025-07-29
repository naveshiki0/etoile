import { Award, Sun, BadgeCheck, Search, BookOpen } from "lucide-react";

export const values = [
  {
    title: "この主体性 (Individual Agency)",
    body: `私たちは、誰かの指示を待つ集団ではない。一人ひとりが「自分ごと」として課題を捉え、自らの意志で考え、決断し、行動する。組織の歯車ではなく、物語を動かす主人公であること。それが、全ての行動の起点となる、私たちの核です。`,
  },
  {
    title: "好奇心に懸けろ (Bet on Passion)",
    body: `正解が約束された道よりも、心が躍る「なぜ？」に、私たちは懸ける。論理や常識、データだけでは、未来は拓けない。一見、非合理に見えるほどの純粋な好奇心と情熱こそが、誰も見たことのない価値を生み出すと、私たちは本気で信じています。`,
  },
  {
    title: "本質を突け (Pierce the Essence)",
    body: `表面的な事象や、耳障りの良い言葉に惑わされない。私たちは常に「なぜ？」を繰り返し、物事の根源にある「本質」を鋭く見抜こうと努めます。小手先の解決策ではなく、核心を突く一手が、個人と社会に本質的な変化をもたらす。その探究を、私たちは止めません。`,
  },
  {
    title: "圧巻の挑戦 (Go Bold, Go Beyond)",
    body: `現状維持は、緩やかな後退です。私たちは常に、自他ともに「圧巻」されるほどの高い基準を掲げ、過去の成功や既存の枠組みを軽々と超えていく。コンフォートゾーンの外にしかない本当の成長を楽しみ、失敗を恐れず、大胆な一歩を踏み出します。`,
  },
  {
    title: "最高の仲間であれ (All for One)",
    body: `最高の仲間とは、単なる仲良しグループではない。同じ頂きを目指し、互いの才能に心から敬意を払い、弱さを補い合い、背中を預けられる存在です。一人の天才ではなく、多様な才能が共鳴し合うチームで、一人では決して見られない景色を見にいく。そのために、私たちは最高の仲間であり続けます。`,
  },
  {
    title: "敬意を心に、感謝を力に (Respect is Our Currency)",
    body: `私たちの活動は、私たちだけで成り立つものではありません。コミュニティの仲間、パートナー、地域社会、そして私たちの挑戦を支えてくれる全ての人々へ。その存在への敬意（リスペクト）を常に心の中心に置きます。そして、その感謝の気持ちを、社会をより良くするための次なる挑戦へのエネルギーへと変えていきます。`,
  },
];
export const icons = [Award, Sun, BadgeCheck, Search, BookOpen, BadgeCheck];

export const dataGrade = {
  labels: ["1回生", "2回生", "3回生", "4回生"],
  datasets: [
    {
      label: "学年構成比",
      data: [4, 8, 57, 31],
      backgroundColor: ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"],
      borderWidth: 1,
    },
  ],
};

export const dataGender = {
  labels: ["男性", "女性"],
  datasets: [
    {
      label: "男女比",
      data: [87, 13],
      backgroundColor: ["#2563EB", "#FBBF24"],
      borderWidth: 1,
    },
  ],
};

export const dataIntern = {
  labels: ["なし"],
  datasets: [
    {
      label: "インターン経験",
      data: [100],
      backgroundColor: ["#3B82F6"],
      borderWidth: 1,
    },
  ],
};

export const dataFaculty = {
  labels: ["文系", "理系"],
  datasets: [
    {
      label: "学部比率",
      data: [60, 40],
      backgroundColor: ["#2563EB", "#10B981"],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        font: { size: 16 },
        color: "#1E40AF",
      },
    },
    tooltip: {
      enabled: true,
      bodyFont: { size: 16 },
    },
  },
};

export const bluePalette = ["#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];

export const universityInfo = [
  "名古屋大学",
  "神戸大学",
  "関西大学",
  "関西学院大学",
  "同志社大学",
  "立命館大学",
  "立教大学",
  "名城大学",
  "中京大学",
  "京都産業大学",
  "近畿大学",
  "龍谷大学",
  "愛知大学",
  "摂南大学",
  "神戸学院大学",
  "京都橘大学",
  "他",
];

export const companyInfo = [
  { label: "社名", value: "株式会社エトワール" },
  { label: "設立", value: "2022年10月11日" },
  {
    label: "所在地",
    value: "〒611-0042 京都府宇治市小倉町南堀池79-8",
  },
  { label: "資本金", value: "百万円" },
  { label: "代表取締役", value: "大槻将樹" },
  { label: "従業員数", value: "100名" },
  {
    label: "事業内容",
    value: "イベント事業、インターン事業、就活支援",
  },
];
