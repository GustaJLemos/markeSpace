import { HStack, Text, useTheme } from "native-base";
import { Barcode, QrCode, Money, CreditCard, Bank } from 'phosphor-react-native';
import { PaymentOptionsEnum } from "../enums/PaymentOptionsEnum";

const DEFAULT_SIZE = 20;
let DEFAULT_COLOR = '';

type Props = {
  option: 'boleto' | 'pix' | 'dinheiro' | 'credito' | 'deposito'
}

export function PaymentOptions({ option }: Props) {
  const { colors } = useTheme();
  DEFAULT_COLOR = colors.gray[100];

  const renderOption = () => {
    switch (option) {
      case PaymentOptionsEnum.boleto:
        return (
          <>
            <Barcode size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
            <Text color='gray.200' fontSize='14' fontFamily='body' ml='2'>Boleto</Text>
          </>
        )
      case PaymentOptionsEnum.pix:
        return (
          <>
            <QrCode size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
            <Text color='gray.200' fontSize='14' fontFamily='body' ml='2'>Pix</Text>
          </>
        )
      case PaymentOptionsEnum.dinheiro:
        return (
          <>
            <Money size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
            <Text color='gray.200' fontSize='14' fontFamily='body' ml='2'>Dinheiro</Text>
          </>
        )
      case PaymentOptionsEnum.credito:
        return (
          <>
            <CreditCard size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
            <Text color='gray.200' fontSize='14' fontFamily='body' ml='2'>Cartão de crédito</Text>
          </>
        )
      case PaymentOptionsEnum.deposito:
        return (
          <>
            <Bank size={DEFAULT_SIZE} color={DEFAULT_COLOR} />
            <Text color='gray.200' fontSize='14' fontFamily='body' ml='2'>Depósito bancário</Text>
          </>
        )
      default:
        <></>
        break;
    }
  }

  return (
    <HStack alignItems='center'>
      {renderOption()}
    </HStack>
  );
}