import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { FormField, Button, Label, Card, Dropdown, Grid, TextArea } from 'semantic-ui-react';
import CityService from '../services/CityService'
import JobTitleService from '../services/JobTitleService'
import WorkPlaceService from '../services/WorkPlaceService'
import WorkTimeService from '../services/WorkTimeService'
import JobAdvertisementService from '../services/JobAdvertisementService'
import { useFormik } from "formik";
import { useHistory } from 'react-router-dom';

export default function JobAdvertisementAdd() {

    let history = new useHistory()

    const schema = Yup.object({
        cityId: Yup.string().required("Please select a city"),
        jobTitleId: Yup.string().required("Please select a position"),
        jobDescription: Yup.string().required("Please enter a job description"),
        minSalary: Yup.number().positive(),
        maxSalary: Yup.number().positive(),
        numberOfOpenPositions: Yup.number().positive().required("Please enter a number of open positions"),
        placeId: Yup.string().required("Please select a work place"),
        timeId: Yup.string().required("Please select a work time"),
        applicationDeadline: Yup.date().required("Please enter an application deadline")
    })
    const formik = useFormik({
        initialValues: {
            cityId: "",
            jobDescription: "",
            jobTitleId: "",
            minSalary: "",
            maxSalary: "",
            numberOfOpenPositions: "",
            applicationDeadline: "",
            placeId: "",
            timeId: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            let jobAdvertisementService = new JobAdvertisementService()
            formik.values.city = { cityId: formik.values.cityId }
            formik.values.workTime = { timeId: formik.values.timeId }
            formik.values.workPlace = { placeId: formik.values.placeId }
            formik.values.jobTitle = { jobTitleId: formik.values.jobTitleId }
            formik.values.employer = { id: 1 };
            jobAdvertisementService.jobAdvertisementAdd(values).then((result) => console.log(result.data.data))
            alert("İş ilanı eklendi personelin onayı ardından listelenecektir");
            history.push("/")
        },
    })

    const [cities, setCities] = useState([])
    const [jobTitles, setJobTitles] = useState([])
    const [workPlaces, setWorkPlaces] = useState([])
    const [workTimes, setWorkTimes] = useState([])

    useEffect(() => {
        let cityService = new CityService();
        let jobTitleService = new JobTitleService();
        let workPlaceService = new WorkPlaceService();
        let workTimeService = new WorkTimeService();


        cityService.getCities().then(result => setCities(result.data.data))
        jobTitleService.getJobTitles().then(result => setJobTitles(result.data.data))
        workPlaceService.getWorkPlaces().then(result => setWorkPlaces(result.data.data))
        workTimeService.getWorkTimes().then(result => setWorkTimes(result.data.data))
    }, [])


    const cityOptions = cities.map((city, index) => ({
        key: index,
        text: city.cityName,
        value: city.cityId,
    }));

    const jobTitleOptions = jobTitles.map((jobTitle, index) => ({
        key: index,
        text: jobTitle.title,
        value: jobTitle.jobTitleId,
    }));

    const workPlaceOptions = workPlaces.map((workPlace, index) => ({
        key: index,
        text: workPlace.placeName,
        value: workPlace.placeId,
    }));

    const workTimeOptions = workTimes.map((workTime, index) => ({
        key: index,
        text: workTime.timeName,
        value: workTime.timeId,
    }));

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }
    return (
        <div>
            <Card fluid>
                <Card.Content header="Add job ad" />
                <Card.Content>
                    <Formik validationSchema={schema}>
                        <Form className="ui form" onSubmit={formik.handleSubmit}>
                            <FormField >
                                <Dropdown
                                    placeholder='Position'
                                    search
                                    selection
                                    onChange={(event, data) =>
                                        handleChangeSemantic(data.value, "jobTitleId")
                                    }
                                    onBlur={formik.onBlur}
                                    id="jobTitleId"
                                    value={formik.values.jobTitleId}
                                    options={jobTitleOptions}
                                />
                                {formik.errors.jobTitleId && formik.touched.jobTitleId && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.jobTitleId}
                                    </div>
                                )}
                            </FormField>
                            <Grid stackable >
                                <Grid.Column width={8}>
                                    <FormField>
                                        <Field
                                            name="minSalary"
                                            placeholder="Min Salary"
                                            value={formik.values.minSalary}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        ></Field>
                                        {formik.errors.minSalary && formik.touched.minSalary && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.minSalary}
                                            </div>
                                        )}
                                    </FormField>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <FormField>
                                        <Field
                                            name="maxSalary"
                                            placeholder="Max Salary"
                                            value={formik.values.maxSalary}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        ></Field>
                                        {formik.errors.maxSalary && formik.touched.maxSalary && (
                                            <div className={"ui pointing red basic label"}>
                                                {formik.errors.maxSalary}
                                            </div>
                                        )}
                                    </FormField>
                                </Grid.Column>
                            </Grid>
                            <FormField style={{ marginTop: "1em" }} >
                                <Dropdown
                                    placeholder='City'
                                    search
                                    selection
                                    onChange={(event, data) =>
                                        handleChangeSemantic(data.value, "cityId")

                                    }
                                    onBlur={formik.onBlur}
                                    id="cityId"
                                    value={formik.values.cityId}
                                    options={cityOptions}
                                />
                                {formik.errors.cityId && formik.touched.cityId && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.cityId}
                                    </div>
                                )}
                            </FormField>
                            <FormField>
                                <Field
                                    name="numberOfOpenPositions"
                                    placeholder="Number Of Open Positions"
                                    value={formik.values.numberOfOpenPositions}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}></Field>
                                {formik.errors.numberOfOpenPositions && formik.touched.numberOfOpenPositions && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.numberOfOpenPositions}
                                    </div>
                                )}
                            </FormField>
                            <FormField>
                                <Field
                                    type="date"
                                    name="applicationDeadline"
                                    placeholder="Application Deadline"
                                    value={formik.values.applicationDeadline}
                                    onChange={formik.handleChange}
                                ></Field>
                                {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.applicationDeadline}
                                    </div>
                                )}
                            </FormField>
                            <Grid>
                                <Grid.Column width={8}>
                            <FormField>
                                <Dropdown
                                    placeholder='Work Place'
                                    search
                                    selection
                                    onChange={(event, data) =>
                                        handleChangeSemantic(data.value, "placeId")
                                    }
                                    onBlur={formik.onBlur}
                                    id="placeId"
                                    value={formik.values.placeId}
                                    options={workPlaceOptions}
                                />
                                {formik.errors.placeId && formik.touched.placeId && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.placeId}
                                    </div>
                                )}
                                {/* <ErrorMessage name="workPlace" render={error =>
                                    <Label pointing basic color="red" content={error}></Label>
                                }></ErrorMessage> */}
                            </FormField>
                            </Grid.Column>
                            <Grid.Column width={8}>
                            <FormField>
                                <Dropdown
                                    placeholder='Work Time'
                                    search
                                    selection
                                    onChange={(event, data) =>
                                        handleChangeSemantic(data.value, "timeId")
                                    }
                                    onBlur={formik.onBlur}
                                    id="timeId"
                                    value={formik.values.timeId}
                                    options={workTimeOptions}
                                />
                                {formik.errors.timeId && formik.touched.timeId && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.timeId}
                                    </div>
                                )}
                                <ErrorMessage name="workTime" render={error =>
                                    <Label pointing basic color="red" content={error}></Label>
                                }></ErrorMessage>
                            </FormField>
                            </Grid.Column>
                            </Grid>
                            <FormField style={{ marginTop: "1em" }}>
                                <TextArea
                                    name="jobDescription"
                                    placeholder="Job Description"
                                    value={formik.values.jobDescription}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.jobDescription && formik.touched.jobDescription && (
                                    <div className={"ui pointing red basic label"}>
                                        {formik.errors.jobDescription}
                                    </div>
                                )}
                            </FormField>
                            <Button
                                content="Ekle"
                                labelPosition="right"
                                icon="add"
                                positive
                                type="submit"
                                style={{ marginLeft: "20px" }}
                            />
                        </Form>
                    </Formik>
                </Card.Content>
            </Card>
        </div>
    )
}

