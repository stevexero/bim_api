'use client';

import { useCallback, useEffect, useState } from 'react';

interface Phrase {
  id: number;
  phrase: string;
}

export default function Phrases() {
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [phraseText, setPhraseText] = useState('');
  const [phrases, setPhrases] = useState<Phrase[]>([]);
  const [updatePhraseActive, setUpdatePhraseActive] = useState<boolean>(false);
  const [selectedPhrase, setSelectedPhrase] = useState<number>(0);
  const [message, setMessage] = useState<string>('');

  // Load the key once on mount
  useEffect(() => {
    const stored = localStorage.getItem('apiKey');
    if (stored) setApiKey(stored);
  }, []);

  // Persist whenever it changes
  useEffect(() => {
    if (apiKey) {
      localStorage.setItem('apiKey', apiKey);
    } else {
      localStorage.removeItem('apiKey');
    }
  }, [apiKey]);

  const callApi = useCallback(
    async (path: string, options: RequestInit = {}): Promise<Response> => {
      if (!apiKey) {
        setMessage('❗️ Please enter your API key');
        throw new Error('Missing API key');
      }

      const headers = {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        ...(options.headers || {}),
      };

      const res = await fetch(path, { ...options, headers });
      if (res.status === 401) {
        setMessage('❌ Invalid or missing API key');
      } else if (!res.ok) {
        setMessage(`⚠️ Error: ${res.statusText}`);
      } else {
        setMessage('');
      }
      return res;
    },
    [apiKey]
  );

  const fetchPhrases = useCallback(async () => {
    try {
      const res = await callApi('/api/test');
      const data = await res.json();
      setPhrases(data);
    } catch (error) {
      console.error('Error fetching phrases:', error);
    }
  }, [callApi]);

  useEffect(() => {
    fetchPhrases();
  }, [apiKey, fetchPhrases]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const phrase = formData.get('phrase') as string;
    try {
      const res = await callApi('/api/test', {
        method: 'POST',
        body: JSON.stringify({ phrase }),
      });
      if (res.ok) {
        fetchPhrases();
      }
    } catch (error) {
      console.error('Error adding phrase:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await callApi('/api/test', {
        method: 'DELETE',
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        fetchPhrases();
      }
    } catch (error) {
      console.error('Error deleting phrase:', error);
    }
  };

  const handleUpdate = async (id: number) => {
    try {
      const res = await callApi('/api/test', {
        method: 'PATCH',
        body: JSON.stringify({ id, phrase: phraseText }),
      });
      if (res.ok) {
        setUpdatePhraseActive(false);
        fetchPhrases();
      }
    } catch (error) {
      console.error('Error updating phrase:', error);
    }
  };

  return (
    <div>
      <h1>Phrases</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='phrase' />
        <button type='submit'>Add Phrase</button>
      </form>
      {phrases.map((ph) => (
        <div key={ph.id}>
          <p>{ph.phrase}</p>
          {!updatePhraseActive && (
            <button
              type='button'
              onClick={() => {
                setUpdatePhraseActive(true);
                setSelectedPhrase(ph.id);
              }}
            >
              Update Phrase
            </button>
          )}
          {updatePhraseActive && ph.id === selectedPhrase && (
            <>
              <input
                type='text'
                name='phrase'
                value={phraseText}
                onChange={(e) => setPhraseText(e.target.value)}
              />
              <button type='button' onClick={() => handleUpdate(ph.id)}>
                Update Phrase
              </button>
              <button
                type='button'
                onClick={() => setUpdatePhraseActive(false)}
              >
                Cancel
              </button>
            </>
          )}
          <button type='button' onClick={() => handleDelete(ph.id)}>
            Delete Phrase
          </button>
        </div>
      ))}
      {message && <p>{message}</p>}
    </div>
  );
}
