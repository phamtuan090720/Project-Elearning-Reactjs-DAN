import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function RichTextEdit({ form }) {
    const [data, setData] = React.useState("")
    return (
        <div className='container'>
            <CKEditor
                editor={ClassicEditor}
                config={{
                    removePlugins: ["EasyImage", "ImageUpload"]
                }}
                data={data}
                onChange={(event, editor) => {

                    const data = editor.getData();
                    setData(data)
                    form.setFieldsValue({
                        description: data
                    })
                    // console.log({ event, editor, data });
                }}
            />
        </div>
    )
}