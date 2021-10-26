import React from 'react'
import CurriculumVitaeService from '../../services/CurriculumVitaeService'
import * as Yup from 'yup';
import { TextArea } from 'semantic-ui-react'
import { Formik, useFormik, Form} from 'formik';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';

export default function GithubUpdate({ cvId }) {
    let curriculumVitaeService = new CurriculumVitaeService();

    const updateGithubSchema = Yup.object({
        github: Yup.string()
    })

    const formik = useFormik({
        initialValues: {
            github: ""
        },
        validationSchema: updateGithubSchema,
        onSubmit: (values) => {
            curriculumVitaeService.updateGithub(values.github, cvId).then((result) => {
                toast.success(result.data.message)
            })
        }
    })

    return (
        <div>
            <Formik validationSchema={updateGithubSchema}>
                <Form className="ui form" onSubmit={formik.handleSubmit}>
                    <TextArea
                        placeholder="Github..."
                        type="text"
                        value={formik.values.github}
                        name="github"
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