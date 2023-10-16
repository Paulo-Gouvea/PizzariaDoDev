import MussarelaIMG from "../images/Mussarela.png";
import CalabresaIMG from "../images/Calabresa.png";
import QuatroQueijosIMG from "../images/4_Queijos.png";
import FrangoIMG from "../images/Frango.png";
import PortuguesaIMG from "../images/Frango.png";
import NapolitanaIMG from "../images/Napolitana.png";
import PepperoniIMG from "../images/Pepperoni.png";
import PresuntoIMG from "../images/Presunto.png";
import AmericanaIMG from "../images/America.png";
import ChocolateIMG from "../images/Chocolate.png";
import BananaIMG from "../images/Banana.png";
import RomeuJulietaIMG from "../images/Romeu_E_Julieta.png";
import CocaColaIMG from "../images/CocaCola.png";
import GuaranaIMG from "../images/Guarana.png";
import LataRefrigeranteIMG from "../images/Lata_Refrigerante.png";
import LataSucoIMG from "../images/Lata_Suco.png";
import AguaComGasIMG from "../images/Agua_com_gas.png";
import AguaSemGasIMG from "../images/Agua_sem_gas.png";

export function handleImageRender(title: string) {
    switch (title) {
        case 'Pizza de Mussarela':
            return MussarelaIMG;
        case 'Pizza de Calabresa':
            return CalabresaIMG;
        case 'Pizza de 4 Queijos':
            return QuatroQueijosIMG;
        case 'Pizza de Frango':
            return FrangoIMG;
        case 'Pizza de Portuguesa':
            return PortuguesaIMG;
        case 'Pizza de Napolitana':
            return NapolitanaIMG;
        case 'Pizza de Pepperoni':
            return PepperoniIMG;
        case 'Pizza de Presunto':
            return PresuntoIMG;
        case 'Pizza de Américana':
            return AmericanaIMG;
        case 'Pizza de Chocolate':
            return ChocolateIMG;
        case 'Pizza de Banana':
            return BananaIMG;
        case 'Pizza de Romeu e Julieta':
            return RomeuJulietaIMG;
        case 'Coca-cola 2 litros':
            return CocaColaIMG;
        case 'Guaraná 2 litros':
            return GuaranaIMG;
        case 'Lata de refrigerante':
            return LataRefrigeranteIMG;
        case 'Lata de Suco':
            return LataSucoIMG;
        case 'Agua Mineral com gás':
            return AguaComGasIMG;
        case 'Água Mineral sem gás':
            return AguaSemGasIMG;
        default:
            break;
    }
}