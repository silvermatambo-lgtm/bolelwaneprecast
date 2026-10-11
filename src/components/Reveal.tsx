import { useInView } from '../hooks/useInView';

export default function Reveal({
  children,
  className = '',
  delay = '',
  anim = 'animate-fade-up',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  anim?: string;
}) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `${anim} ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}
