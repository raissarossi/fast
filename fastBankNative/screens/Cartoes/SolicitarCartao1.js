import { Pressable, View, Text } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import Step0 from "./Solicitacao/step0";
import Step1 from "./Solicitacao/step1";
import Step2 from "./Solicitacao/step2";
import Step3 from "./Solicitacao/step3";

const SolicitarCartao1 = ({ navigation }) => {
    const [page, setPage] = useState(0)
    const FormTitles = ['Request your new card right now...', 'Which card do you want?', 'Are you sure about this action?', 'Ready... in a few days, your card will be in your hand!'];

    const PageDisplay = () => {
        if (page === 0) {
            return <Step1 />
        }
        else if (page === 1) {
            return <Step1 />
        }
        else if (page === 2) {
            return <Step2 />
        }
        else if (page === 3) {
            return <Step3 />
        }
    }

    return (
        <View className="w-full h-full">
            <Navbar />
            <View className="w-full h-1/6">
                <Text className="text-2xl font-semibold mt-14 mb-5 px-10">{FormTitles[page]}</Text>
            </View>
            <View id='body' className="w-full h-3/6">
                {PageDisplay()}
            </View>
            <View className="w-full h-2/6 bottom-0 flex items-end">
                <Pressable className="w-2/6 h-12 m-5 rounded-2xl bg-black flex items-center justify-center" onPress={() => {
                    if (page == FormTitles.length - 1) {
                        navigation.navigate('Start')
                    }
                    else {
                        setPage((currPage) => currPage + 1)
                    }
                }}>
                    <Text className="text-white">
                    {page === FormTitles.length - 1 ? "EXIT" : "NEXT"}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default SolicitarCartao1;