export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  return (
    <main className='w-full flex flex-col md:flex-row items-start my-8'>
      <h1>Project {id}</h1>
    </main>
  );
}
