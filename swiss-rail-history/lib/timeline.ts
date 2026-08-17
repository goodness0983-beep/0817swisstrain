export type TimelineEra = {
  year: string;
  slug: string;
  station: string; // 站名／事件簡稱
  title: string;
  summary: string;
};

// 依時間順序排列的瑞士鐵路發展里程碑
export const timeline: TimelineEra[] = [
  {
    year: "1847",
    slug: "spanisch-brotli-bahn",
    station: "蘇黎世—巴登",
    title: "西班牙麵包鐵路通車",
    summary:
      "瑞士境內第一條完全由瑞士人興建與經營的鐵路正式啟用，將原本三小時的馬車車程縮短至四十五分鐘，揭開瑞士鐵路時代的序幕。",
  },
  {
    year: "1871–1882",
    slug: "gotthard-tunnel",
    station: "格申嫩—艾羅洛",
    title: "聖哥達隧道貫穿阿爾卑斯",
    summary:
      "為打通瑞士南北的天然屏障，工程團隊耗時十年鑿穿聖哥達山體，完工時是當代最長的鐵路隧道，也奠定瑞士成為歐洲南北轉運樞紐的地位。",
  },
  {
    year: "1898–1902",
    slug: "founding-of-sbb",
    station: "全國",
    title: "公投催生瑞士聯邦鐵路",
    summary:
      "在「瑞士鐵路屬於瑞士人民」的訴求下，全民公投以壓倒性多數支持鐵路收歸國有，瑞士聯邦鐵路（SBB CFF FFS）自此成立並陸續接管各私營路線。",
  },
  {
    year: "1912",
    slug: "jungfraubahn",
    station: "少女峰",
    title: "少女峰鐵路登上歐洲屋脊",
    summary:
      "歷經十六年施工，齒軌登山鐵路穿越艾格峰與僧侶峰的岩層，將乘客送抵海拔三千四百五十四公尺的少女峰車站，成為歐洲海拔最高的鐵路車站。",
  },
  {
    year: "1920s–1960s",
    slug: "electrification",
    station: "全國電氣化",
    title: "「白煤」時代：水力發電全面電氣化",
    summary:
      "缺乏煤礦的瑞士轉而利用豐沛的阿爾卑斯水力發電，大規模將鐵路網電氣化，不僅擺脫燃煤進口依賴，也讓瑞士鐵路成為全球電氣化程度最高的路網之一。",
  },
  {
    year: "1930",
    slug: "glacier-express",
    station: "策馬特—聖莫里茲",
    title: "冰河列車啟航",
    summary:
      "以「全球最慢的特快車」聞名的冰河列車開通，全景車廂穿越二百九十一座橋樑與九十一條隧道，成為體驗阿爾卑斯風光最具代表性的路線之一。",
  },
  {
    year: "2008",
    slug: "unesco-world-heritage",
    station: "阿爾布拉—伯連納",
    title: "雷蒂亞鐵路列入世界遺產",
    summary:
      "阿爾布拉與伯連納路線因其兼具工程創新與景觀融合的成就，獲聯合國教科文組織列為世界文化遺產，是全球極少數獲此殊榮的現役鐵路系統。",
  },
  {
    year: "2016",
    slug: "gotthard-base-tunnel",
    station: "厄斯特費爾德—博迪奧",
    title: "聖哥達基線隧道通車",
    summary:
      "全長五十七公里的聖哥達基線隧道啟用，成為全世界最長、最深的鐵路隧道，將蘇黎世到米蘭的行車時間大幅縮短，象徵瑞士鐵路工程的當代巔峰。",
  },
];
