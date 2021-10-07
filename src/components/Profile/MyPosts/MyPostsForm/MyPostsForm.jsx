import React from "react";
import {Field} from "redux-form";
import {FormControl} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10);

export const PostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={'New Post'}
                    name={'newPostText'}
                    component={FormControl}
                    validate={[required, maxLength10]}
                    type={'textarea'}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}