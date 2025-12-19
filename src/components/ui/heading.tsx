type HeadingProps = {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} 

export default function Heading({ children, variant }: HeadingProps) {
  switch (variant) {
    case "h1":
      return <h1 className="text-4xl font-bold text-secondary">{children}</h1>
    case "h2":
      return <h2 className="text-3xl font-bold">{children}</h2>
    case "h3":
      return <h3 className="text-2xl font-bold">{children}</h3>
  }
}