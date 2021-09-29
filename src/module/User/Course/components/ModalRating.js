import { Modal, Form, Rate, Input } from 'antd';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { rating } from '../reducer/action.js';
import * as Type from '../reducer/type.js';
import {useParams} from 'react-router-dom';
const CollectionCreateForm = ({ visible, onCreate, onCancel, user_review }) => {
    const [form] = Form.useForm();
    // console.log('user_review', user_review)
    return (
        <Modal
            visible={visible}
            title="Comment"
            okText="Post"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        onCreate(values,form.resetFields);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="horizontal"
                name="form_in_modal"
                initialValues={{
                    rate: user_review?.user_rate === null ? 0 : user_review?.user_rate,
                    review: user_review?.user_comment === null ? "" : user_review?.user_comment
                }}
            >
                <Form.Item name="review" label="review" rules={[
                    {
                        required: true,
                        message: 'Please input the review of rating!',
                    },
                ]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item
                    name="rate"
                    label="rate"
                >
                    <Rate />
                </Form.Item>
            </Form>
        </Modal>
    );
};
const ModalError = (resetFields,dispatch) => {
    return Modal.error({
        content: "You have not completed 50% of the course so you cannot rate the course",
        title: "This is a notification message",
        onOk(){
            resetFields();
            dispatch({
                type: Type.CLOSE_MODAL_RATING
            })
        }
    })
}
export default function ModalRating() {
    const { course } = useSelector(state => state.userCouserReducerData)
    const { isOpenModal } = useSelector(state => state.userCourseReducer)
    const param = useParams();
    const dispatch = useDispatch()
    const onCreate = (values,resetFields) => {
        if (course.complete_course < 50) {
            return ModalError(resetFields,dispatch);
        }
        dispatch(rating(param.id,values));
        // console.log(param.id);
        // console.log('Received values of form: ', values);
        dispatch({
            type: Type.CLOSE_MODAL_RATING
        })
    };
    return (
        <>
            <CollectionCreateForm
                visible={isOpenModal}
                onCreate={onCreate}
                user_review={course?.user_review}
                onCancel={() => {
                    dispatch({
                        type: Type.CLOSE_MODAL_RATING
                    })
                }}
            />
        </>
    )
}
