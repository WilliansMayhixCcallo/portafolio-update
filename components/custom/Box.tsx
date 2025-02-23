interface Props {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Box = ({ className, children, style, ...props }: Props) => {
  return (
    <div className={`${className}`} {...props} style={style}>
      {children}
    </div>
  )
}
