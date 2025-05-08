import Editor from '@monaco-editor/react';

interface HTMLEditorProps {
  value: string;
  onChange: (value: string | undefined) => void;
}

const HTMLEditor = ({ value, onChange }: HTMLEditorProps) => {
  return <Editor defaultLanguage="html" defaultValue={value} onChange={onChange} theme="vs-dark" />;
};

export default HTMLEditor;
