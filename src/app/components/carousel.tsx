type Props = {
    children?: React.ReactNode
  }
  
  const Carousel: React.FunctionComponent<Props> = ({children}) => {
    return <div className="w-full h-80 bg-emerald-400">
      {children}
    </div>
  }
  
  export default Carousel