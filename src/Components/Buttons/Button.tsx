interface ButtonProps {
  secondary?: boolean;
  label?: string;
  onClick?: () => void;
}

export default function Button({secondary, label, onClick}: ButtonProps) {
  return (
    <button className={`button ${secondary ? 'button--secondary' : ''}`} onClick={onClick}>
      <span>{label ?? 'Button'}</span>
    </button>
  )
}
