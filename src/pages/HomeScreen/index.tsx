import * as React from 'react';
import { useRef } from 'react';
import { HeaderAnimated } from '../../components/headerAnimated/HeaderAnimated';

import {
  Animated,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    id: 1,
    title: 'TextField',
    description: 'Componente para entradas de dados.',
    routeName: 'PlayScreen',
  },
  {
    id: 2,
    title: 'HUMILDADE',
    description: 'Estamos sempre abertos e disponíveis para ouvir.',
    routeName: 'FeedbackPage',
  },
  {
    id: 3,
    title: 'DETERMINAÇÃO',
    description: 'Cumprimos com aquilo que nos comprometemos.',
    routeName: 'AvatarScreen',
  },
  {
    id: 4,
    title: 'DISPONIBILIDADE',
    description:
      'Amamos o que fazemos, priorizamos o que é essencial e dedicamos tempo a isso.',
    routeName: 'DetailScreen',
  },
  {
    id: 5,
    title: 'DISCIPLINA',
    description: 'Buscamos a excelência em tudo que fazemos.',
    routeName: 'DetailScreen',
  },
  {
    id: 6,
    title: 'SIMPLICIDADE',
    description: 'Evitamos soluções complicadas.',
    routeName: 'DetailScreen',
  },
  {
    id: 7,
    title: 'FRANQUEZA',
    description:
      'Somos diretos, verdadeiros e transparentes nas nossas relações, sempre com respeito.',
    routeName: 'DetailScreen',
  },
];

type TItem = {
  title: string;
  description: string;
  onPress: () => void;
  routeName?: string;
};

const Item = ({ title, description, onPress }: TItem) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#eee',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
});

export default function App({ navigation }: any) {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <>
      <HeaderAnimated
        animHeaderValue={scrollOffsetY}
        title="Home"
        // isAnimate={false}
      />
      <Button
        onPress={() => navigation.navigate('FeedbackPage')}
        title="clique aqui"
      />
      <FlatList
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
        style={styles.container}
        data={data}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            description={item.description}
            onPress={() => {
              navigation.navigate(item.routeName);
            }}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
}
