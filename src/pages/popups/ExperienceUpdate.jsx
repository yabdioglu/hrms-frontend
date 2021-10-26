import React, { useEffect, useState } from 'react'
import ExperienceService from '../../services/ExperienceService'
import * as Yup from 'yup';
import { Formik, useFormik, Form} from 'formik';
import { toast } from 'react-toastify';
import { Card, Table, Button, FormField, Grid, Input} from 'semantic-ui-react'

export default function ExperienceUpdate({ cvId }) {
    const [cvExperiences, setCVExperiences] = useState([])

    useEffect(() => {
        let experienceService = new ExperienceService();
        experienceService.getByCurriculumId(cvId).then((result) => setCVExperiences(result.data.data))
    }, [cvExperiences, cvId])

    const addCVExperienceSchema = Yup.object({
        companyName: Yup.string().required(),
        position: Yup.string().required(),
        startYear: Yup.number().required(),
        endYear: Yup.number(),
    })

    const formik = useFormik({
        initialValues: {
            companyName: "",
            position: "",
            startYear: "",
            endYear: "",
            works: "",
            curriculumVitaeId: "",
        },
        validationSchema: addCVExperienceSchema,
        onSubmit: (values) => {
            let experienceService = new ExperienceService();
            formik.values.curriculumVitaeId = 79
            experienceService.addExperience(values).then((result) => { toast.success(result.data.message) })
        }
    })


    const handleDeleteExperience = (experienceId) => {
        let experienceService = new ExperienceService();
        experienceService.deleteExperience(experienceId).then((result) => {
            toast.success(result.data.message)
        })
    }
    return (
        <div>
            <Card fluid color="orange">
                <Table celled color="orange">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Company Name</Table.HeaderCell>
                            <Table.HeaderCell>Position</Table.HeaderCell>
                            <Table.HeaderCell>Start Year</Table.HeaderCell>
                            <Table.HeaderCell>Quit Year </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {cvExperiences?.map((cvExperience) => (
                            <Table.Row key={cvExperience.id}>
                                <Table.Cell>{cvExperience.companyName}</Table.Cell>
                                <Table.Cell>{cvExperience.position}</Table.Cell>
                                <Table.Cell>{cvExperience.startYear}</Table.Cell>
                                <Table.Cell>{cvExperience.endYear ? cvExperience.endYear : "Continues"}
                                <Button 
                                floated="right" 
                                icon='delete' 
                                color="red" 
                                onClick={() => handleDeleteExperience(cvExperience.id)}
                                size="mini" />
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>
            <Formik validationSchema={addCVExperienceSchema}>
                <Form className="ui form"
                    onSubmit={formik.handleSubmit}
                >
                    <Card fluid color="orange">
                        <Card.Content header="Add Experience" />
                        <Card.Content >
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <FormField style={{ marginTop: "1em" }}  >
                                        <Input
                                            placeholder="Company Name..."
                                            type="text"
                                            value={formik.values.companyName}
                                            name="companyName"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.companyName && formik.touched.companyName && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.companyName}
                                            </div>
                                        )}
                                    </FormField>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <FormField style={{ marginTop: "1em" }}  >
                                        <Input
                                            placeholder="Position..."
                                            type="text"
                                            value={formik.values.position}
                                            name="position"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.position && formik.touched.position && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.position}
                                            </div>
                                        )}
                                    </FormField>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <FormField style={{ marginTop: "1em" }}  >
                                        <Input
                                            placeholder="Start Year..."
                                            type="number"
                                            value={formik.values.startYear}
                                            name="startYear"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.startYear && formik.touched.startYear && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.startYear}
                                            </div>
                                        )}
                                    </FormField>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <FormField style={{ marginTop: "1em" }}  >
                                        <Input
                                            placeholder="End Year..."
                                            type="number"
                                            value={formik.values.endYear}
                                            name="endYear"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.endYear && formik.touched.endYear && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.endYear}
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
