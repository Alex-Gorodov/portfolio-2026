interface ButtonProps {
  role?: 'button' | 'link';
  href?: string;
  secondary?: boolean;
  label?: string;
  allyDescription?: string;
  onClick?: () => void;
}

export default function Button({
  role = 'button',
  href,
  secondary,
  label,
  allyDescription,
  onClick,
}: ButtonProps) {
  const className = `button ${secondary ? 'button--secondary' : ''}`;

  if (role === 'link') {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer nofollow">
        <span>{label ?? 'Button'}</span>
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      <span>{label ?? 'Button'}</span>
      <span className="visually-hidden">{allyDescription}</span>
    </button>
  );
}
