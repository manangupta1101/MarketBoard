import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Use service role to bypass RLS — this runs server-side only
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export const POST = async (request: Request) => {
  const { email, otp } = await request.json();

  if (!email || !otp) {
    return NextResponse.json({ success: false, error: 'Missing email or OTP' }, { status: 400 });
  }

  const { data: entry } = await supabaseAdmin
    .from('removed_emails')
    .select('re_registration_otp')
    .eq('email', email.toLowerCase())
    .single();

  if (!entry || entry.re_registration_otp !== otp) {
    return NextResponse.json({ success: false, error: 'Invalid OTP' }, { status: 400 });
  }

  // OTP verified — remove the block
  await supabaseAdmin
    .from('removed_emails')
    .delete()
    .eq('email', email.toLowerCase());

  return NextResponse.json({ success: true });
};
