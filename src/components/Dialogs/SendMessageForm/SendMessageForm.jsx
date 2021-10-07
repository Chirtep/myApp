import React from "react";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field} from "redux-form";
import {FormControl} from "../../common/FormsControls/FormsControls";

const maxLength300 = maxLengthCreator(300)

export const MessagesForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type={'textarea'}
                    placeholder={'New Message'}
                    name={'newMessageBody'}
                    component={FormControl}
                    validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>

    )
}