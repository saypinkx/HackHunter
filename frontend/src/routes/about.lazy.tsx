import { createLazyFileRoute } from '@tanstack/react-router';
import { DatePicker } from 'antd';
export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <div>
      <DatePicker />
      <p>Hello World</p>
    </div>
  );
}
