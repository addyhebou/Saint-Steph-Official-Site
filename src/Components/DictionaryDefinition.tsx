import { Definition } from '../Constants/Definition';
import '../Styles/DictionaryDefinition.scss';

export default function DictionaryDefinition(props: Definition) {
  return (
    <div className="DictionaryDefintion">
      <h1 className="phonetic">{props.phonetic}</h1>
      <div className="subtitle">
        <h2>{props.grapheme}</h2>
        <h2 className="article">{props.article}</h2>
      </div>
      <ol className="definition">
        {props.definitions.map((definition: string) => (
          <li key={definition}>{definition}</li>
        ))}
      </ol>
      <h2 className="synonyms">
        see <span>{props.synonyms.join(', ')}</span>
      </h2>
    </div>
  );
}
