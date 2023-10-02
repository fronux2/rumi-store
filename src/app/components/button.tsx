interface Props {
  children: React.ReactNode
  className?: string
  functionButton?: () => void

}

const Button: React.FunctionComponent<Props> = ({ children, functionButton, className = 'rounded-md border-x-violet-700 bg-slate-500 w-32 h-12' }: Props) => {
  return <button onClick={functionButton} className={className}>{children}</button>
}

export default Button
