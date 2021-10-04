import React, { useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useSelector } from 'react-redux';

export default function RichTextEdit({ form }) {
    const { lesson } = useSelector(state => state.lessonManageReducer);
    const [data, setData] = React.useState(lesson?.content ? lesson?.content : "");
    useEffect(() => {
        if (lesson?.content) {
            setData(lesson?.content)
        }
        else {
            setData("")
        }
    }, [lesson])
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