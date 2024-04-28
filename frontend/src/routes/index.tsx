import { Link, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div>
      <h1>Index</h1>
      <Link to="/about">About</Link>
    </div>
  );
}
