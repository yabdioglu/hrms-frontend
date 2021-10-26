import React, { useEffect, useState } from 'react'
import TalentService from '../../services/TalentService';
import { Card, Table, Button, FormField, Dropdown, Grid } from 'semantic-ui-react'
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { Formik, useFormik, Form } from 'formik';

export default function TalentUpdate({ cvId }) {

    const [cvTalents, setCVTalents] = useState([])
    const [talents, setTalents] = useState([])

    useEffect(() => {
        let talentService = new TalentService();
        talentService.getByCurriculumId(cvId).then((result) => setCVTalents(result.data.data))
    },[cvTalents, cvId])

    useEffect(() => {
        let talentService = new TalentService();
        talentService.getTalents().then((result) => setTalents(result.data.data))
    },[])

    const addCVTalentSchema = Yup.object({
        talentId: Yup.string(),
    })

    const formik = useFormik({
        initialValues: {
            talentId: "",
            curriculumVitaeId: ""
        },
        validationSchema: addCVTalentSchema,
        onSubmit: (values) => {
            let talentService = new TalentService();
            formik.values.talent = {id: formik.values.talentId}
            formik.values.curriculumVitaeId = 79
            talentService.addTalent(values).then((result) => { toast.success(result.data.message) })
        }
    })

    const talentOptions = talents.map((talent,index) => ({
        key: index,
        text : talent.talentName,
        value: talent.id
    }))

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }

    const handleDeleteTalent = (talentId) => {
        let talentService = new TalentService();
        talentService.deleteTalent(talentId).then((result) => {
            toast.success(result.data.message)
        })
    }
    return (
        <div>
            <Card fluid color="orange">
                <Table celled color="orange">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Talent Name</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {cvTalents.map((cvTalent) => (
                                    <Table.Row key={cvTalent.id}>
                                        <Table.Cell>{cvTalent.talent?.talentName}
                                        <Button floated="right" icon='delete' color="red" onClick={() => handleDeleteTalent(cvTalent.id)} size="mini" />
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                    </Table.Body>
                </Table>
            </Card>
            <Formik validationSchema={addCVTalentSchema}>
                <Form className="ui form"
                    onSubmit={formik.handleSubmit}
                >
                    <Card fluid color="orange">
                    <Card.Content header="Add Talent" />
                        <Card.Content >
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <FormField style={{ marginTop: "1em" }}  >
                                        <Dropdown
                                            placeholder='Talent'
                                            search
                                            selection
                                            onChange={(event, data) =>
                                                handleChangeSemantic(data.value, "talentId")

                                            }
                                            onBlur={formik.onBlur}
                                            id="talentId"
                                            value={formik.values.talentId}
                                            options={talentOptions}
                                        />
                                        {formik.errors.talentId && formik.touched.talentId && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.talentId}
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
