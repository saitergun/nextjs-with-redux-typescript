type Props = {
  children: React.ReactNode
}

const LayoutAuth: React.FC<Props> = ({ children }) => {
  return <div style={{ border: '4px solid blue', padding: 16 }}>{children}</div>
}

export default LayoutAuth
