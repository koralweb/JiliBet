import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import config from '../data/config';
import products from '../mobx/products';
import Counter from '../components/Counter';
import {observer} from 'mobx-react-lite';
import CartOrderPopup from '../components/CartOrderPopup';

const CartScreen = ({navigation}) => {
  const [done, setDone] = useState(false);
  const renderProducts = () => {
    return products.list
      .filter(el => el.added)
      .map(product => (
        <View style={styles.productBlock} key={product.title}>
          <Image source={product.image} style={styles.productImage} />
          <View style={{flexGrow: 1}}>
            <View style={styles.counterBlock}>
              <Counter product={product} />
              <TouchableOpacity
                style={styles.delete}
                onPress={() => products.removeProduct(product.id)}>
                <Text style={{color: '#fff'}}>DELETE</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.price}>
              {config.currency} {product.price}
            </Text>
            <Text style={styles.desc}>{product.desc}</Text>
          </View>
        </View>
      ));
  };

  return (
    <Wrapper navigation={navigation}>
      <View style={styles.cont}>
        <Text style={styles.mainTitle}>Корзина</Text>
        <ScrollView>
          {renderProducts()}
          {products.list.some(el => el.added) && (
            <TouchableOpacity style={styles.btn} onPress={() => setDone(true)}>
              <Text>Заказать</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
      {done && <CartOrderPopup setDone={setDone} />}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  ...config.styles,
  cont: {
    flex: 1,
  },
  productImage: {
    width: 150,
    height: 150,
  },
  productBlock: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  counterBlock: {
    flexDirection: 'row',
  },
  delete: {
    backgroundColor: '#760505',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 20,
    marginLeft: 20,
    flexGrow: 1,
  },
  desc: {
    width: config.width - 200,
    fontSize: 12,
  },
  price: {
    color: 'green',
    fontWeight: '700',
    marginTop: 10,
  },
  btn: {
    backgroundColor: '#F79E1B',
    flexGrow: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
});

export default observer(CartScreen);
