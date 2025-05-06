import { NextRequest, NextResponse } from 'next/server';
import {
  createTestPhrases,
  deleteTestPhrases,
  updateTestPhrases,
} from '@/app/actions';
import { getTestPhrases } from '@/app/data';
import { verifyApiKey } from '@/app/lib/actions/actions';

async function requireApiKey(req: NextRequest): Promise<string | null> {
  const raw = req.headers.get('x-api-key');
  if (!raw) return null;
  return await verifyApiKey(raw);
}

export async function GET(request: NextRequest) {
  const tenant = await requireApiKey(request);
  if (!tenant) {
    return NextResponse.json(
      { error: 'Missing or invalid API key' },
      { status: 401 }
    );
  }

  const phrases = await getTestPhrases();
  return NextResponse.json(phrases);
}

export async function POST(request: NextRequest) {
  const tenant = await requireApiKey(request);
  if (!tenant) {
    return NextResponse.json(
      { error: 'Missing or invalid API key' },
      { status: 401 }
    );
  }

  const { phrase } = await request.json();
  const newPhrase = await createTestPhrases({ phrase });
  return NextResponse.json(newPhrase);
}

export async function DELETE(request: NextRequest) {
  const tenant = await requireApiKey(request);
  if (!tenant) {
    return NextResponse.json(
      { error: 'Missing or invalid API key' },
      { status: 401 }
    );
  }

  const { id } = await request.json();
  const deleted = await deleteTestPhrases({ id });
  return NextResponse.json(deleted);
}

export async function PATCH(request: NextRequest) {
  const tenant = await requireApiKey(request);
  if (!tenant) {
    return NextResponse.json(
      { error: 'Missing or invalid API key' },
      { status: 401 }
    );
  }

  const { id, phrase } = await request.json();
  const updated = await updateTestPhrases({ id, phrase });
  return NextResponse.json(updated);
}
