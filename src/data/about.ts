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
