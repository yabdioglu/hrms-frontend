import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/JobAdvertisementService'
import { toast } from 'react-toastify'

export default function JobAdvertisementCofirm() {


    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    }, [jobAdvertisements])

    const handleConfirm = (jobAdvertisementId) => {
        let jobAdvertisementService = new JobAdvertisementService();
        let employeeId = 3
        const values = {
            employeeId,
            jobAdvertisementId
        }

        jobAdvertisementService
            .jobAdvertisementConfirm(values)
            .then((result) => console.log(result.data.data))
        toast.success(`${jobAdvertisementId} job advertisement confirmed!`)

    };


    return (
        <div>
            <Header as='h2' icon='list alternate outline' content='Job Advertisement Confirm Panel' />
            <Table celled color={'orange'} key={'orange'}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Min Salary</Table.HeaderCell>
                        <Table.HeaderCell>Max Salary</Table.HeaderCell>
                        <Table.HeaderCell>Open Position Count</Table.HeaderCell>
                        <Table.HeaderCell>Created Date</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                        <Table.HeaderCell>Confirm</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Table.Row key={jobAdvertisement.jobAdvertisementId}>
                                <Table.Cell>{jobAdvertisement.jobTitle.title}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.numberOfOpenPositions}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.createdDate}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                                <Table.Cell>
                                    <Button as={Link} to={`/jobAdvertisement/${jobAdvertisement.jobAdvertisementId}`}
                                        content="Show Details"
                                        icon="right arrow"
                                        labelPosition="right"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    {jobAdvertisement.confirmed ?
                                        <Button
                                            color="grey"
                                            content="Confirmed"
                                            icon="check"
                                            labelPosition="right"
                                        />
                                        :
                                        <Button onClick={() => handleConfirm(jobAdvertisement.jobAdvertisementId)}
                                            color="green"
                                            content="Confirm"
                                            icon="check"
                                            labelPosition="right"
                                        />
                                    }</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div >
    )
}