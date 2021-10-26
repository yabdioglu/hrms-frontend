import React from 'react'
import CurriculumVitaeService from '../../services/CurriculumVitaeService'
import * as Yup from 'yup';
import { TextArea } from 'semantic-ui-react'
import { Formik, useFormik, Form } from 'formik';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';

export default function SummaryUpdate({ cvId }) {
    let curriculumVitaeService = new CurriculumVitaeService();

    const updateSummarySchema = Yup.object({
        summary: Yup.string().required()
    })

    const formik = useFormik({
        initialValues: {
            summary: ""
        },
        validationSchema: updateSummarySchema,
        onSubmit: (values) => {
            curriculumVitaeService.updateSummary(values.summary, cvId).then((result) => {
                toast.success(result.data.message)
            })
        }
    })

    return (
        <div>
            <Formik validationSchema={updateSummarySchema}>
                <Form className="ui form" onSubmit={formik.handleSubmit}>
                    <TextArea
                        placeholder="Summary..."
                        type="text"
                        value={formik.values.summary}
                        name="summary"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        style={{ minHeight: 200 }}
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
