import '../Styles/Biography.scss';
export default function Biography({ text }: { text: string[] }) {
  return (
    <div className="Biography">
      {text.map((paragraph: string) => (
        <p>{paragraph}</p>
      ))}
    </div>
  );
}
