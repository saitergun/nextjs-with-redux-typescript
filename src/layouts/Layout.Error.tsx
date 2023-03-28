type Props = {
  children: React.ReactNode
}

const LayoutError: React.FC<Props> = ({ children }) => {
  return <div style={{ border: '4px solid red', padding: 16 }}>{children}</div>
}

export default LayoutError
