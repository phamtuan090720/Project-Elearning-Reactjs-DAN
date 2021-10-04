import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function RichTextEdit({ form }) {
    const [data, setData] = React.useState("");
    const render = React.useCallback((form, data) => {
        return <CKEditor
            editor={ClassicEditor}
            config={{
                removePlugins: ["EasyImage", "ImageUpload"]
            }}
            data={data}
            onChange={(event, editor) => {
                const data = editor.getData();
                setData(data)
                form.setFieldsValue({
                    content: data
                })
            }}
        />
    }, [])

    return (
        <div className='container'>
            {render(form, data)}
        </div>
    )
}