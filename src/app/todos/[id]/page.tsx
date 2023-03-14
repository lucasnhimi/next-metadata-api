async function getTodo(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return data;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);
  return { title: todo.title };
}

export default async function TodoPage({ params }: { params: { id: string } }) {
  const todo = await getTodo(params.id);
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
}
