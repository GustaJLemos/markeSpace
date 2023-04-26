import { VStack } from "native-base";
import { Header } from "../components/Header";

export function ProductDetails() {
  return (
    <VStack flex={1} bg='gray.700'>
      <Header
        title="Detalhes"
        goBack
      />
    </VStack>
  );
}