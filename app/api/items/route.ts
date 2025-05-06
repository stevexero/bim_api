import { NextRequest, NextResponse } from 'next/server';
import { verifyApiKey } from '@/app/lib/actions/actions';
import { createClient } from '@/app/lib/supabase/server';

// GET /api/items
// Get all items for a tenant
// API key required
export async function GET(request: NextRequest) {
  const rawKey = request.headers.get('x-api-key');
  if (!rawKey)
    return NextResponse.json({ error: 'Missing API key' }, { status: 401 });

  const tenantId = await verifyApiKey(rawKey);
  if (!tenantId)
    return NextResponse.json({ error: 'Invalid API key' }, { status: 401 });

  const supabase = await createClient();
  const { data, error } = await supabase
    .from('items')
    .select('*')
    .eq('tenant_id', tenantId);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data);
}

// POST /api/items
// Create a new item
// API key required
export async function POST(request: NextRequest) {
  const rawKey = request.headers.get('x-api-key');
  if (!rawKey)
    return NextResponse.json({ error: 'Missing API key' }, { status: 401 });

  const tenantId = await verifyApiKey(rawKey);
  if (!tenantId)
    return NextResponse.json({ error: 'Invalid API key' }, { status: 401 });

  const body = await request.json();
  const { item_number, item_name, description } = body;
  if (!item_number || !item_name) {
    return NextResponse.json(
      { error: 'item_number and item_name are required' },
      { status: 400 }
    );
  }

  const supabase = await createClient();
  const { data, error } = await supabase
    .from('items')
    .insert([{ tenant_id: tenantId, item_number, item_name, description }])
    .select('*')
    .single();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(data, { status: 201 });
}
