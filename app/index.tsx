import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from "react-native";

export default function Index() {
  return (
     <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className="text-5xl font-medium text-blue-500">
        Welcome to Jiffy
      </Text>
      <Text>its a productivity app</Text>
    </SafeAreaView>
  );
}
