import { Aside } from "../../components/Aside/Aside"
import { ContentNewRoom } from "../../components/CreateNewRoom/ContentNewRoom"

import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`

export function NewRoom () {
    return (
        <Container>
            <Aside />
            <ContentNewRoom />
        </Container>    
    )
}