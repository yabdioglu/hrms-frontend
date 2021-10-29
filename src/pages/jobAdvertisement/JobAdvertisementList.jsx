import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../../services/JobAdvertisementService'
import CandidateService from '../../services/CandidateService';
import { toast } from 'react-toastify'

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByConfirmed().then(result => setJobAdvertisements(result.data.data))
    }, [])

    const handleAddToFavourites=(jobAdvertisementId)=>{
        let candidateService = new CandidateService();
        let candidateId = 2
        console.log(jobAdvertisementId);
        const values = {
            candidateId,
            jobAdvertisementId
        }
        candidateService.addJobAdvertisementToCandidateFavorites(values).then((result) => {toast.success(result.data.message)})
        
    }

    return (
        <div>
            <Header as='h2' icon='list alternate outline' content='Job Advertisements' />
            <Table celled color={'orange'} key={'orange'}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Company</Table.HeaderCell>
                        <Table.HeaderCell>Open Position Count</Table.HeaderCell>
                        <Table.HeaderCell>Deadline</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisement => (
                            <Table.Row key={jobAdvertisement.jobAdvertisementId}>
                                <Table.Cell>{jobAdvertisement.jobTitle.title}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.numberOfOpenPositions}</Table.Cell>
                                <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
                                <Table.Cell>
                                    <Button as={Link} to={`/jobAdvertisement/${jobAdvertisement.jobAdvertisementId}`}
                                        content="Show Details"
                                        icon="right arrow"
                                        labelPosition="right"
                                    />
                                </Table.Cell>
                                <Table.Cell>
                                    <Button  onClick={()=>handleAddToFavourites(jobAdvertisement.jobAdvertisementId)} icon="heart" color="red">
                                    </Button>
                                </Table.Cell>
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
