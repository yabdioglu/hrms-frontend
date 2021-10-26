import React from 'react'
import CurriculumVitaeService from '../../services/CurriculumVitaeService'
import * as Yup from 'yup';
import { TextArea } from 'semantic-ui-react'
import { Formik, useFormik, Form} from 'formik';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';

export default function LinkedInUpdate({ cvId }) {
    let curriculumVitaeService = new CurriculumVitaeService();

    const updateLinkedInSchema = Yup.object({
        linkedin: Yup.string()
    })

    const formik = useFormik({
        initialValues: {
            linkedin: ""
        },
        validationSchema: updateLinkedInSchema,
        onSubmit: (values) => {
            curriculumVitaeService.updateLinkedIn(values.linkedin, cvId).then((result) => {
                toast.success(result.data.message)
            })
        }
    })

    return (
        <div>
            <Formik validationSchema={updateLinkedInSchema}>
                <Form className="ui form" onSubmit={formik.handleSubmit}>
                    <TextArea
                        placeholder="LinkedIn..."
                        type="text"
                        value={formik.values.linkedin}
                        name="linkedin"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{ maxHeight: 50 }}
                    />
                    <Button
                        content="Update"
                        labelPosition="right"
                        icon="edit"
                        positive
                        type="submit"
                        style={{ marginLeft: "25em", marginTop: "1em" }}
                        size="large"

                    />
                </Form>
            </Formik>
        </div>
    )
}