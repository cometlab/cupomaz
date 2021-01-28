import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
    padding: 0 2rem;
    height: 60px;

    margin: 16px auto;

    display: grid;
    grid-template-columns: 120px 2fr 2fr;
    align-items: center;

    form {
        position: relative;
        padding-left: 8px;
        margin: 0 5%;

        display: flex;
        align-items: center;

        border-radius: 3px;
        border: solid 1px #22222220;

        img {
            width: 15px;
            height: 15px;
        }

        input[type=text] {
            padding: 8px;
            border: none;
            flex: 1;
        }

        button {
            background: #222;
            border: none;
            color: #FFF;
            padding: 10px 10px;

            border-radius: 0 3px 3px 0;

            cursor: pointer;
        }
    }

    nav {
        display: flex;
        justify-content: flex-end;

        a {
            text-decoration: none;
            color: #222;
            padding-left: 24px;
        }
    }


`;
