import { VFC, useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './Editor.module.css';

type EditorProps = {
	defaultValue: string,
	language: string,
	onContentChange?: (newContent: string) => void
}

export const Editor: VFC<EditorProps> = ({ defaultValue, language, onContentChange }) => {
	const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
	useEffect(() => {
		const handler = editor?.onKeyUp(() => {
			if (onContentChange) {
				onContentChange(editor.getValue())
			}
		})
		return () => { handler?.dispose() }
	}, [editor])

	useEffect(() => {
		const model = monaco.editor.createModel(defaultValue, language)
		editor?.setModel(model)
		if (onContentChange) {
			onContentChange(defaultValue)
		}
		return () => { model.dispose() }
	}, [language, defaultValue])

	const monacoEl = useRef(null);
	useEffect(() => {
		if (monacoEl) {
			setEditor((editor) => {
				if (editor) return editor;
				if (onContentChange) {
					onContentChange(defaultValue)
				}

				return monaco.editor.create(monacoEl.current!, {
					value: defaultValue,
					language: 'python',
					automaticLayout: true,
					theme: "vs-dark"
				});
			});
		}

		return () => editor?.dispose();
	}, [monacoEl.current]);

	return <div className={styles.Editor} ref={monacoEl}></div>;
};
