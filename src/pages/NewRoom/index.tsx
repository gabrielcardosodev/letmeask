import { Aside } from "../../components/Aside/index"
import { ContentNewRoom } from "../../components/CreateNewRoom/index"

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