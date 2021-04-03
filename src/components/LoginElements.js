import styled from 'styled-components'

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    margin-top: 10rem;
`;

export const Cover = styled.div`
    text-align: center;
`

export const FormWrap = styled.div`
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 480px) {
            height: 80%;
        }
`;

export const FormContent = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media screen and (max-width: 480px) {
            padding: 10px;
        }
`;

export const Form = styled.form`
        background: transparent !important;
        border: 2px solid #149fff;
        max-width: 400px;
        height: 55vh;
        width: 100%;
        z-index: 1;
        display: grid;
        margin: 0 auto;
        padding: 150px 32px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

        @media screen and (max-width: 400px) {
            padding: 32px 32px;
        }
`;

export const FormH1 = styled.h1`
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
        margin-top: -5.5rem;
`;

export const FormLabel = styled.label`
        font-family: "Poppins", sans-serif;
        font-size: 14px;
        color: #fff;
`

export const FormInput = styled.input`
        height: 32px;
        color: #fff !important;
        font-size: 14px;
        font-weight: 400;
        outline: none;
        width: 95%;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        border-bottom-style: 1px solid rgb(255, 255, 255) !important;
        margin-bottom: 10px;
        background: transparent;
`;

export const FormButton = styled.button`
        display: flex;
        text-transform: uppercase;
        font-size: 15px;
        border-radius: 25px;
        color: #195C7C;
        padding: 7px 40px;
        background: #fff;
        margin: auto;
        outline: none;
        border: none;
        cursor: pointer;
        font-weight: 500;
        transition: all .65s ease-in-out;
        margin-top: 6rem;
`;

export const Text = styled.span`
        text-align: center;
        margin-top: 24px;
        color: #fff;
        font-size: 14px;
`

