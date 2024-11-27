export default function Badgers({ color, type, children }) {
  return <button className={`badgers ${color} ${type} `}>{children}</button>;
}
