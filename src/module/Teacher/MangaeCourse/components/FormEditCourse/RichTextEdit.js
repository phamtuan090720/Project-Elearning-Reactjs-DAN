import React, { useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useSelector } from 'react-redux';

export default function RichTextEdit({ form }) {
    const { courseEdit } = useSelector(state => state.manageCourseReducer);
    const [data, setData] = React.useState(courseEdit?.description ? courseEdit?.description : "");
    useEffect(() => {
        if (courseEdit?.description) {
            setData(courseEdit?.description)
        }
        else {
            setData("")
        }
    }, [courseEdit])
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
                    description: data
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