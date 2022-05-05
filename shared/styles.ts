import styled from '@emotion/styled'



export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #222222;
    color: #f7f7f7;
    font-family: 'Poppins', sans-serif;
    background-image: url('assets/backgroundImg.svg');
    background-repeat: no-repeat;
    background-position: bottom left;
    `;

    export const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90rem;
    gap: 2rem;
    `;

    export const Title = styled.h1`
    font-size: 1.5625rem;
    font-weight: 600;
    line-height: 2.34375rem;
    `;

    export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    `;

    export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #3B3B3B;
    border-radius: 0.3125rem;
    width: 25rem;
    height: 17.1875rem;
    padding: 2rem 1.5rem;
    `;


    export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    `;

    export const Label = styled.label`
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 1.1875rem;
    color: #CFCFCF;
    `;

    export const Input = styled.input`
    all: unset;
    border-radius: 0.3125rem;
    border: none;
    background-color: #222222;
    color: #f7f7f7;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    width: 20rem;
    height: 2.5rem;
    padding: 0 1rem;
    `;

    export const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-weight: 500;
    text-align: center;
    `;

    export const PrimaryButton = styled.button`
    all: unset;
    border-radius: 0.3125rem;
    cursor:pointer;
    background-color: #FEC111;
    color: #222222;
    width: 22rem;
    height: 2.5rem;
    font-size: 1rem;
        :hover {
            background-color: #fecd41;
            transition: all 0.3s ease;
        }
        :active {
            background-color: #E5AE0F;
            transition: all 0.3s ease;
        }
    `;

    export const TextButton = styled.button`
    all: unset;
    border-radius: 0.3125rem;
    cursor:pointer;
    background-color: transparent;
    color: #fec111;
    width: 22rem;
    height: 2.5rem;
        :hover {
            background-color: #fecd414d;
            transition: all 0.3s ease;
        }
        :active {
            background-color: #fecd41;
            transition: all 0.3s ease;
        }
    `;


