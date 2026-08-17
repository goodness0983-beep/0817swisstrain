import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: { email?: string; path?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "請求格式錯誤" }, { status: 400 });
  }

  const email = (body.email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "請輸入有效的電子郵件地址" }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase 尚未設定，請聯絡網站管理員" },
      { status: 503 }
    );
  }

  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({ email, source_path: body.path || null });

  if (error) {
    // unique constraint violation -> 視為已訂閱，回傳成功訊息即可
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, message: "這個信箱已經訂閱過囉！" });
    }
    return NextResponse.json({ error: "訂閱失敗，請稍後再試" }, { status: 500 });
  }

  return NextResponse.json({ ok: true, message: "訂閱成功，感謝關注瑞士鐵路史！" });
}
