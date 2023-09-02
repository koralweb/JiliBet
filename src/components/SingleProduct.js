import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import config from '../data/config';
import RadiusBlock from './RadiusBlock';
import ButtonBlock from './ButtonBlock';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import products from '../mobx/products';
import {observer} from 'mobx-react-lite';

const SingleProduct = ({navigation, singleProduct, setSingleProduct}) => {
  const renderContent = () => {
    const product = products.list.find(el => el.id === singleProduct.id);
    if (product.added) {
      return (
        <>
          <Image
            source={require('../assets/addedIcon.png')}
            style={styles.addedIcon}
          />
          <Text style={styles.addedTitle}>
            Товар успешно добавлен в корзину
          </Text>
        </>
      );
    }
    return (
      <>
        <Text style={styles.title}>{singleProduct.title}</Text>
        <Text style={styles.price}>
          {config.currency} {singleProduct.price}
        </Text>
        <View style={styles.descBlock}>
          <Text>{singleProduct.desc}</Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.cont}>
      <ImageBackground source={singleProduct.image} style={styles.imageBlock}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => setSingleProduct(null)}>
          <FontAwesomeIcon icon={'arrow-left'} color={'#fff'} />
        </TouchableOpacity>
        <RadiusBlock />
      </ImageBackground>
      {renderContent()}
      <ButtonBlock navigation={navigation} id={singleProduct.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: config.width,
    height: config.height,
    backgroundColor: '#fff',
    zIndex: 3,
  },
  imageBlock: {
    height: 350,
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '700',
  },
  price: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '700',
    color: 'green',
  },
  descBlock: {
    backgroundColor: '#ececec',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
  },
  backBtn: {
    backgroundColor: '#000',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 50,
  },
  addedIcon: {
    width: 150,
    height: 150,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  addedTitle: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default observer(SingleProduct);
