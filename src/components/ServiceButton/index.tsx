import { 
    Container,
    ServicesButtonImageWrapper,
    ServicesButtonImage,
    ServicesButtonTitle,
} from "./style";

interface ServiceButtonProps {
    buttonImage: string;
}

export function ServiceButton({
    buttonImage
}: ServiceButtonProps){
    return (
        <Container>
            <ServicesButtonImageWrapper>
                
            </ServicesButtonImageWrapper>

            <ServicesButtonTitle>
                Normal
            </ServicesButtonTitle>
        </Container>
    );
}