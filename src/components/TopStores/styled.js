import styled from 'styled-components'

export const Container = styled.section`
    padding: 3% 2rem;

    header h1 {
        font-size: 1.725em;
        font-weight: 900;

        color: #222222; 
    }

    .stores-row {
        margin: 24px 0;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        gap: 20px;
    }
    
    .stores-row a {
        box-shadow: 0 0 7px rgba(0,0,0, 0.08);

        border-radius: 3px;
        padding: 8px;
    }
`;


