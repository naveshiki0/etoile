import { Star, Users, CheckCircle } from "lucide-react";
export const data = [
  { name: "Jan", value: 50 },
  { name: "Feb", value: 80 },
  { name: "Mar", value: 120 },
  { name: "Apr", value: 200 },
];
export const companies = [
  "楽天グループ株式会社",
  "富士通",
  "NEC",
  "野村証券",
  "三菱UFJモルガンスタンレー証券",
  "三菱電機",
  "ベイカレント・コンサルティング",
  "伊藤忠テクノソリューションズ",
  "NTTコムウェア",
  "住友林業",
  "森永乳業",
  "味の素AGF",
  "三菱商事プラスチック",
  "エン・ジャパン株式会社",
  "ファーストリテーリング",
  "DYM",
  "株式会社ノースサンド",
  "レイスグループ",
  "岡三証券",
  "レバレジーズ",
];

export const services = [
  {
    id: "s01",
    subtitle: "Intern",
    title: "インターン事業",
    heading: "ガクチカにもなる長期インターン",
    image: "/service/intern.jpg",
    description:
      "この長期インターンに参加したくてエトワールに来てくれる子がほとんどです！ \n営業初心者でも安心して始められ、普通の大学生では経験できない成長が得られます。",
    points: [
      {
        text: "営業力・育成力・経営力の習得",
        icon: CheckCircle,
        desc: "実践で身につく3大スキル。社会人基礎力も格段にアップ。",
      },
      {
        text: "実践型フィードバック体制",
        icon: Star,
        desc: "失敗も糧に。先輩からの手厚い指導でスピード成長。",
      },
      {
        text: "学年・学部不問で挑戦可能",
        icon: Users,
        desc: "どんな背景でもチャンスは平等。",
      },
    ],
  },
  {
    id: "s02",
    subtitle: "Event",
    title: "イベント事業",
    heading: "大学生が1から作るイベント事業",
    image: "/service/event.jpg",
    description:
      "大学生サークル・学生団体などと連携し、\nスポーツイベント・各種イベントを主催。学生と企業を結びつける事業です。",
    points: [
      {
        text: "学生主体のイベント企画・運営",
        icon: Users,
        desc: "アイデアから実行まで学生主導で推進。",
      },
      {
        text: "企業連携によるプロモーション",
        icon: CheckCircle,
        desc: "スポンサー企業との共同企画で現場経験。",
      },
      {
        text: "年間開催数多数・実績豊富",
        icon: Star,
        desc: "蓄積されたノウハウと成功事例。",
      },
    ],
  },
  {
    id: "s03",
    subtitle: "Support",
    title: "就活支援",
    heading: "未来を切り拓く就活支援",
    image: "/service/support.jpg",
    description:
      "個別相談や自己分析支援などを通じて、\n学生のキャリア形成を支援。信頼と実績の支援体制を整えています。",
    points: [
      {
        text: "自己分析・ES添削・模擬面接",
        icon: Star,
        desc: "基本を徹底的に磨くことで、自分だけの強みを発見。",
      },
      {
        text: "キャリアコーチによる個別支援",
        icon: Users,
        desc: "あなたに合ったアドバイスで志望企業対策も万全。",
      },
      {
        text: "大手・ベンチャー問わず内定実績",
        icon: CheckCircle,
        desc: "安心の支援実績と業界ネットワーク。",
      },
    ],
  },
];
