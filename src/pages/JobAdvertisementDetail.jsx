import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import JobAdvertisementService from '../services/jobAdvertisementService'
import { Grid, Table } from 'semantic-ui-react'

export default function JobAdvertisementDetail() {
    let { id } = useParams()

    const [jobAdvertisement, setJobAdvertisement] = useState({})

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByJobAdvertisementId(id).then(result => setJobAdvertisement(result.data.data))
    }, [])

    return (
        <div>
            <Grid padded>
                <Grid.Row >
                    <Grid.Column width={5}>
                        <Table celled color={'orange'} key={'orange'} definition>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell />
                                    <Table.HeaderCell>Company</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Name</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.employer?.companyName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Email</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.employer?.email}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Web Address</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.employer?.webAddress}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Phone Number</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.employer?.phoneNumber}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <Table celled color={'orange'} key={'orange'} definition>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell />
                                    <Table.HeaderCell>Job Advertisement</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>Position</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.jobTitle?.title}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>City</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.city?.cityName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Work Time</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.workTime?.timeName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Work Place</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.workPlace?.placeName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Min Salary</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Max Salary</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Number Of Open Positions</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.numberOfOpenPositions}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Deadline</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Created Date</Table.Cell>
                                    <Table.Cell>{jobAdvertisement.createdDate}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
            <Grid>
                <Grid.Column>
                    <Table celled color={'orange'} key={'orange'} definition>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell />
                                <Table.HeaderCell>Job Advertisement</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Job Description</Table.Cell>
                                <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid>
        </div>
    )
}
