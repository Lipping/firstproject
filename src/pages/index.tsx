import { Container, Title, Content, InputBox, Input, ContentBox, Label, InputGroup, ButtonBox, PrimaryButton, TextButton } from "../../shared/styles";

export default function Home() {
  return (
    <div>
      <Container>
        <Content>
          <Title>Recuperar senha</Title>
          <ContentBox>
            <InputBox>
              <InputGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Digite seu email" />
              </InputGroup>
              <ButtonBox>
              <PrimaryButton>Recuperar</PrimaryButton>
              <TextButton>Voltar</TextButton>
            </ButtonBox>
            </InputBox>
            
          </ContentBox>
        </Content>
      </Container>
    </div>
  );
}