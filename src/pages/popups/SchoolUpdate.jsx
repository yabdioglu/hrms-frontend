import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import SchoolService from '../../services/SchoolService'
import { Formik, useFormik, Form } from 'formik';
import { toast } from 'react-toastify';
import { Card, Table, Button, FormField, Grid, Input } from 'semantic-ui-react'

export default function SchoolUpdate({ cvId }) {
    const [cvSchools, setCVSchools] = useState([])

    useEffect(() => {
        let schoolService = new SchoolService();
        schoolService.getByCurriculumId(cvId).then((result) => setCVSchools(result.data.data))
    }, [cvSchools, cvId])

    const addCVSchoolSchema = Yup.object({
        schoolName: Yup.string().required(),
        department: Yup.string(),
        startYear: Yup.number().required(),
        endYear: Yup.number(),
    })

    const formik = useFormik({
        initialValues: {
            schoolName: "",
            department: "",
            startYear: "",
            endYear: "",
            curriculumVitaeId: "",
        },
        validationSchema: addCVSchoolSchema,
        onSubmit: (values) => {
            let schoolService = new SchoolService();
            formik.values.curriculumVitaeId = 79
            schoolService.addSchool(values).then((result) => { toast.success(result.data.message) })
        }
    })

    const handleDeleteSchool = (schoolId) => {
        let schoolService = new SchoolService();
        schoolService.deleteSchool(schoolId).then((result) => {
            toast.success(result.data.message)
        })
    }

    return (
        <div>
            <Card fluid color="orange">
                <Table celled color="orange">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>School Name</Table.HeaderCell>
                            <Table.HeaderCell>Department</Table.HeaderCell>
                            <Table.HeaderCell>Start Year</Table.HeaderCell>
                            <Table.HeaderCell>End Year </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {cvSchools?.map((cvSchool) => (
                            <Table.Row key={cvSchool.id}>
                                <Table.Cell>{cvSchool.schoolName}</Table.Cell>
                                <Table.Cell>{cvSchool.department}</Table.Cell>
                                <Table.Cell>{cvSchool.startYear}</Table.Cell>
                                <Table.Cell>{cvSchool.endYear ? cvSchool.endYear : "Continues"}
                                <Button 
                                floated="right" 
                                icon='delete' 
                                color="red" 
                                onClick={() => handleDeleteSchool(cvSchool.id)}
                                size="mini" />
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </Card>
            <Formik validationSchema={addCVSchoolSchema}>
                <Form className="ui form"
                    onSubmit={formik.handleSubmit}
                >
                    <Card fluid color="orange">
                        <Card.Content header="Add School" />
                        <Card.Content >
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <FormField style={{ marginTop: "1em" }}  >
                                        <Input
                                            placeholder="School Name..."
                                            type="text"
                                            value={formik.values.schoolName}
                                            name="schoolName"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.schoolName && formik.touched.schoolName && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.schoolName}
                                            </div>
                                        )}
                                    </FormField>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <FormField style={{ marginTop: "1em" }}  >
                                        <Input
                                            placeholder="Department..."
                                            type="text"
                                            value={formik.values.department}
                                            name="department"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.department && formik.touched.department && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.department}
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
