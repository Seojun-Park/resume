import React from 'react'
import { WORKS_ITEMS } from '../../../components/AllProjects'
import { AllProjectStyle, Nested } from '../AllProjectsStyle'

const ProjectBody = () => {
    return (
        <AllProjectStyle.Wrapper className="projects">
            <AllProjectStyle.Title>PROJECT LIST</AllProjectStyle.Title>
            <AllProjectStyle.Line />
            <AllProjectStyle.Container>
                {WORKS_ITEMS.map((item, index) => {
                    return (
                        <AllProjectStyle.Project key={index} to={`/project/${item.title}`} preview={item.preview}>
                            <Nested>
                                <AllProjectStyle.ProjectTitleBox>
                                    <AllProjectStyle.ProjectTitle>
                                        {item.title}
                                    </AllProjectStyle.ProjectTitle>
                                </AllProjectStyle.ProjectTitleBox>
                            </Nested>
                        </AllProjectStyle.Project>
                    )
                })}
            </AllProjectStyle.Container>
        </AllProjectStyle.Wrapper>
    )
}

export default ProjectBody