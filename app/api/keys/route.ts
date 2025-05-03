import { NextRequest, NextResponse } from 'next/server';
import { createApiKey, verifyApiKey } from '@/app/actions';

// Create a new API key
export async function POST(request: NextRequest) {
  const { name, tenant_id } = await request.json();

  if (!name || !tenant_id) {
    return NextResponse.json(
      { error: 'Name and tenant_id are required' },
      { status: 400 }
    );
  }

  const data = await createApiKey({ name, tenant_id });

  if (!data) {
    return NextResponse.json(
      { error: 'Failed to create API key' },
      { status: 500 }
    );
  }

  return NextResponse.json({ apiKey: data }, { status: 201 });
}

// Get API key by tenant_id
export async function GET(req: NextRequest) {
  const raw = req.headers.get('x-api-key');
  if (!raw)
    return NextResponse.json({ error: 'Missing API key' }, { status: 401 });

  const tenant = await verifyApiKey(raw);
  if (!tenant)
    return NextResponse.json(
      { error: 'Invalid or revoked key' },
      { status: 401 }
    );

  return NextResponse.json({ tenant }, { status: 200 });
}
