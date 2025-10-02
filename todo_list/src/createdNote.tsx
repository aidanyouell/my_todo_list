import './createdNote.css'

type CreatedNoteProps = {
  title: string;
  description: string;
  onDelete: () => void;
};

export default function CreatedNote({ title, description, onDelete }: CreatedNoteProps) {
    return (
        <div id="note">
            <h1 id="title">{title}</h1>
            <h2 id="description">{description}</h2>
            <button id="delete" onClick={onDelete}>Delete</button>
        </div>
    );
}