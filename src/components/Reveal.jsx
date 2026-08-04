import useReveal from '../useReveal.js';

export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, inView] = useReveal();
  return (
    <Tag ref={ref} className={`rv ${inView ? 'in' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
