import React, { useState, useEffect } from 'react'
import { Card, Table, Button, FormField, Dropdown, Grid } from 'semantic-ui-react'
import * as Yup from 'yup';
import { Formik, useFormik, Form } from 'formik';
import { toast } from 'react-toastify';
import LanguageService from '../../services/LanguageService';

export default function SummaryUpdate({ cvId }) {
    let languageService = new LanguageService();

    const [cvLanguages, setCVLanguages] = useState([])
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        let languageService = new LanguageService();
        languageService.getByCurriculumId(cvId).then((result) => setCVLanguages(result.data.data))
    }, [cvLanguages, cvId])

    useEffect(() => {
        let languageService = new LanguageService();
        languageService.getLanguages().then((result) => setLanguages(result.data.data))
    }, [])

    const addCVLanguageSchema = Yup.object({
        languageId: Yup.string(),
        level: Yup.number()
            .min(1)
            .max(5)
    })

    const formik = useFormik({
        initialValues: {
            languageId: "",
            level: "",
            curriculumVitaeId: ""
        },
        validationSchema: addCVLanguageSchema,
        onSubmit: (values) => {
            formik.values.language = { id: formik.values.languageId }
            let languageService = new LanguageService();
            formik.values.curriculumVitaeId = 79
            languageService.addLanguage(values).then((result) => { toast.success(result.data.message) })
        }
    })

    const languageOptions = languages.map((language, index) => ({
        key: index,
        text: language.languageName,
        value: language.id,
    }));

    const levels = [1, 2, 3, 4, 5]
    const levelOptions = levels.map((level) => ({
        key: level,
        text: level,
        value: level
    }))

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }

    const handleDeleteLanguage = (languageId) => {
        languageService.deleteLanguage(languageId).then((result) => {
            toast.success(result.data.message)
        })
    }

    return (
        <div>
            <Card fluid color={"orange"}>
                <Card.Content/>
                <Table celled color={"orange"}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Language Name</Table.HeaderCell>
                            <Table.HeaderCell>Level</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {cvLanguages?.map((cvLanguage) => (
                            <Table.Row key={cvLanguage.id}>
                                <Table.Cell>{cvLanguage.language?.languageName}</Table.Cell>
                                <Table.Cell>{cvLanguage.level}
                                    <Button floated="right" icon='delete' color="red" onClick={() => handleDeleteLanguage(cvLanguage.id)} size="mini"  /></Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>
            <Formik validationSchema={addCVLanguageSchema}>
                <Form className="ui form"
                    onSubmit={formik.handleSubmit}
                >
                    <Card fluid color="orange">
                    <Card.Content header="Add language" />
                        <Card.Content >
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <FormField style={{ marginTop: "1em" }}  >
                                        <Dropdown
                                            placeholder='Language'
                                            search
                                            selection
                                            onChange={(event, data) =>
                                                handleChangeSemantic(data.value, "languageId")

                                            }
                                            onBlur={formik.onBlur}
                                            id="languageId"
                                            value={formik.values.languageId}
                                            options={languageOptions}
                                        />
                                        {formik.errors.languageId && formik.touched.languageId && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.languageId}
                                            </div>
                                        )}

                                    </FormField>
                                </Grid.Column>

                                <Grid.Column width={8}>
                                    <FormField style={{ marginTop: "1em" }} >
                                        <Dropdown
                                            placeholder='Level'
                                            search
                                            selection
                                            onChange={(event, data) =>
                                                handleChangeSemantic(data.value, "level")

                                            }
                                            onBlur={formik.onBlur}
                                            id="level"
                                            value={formik.values.level}
                                            options={levelOptions}
                                        />
                                        {formik.errors.level && formik.touched.level && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.level}
                                            </div>
                                        )}
                                    </FormField>
                                </Grid.Column>
                            </Grid>
                            <Button style={{ marginTop: "1em" }} floated="left" icon='add' color="orange" type="submit"></Button>
                        </Card.Content>
                    </Card>
                </Form>
            </Formik>
        </div>
    )
}
