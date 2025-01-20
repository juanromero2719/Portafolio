// componentes
import Notes from './components/notes';

// hooks
import { useNotes } from './hooks/useNotes';

export default function Notas() {

    const { notes } = useNotes();

  return (
    <div>
      <Notes notes={notes} />
    </div>
  );
}
