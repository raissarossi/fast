import { Text, View, Pressable } from 'react-native';
import Inputt from "../../components/General/Input";
import VoltarBtn from "../../components/General/VoltarBtn";
import { useEffect, useState } from 'react';
import ValorBtn from '../../components/Acoes/ValorBtn';
import { TextInput } from 'react-native-web';

const TelaValor = () => {
    const [valor, setValor] = useState('')
    useEffect(() => {
        console.log(valor);
        if (valor.length > 0) {
            const formattedValor = valor.replace(/[^0-9]/g, "");
            const formattedValor2 = parseFloat(formattedValor)
            setValor(formattedValor2);
        }
        else if (valor.length == 0) {
            setValor('')
        }
    }, [valor])
    return (
        <View className='h-full'>
            <View className="flex flex-row bg-black items-center justify-between pt-10 pb-6">
                <View className='w-8 px-5 py-2 '>
                    <VoltarBtn />
                </View>
                <Text className="text-white text-lg">tipo</Text>
                <View className='w-8 px-5 py-2 '></View>
            </View>
            <Text className="text-2xl font-semibold mt-14 mb-5 px-10">How Much?</Text>
            <Inputt texto="$0,00" onChangeText={text => setValor(text)} value={valor} />
            <View className="flex justify-center items-center w-full py-5">
                <View className="flex flex-row w-4/5 justify-between">
                    <ValorBtn valor={1} onPress={() => setValor(valor + 1.00)} />
                    <ValorBtn valor={10} onPress={() => setValor(valor + 10.00)} />
                    <ValorBtn valor={50} onPress={() => setValor(valor + 50.00)} />
                    <ValorBtn valor={100} onPress={() => setValor(valor + 100.00)} />
                </View>
            </View>
            <Text className="text-2xl font-semibold mt-8 px-10">Description</Text>
            <View className="w-full flex justify-center items-center">
                <TextInput placeholder="Description" className='w-4/5 h-12 border-b-2 pl-2 placeholder:text-dark-grey1 placeholder:font-semibold placeholder:italic placeholder:text-xl '></TextInput>
            </View>
        </View>
    );
}

export default TelaValor;