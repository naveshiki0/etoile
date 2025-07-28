"use client";

import React from "react";
import Image from "next/image";

export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

interface DecorativeImageProps {
  /** 画像の配置位置 */
  position?: Position;
  /** 画像の幅（px） */
  width?: number;
  /** 画像の高さ（px） */
  height?: number;
  /** 追加のスタイルや変形を与えたい場合 */
  className?: string;
}

const positionClasses: Record<Position, string> = {
  "top-left": "top-0 left-0",
  "top-right": "top-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

const DecorativeImage: React.FC<DecorativeImageProps> = ({
  position = "top-right",
  width = 150,
  height = 150,
  className = "",
}) => {
  return (
    <div
      className={`absolute pointer-events-none ${positionClasses[position]} ${className}`}
    >
      <Image
        src="/treat03.png"
        alt="Decorative"
        width={width}
        height={height}
        priority
      />
    </div>
  );
};

export default DecorativeImage;
