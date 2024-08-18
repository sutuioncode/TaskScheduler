import { Pressable, Text, VStack } from "@gluestack-ui/themed"

export interface ITaskProps {
    name: string
    id: string
    onPress: () => void
}
export function Task(props: ITaskProps) {

    return <VStack>
        <Pressable onPress={props.onPress}>

            <Text>
                {props.name}
            </Text>
        </Pressable>
    </VStack>
}