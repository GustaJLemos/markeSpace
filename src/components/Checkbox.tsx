import { Text, Checkbox as NativeBaseCheckbox } from "native-base";

type Props = {
  title: string;
}

export function Checkbox({ title }: Props) {
  return (
    <NativeBaseCheckbox value={title} _checked={{ bg: 'blue.light', borderColor: 'blue.light' }} mb='1'>
      <Text
        color='gray.200'
        fontSize='16'
        fontFamily='body'
      >
        {title}
      </Text>
    </NativeBaseCheckbox>
  );
}