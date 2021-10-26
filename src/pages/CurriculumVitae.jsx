import React, { useEffect, useState } from 'react'
import { Card, Icon, Image, Table, Header, Button, Modal } from 'semantic-ui-react'
import CurriculumVitaeService from '../services/CurriculumVitaeService'
import SummaryUpdate from './popups/SummaryUpdate';
import GithubUpdate from './popups/GithubUpdate';
import LinkedInUpdate from './popups/LinkedInUpdate';
import LanguageUpdate from './popups/LanguageUpdate';
import TalentUpdate from './popups/TalentUpdate';
import ExperienceUpdate from './popups/ExperienceUpdate';
import SchoolUpdate from './popups/SchoolUpdate';
import ImageUpdate from './popups/ImageUpdate';

export default function CurriculumVitae() {

    const [curriculumVitae, setCurriculumVitae] = useState({})

    useEffect(() => {
        let curriculumVitaeService = new CurriculumVitaeService()
        let id = 79
        curriculumVitaeService.getByCurriculumVitaeId(id).then((result) => setCurriculumVitae(result.data.data))
    }, [curriculumVitae])

    return (
        <div>
            <Card.Group>
                <Card fluid color="orange">
                    <Card.Content>
                        <Modal
                            trigger={<Image
                                centered
                                bordered
                                rounded
                                size='medium'
                                src={curriculumVitae.photoLink}
                            />} >
                            <Modal.Header>Upload Image</Modal.Header> <Modal.Content> <Modal.Description>
                                <ImageUpdate cvId={curriculumVitae.id} /> </Modal.Description>
                            </Modal.Content>
                        </Modal>
                    </Card.Content>
                    <Card.Content>
                        <Card.Header>
                            <Header size='medium'>{curriculumVitae.candidate?.firstName + " " + curriculumVitae.candidate?.lastName}</Header>
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Table celled color={'orange'} key={'orange'}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Candidate</Table.HeaderCell>
                                    <Table.HeaderCell>Informations</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>First Name</Table.Cell>
                                    <Table.Cell>{curriculumVitae.candidate?.firstName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Last Name</Table.Cell>
                                    <Table.Cell>{curriculumVitae.candidate?.lastName}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Email</Table.Cell>
                                    <Table.Cell>{curriculumVitae.candidate?.email}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>Birth Year</Table.Cell>
                                    <Table.Cell>{curriculumVitae.candidate?.birthYear}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Button color='grey'>
                                            <Icon name='github' /> Github
                                        </Button>
                                    </Table.Cell>
                                    <Table.Cell>{curriculumVitae.githubLink}
                                        <Modal
                                            trigger={<Button floated="right" icon='edit' color="orange"></Button>}
                                        ><Modal.Header>Github</Modal.Header>
                                            <Modal.Content>
                                                <Modal.Description>
                                                    <GithubUpdate cvId={curriculumVitae.id} />
                                                </Modal.Description>
                                            </Modal.Content>
                                        </Modal>
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                        <Button color='linkedin'>
                                            <Icon name='linkedin' /> LinkedIn
                                        </Button>
                                    </Table.Cell>
                                    <Table.Cell>{curriculumVitae.linkedInLink}
                                        <Modal
                                            trigger={<Button floated="right" icon='edit' color="orange"></Button>}
                                        ><Modal.Header>LinkedIn</Modal.Header>
                                            <Modal.Content>
                                                <Modal.Description>
                                                    <LinkedInUpdate cvId={curriculumVitae.id} />
                                                </Modal.Description>
                                            </Modal.Content>
                                        </Modal>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
                <Card fluid color="orange">
                    <Card.Content>
                        <Header floated='left'>
                            Summary
                        </Header>
                        <Modal
                            trigger={<Button floated="right" icon='edit' color="orange"></Button>}
                        ><Modal.Header>Summary</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <SummaryUpdate cvId={curriculumVitae.id} />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                        <Table celled color={'orange'} key={'orange'}>
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>{curriculumVitae.summary}
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
                <Card fluid color="orange">
                    <Card.Content>
                        <Header floated='left'>
                            Languages
                        </Header>
                        <Modal
                            trigger={<Button floated="right" icon='edit' color="orange"></Button>}
                        ><Modal.Header>Languages</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <LanguageUpdate cvId={curriculumVitae.id} />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                        <Table celled color={'orange'} key={'orange'}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Language Name</Table.HeaderCell>
                                    <Table.HeaderCell>Level</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {curriculumVitae.cvLanguages?.map((language) => (
                                    <Table.Row key={language.id}>
                                        <Table.Cell>{language.language?.languageName}</Table.Cell>
                                        <Table.Cell>{language.level}
                                            {/* <Modal
                                            trigger={<Button floated="right" icon='edit' color="orange"></Button>}
                                        ><Modal.Header>Languages</Modal.Header>
                                            <Modal.Content>
                                                <Modal.Description>
                                                    <LanguageUpdate cvId={curriculumVitae.id} />
                                                </Modal.Description>
                                            </Modal.Content>
                                        </Modal> */}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
                <Card fluid color="orange">
                    <Card.Content>
                        <Header floated='left'>
                            Talents
                        </Header>
                        <Modal
                            trigger={<Button floated="right" icon='edit' color="orange"></Button>}
                        ><Modal.Header>Talents</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <TalentUpdate cvId={curriculumVitae.id} />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                        <Table celled color={'orange'} key={'orange'}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Talent Name</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {curriculumVitae.cvTalents?.map((cvTalent) => (
                                    <Table.Row key={cvTalent.id}>
                                        <Table.Cell>{cvTalent.talent.talentName}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
                <Card fluid color="orange">
                    <Card.Content>
                        <Header floated='left'>
                            Experiences
                        </Header>
                        <Modal
                            trigger={<Button floated="right" icon='edit' color="orange"></Button>}
                        ><Modal.Header>Experiences</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <ExperienceUpdate cvId={curriculumVitae.id} />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                        <Table celled color={'orange'} key={'orange'}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Company Name</Table.HeaderCell>
                                    <Table.HeaderCell>Position</Table.HeaderCell>
                                    <Table.HeaderCell>Start Year</Table.HeaderCell>
                                    <Table.HeaderCell>Quit Year </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {curriculumVitae.cvExperiences?.map((experience) => (
                                    <Table.Row key={experience.id}>
                                        <Table.Cell>{experience.companyName}</Table.Cell>
                                        <Table.Cell>{experience.position}</Table.Cell>
                                        <Table.Cell>{experience.startYear}</Table.Cell>
                                        <Table.Cell>{experience.endYear ? experience.endYear : "Continues"}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
                <Card fluid color="orange">
                    <Card.Content>
                        <Header floated='left'>
                            Schools
                        </Header>
                        <Modal
                            trigger={<Button floated="right" icon='edit' color="orange"></Button>}
                        ><Modal.Header>Schools</Modal.Header>
                            <Modal.Content>
                                <Modal.Description>
                                    <SchoolUpdate cvId={curriculumVitae.id} />
                                </Modal.Description>
                            </Modal.Content>
                        </Modal>
                        <Table celled color={'orange'} key={'orange'}>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>School Name</Table.HeaderCell>
                                    <Table.HeaderCell>Department</Table.HeaderCell>
                                    <Table.HeaderCell>Start Year</Table.HeaderCell>
                                    <Table.HeaderCell>End Year </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {curriculumVitae.cvSchools?.map((school) => (
                                    <Table.Row key={school.id}>
                                        <Table.Cell>{school.schoolName}</Table.Cell>
                                        <Table.Cell>{school.department}</Table.Cell>
                                        <Table.Cell>{school.startYear}</Table.Cell>
                                        <Table.Cell>{school.endYear ? school.endYear : "Continues"}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}
