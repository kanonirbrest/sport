import React, {useState} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AddArticle() {
  
  const [editorValue, setEditorValue] = useState('<p>Hello from CKEditor 5!</p>');
  
  let onChangeEditorValue = (event, editor) => {
    console.log(event, '----------', editor);
  }
  
  const onInitEditor = (editor) => {
    console.log('Editor is ready to use!', editor);
  }



  return (
    <div>
      <h1>add Article</h1>

      <CKEditor
        editor={ClassicEditor}
        data={editorValue}
        onInit={onInitEditor}
        onChange={onChangeEditorValue}
      />
    </div>
  )
}
// onBlur={(event, editor) => {
//   console.log('Blur.', editor);
// }}
// onFocus={(event, editor) => {
//   console.log('Focus.', editor);
// }}