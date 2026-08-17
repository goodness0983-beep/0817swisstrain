import type { Metadata } from "next";
import TimelineRail from "@/components/TimelineRail";

export const metadata: Metadata = {
  title: "時間軸",
  description:
    "瑞士鐵路發展時間軸：從 1847 年西班牙麵包鐵路，到 2016 年聖哥達基線隧道，一次看完近兩百年的關鍵里程碑。",
};

export default function TimelinePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <p className="font-mono text-[11px] uppercase tracking-widest text-glacier">
        Timeline
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink sm:text-4xl">
        瑞士鐵路時間軸
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/65">
        沿著這條鋼軌，從 1847 年的第一聲汽笛，走到二十一世紀貫穿阿爾卑斯山脈的基線隧道。
      </p>

      <div className="mt-14">
        <TimelineRail />
      </div>
    </div>
  );
}
