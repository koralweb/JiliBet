import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Wrapper from '../components/Wrapper';
import config from '../data/config';
import SingleProduct from '../components/SingleProduct';
import products from '../mobx/products';

const ProductsScreen = ({navigation}) => {
  const [singleProduct, setSingleProduct] = useState(null);

  const renderProducts = () => {
    return products.list.map(pr => (
      <TouchableOpacity key={pr.title} onPress={() => setSingleProduct(pr)}>
        <ImageBackground source={pr.image} style={styles.productBlock}>
          <Text style={styles.title}>{pr.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    ));
  };

  return (
    <Wrapper navigation={navigation}>
      {singleProduct && (
        <SingleProduct
          navigation={navigation}
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />
      )}
      <ScrollView>
        <View style={styles.scrollCont}>{renderProducts()}</View>
      </ScrollView>
    </Wrapper>
  );
};

const productSize = config.width / 2 - 20;

const styles = StyleSheet.create({
  scrollCont: {
    backgroundColor: '#ececec',
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingTop: 20,
    borderRadius: 30,
  },
  productBlock: {
    width: productSize,
    height: productSize,
    borderRadius: productSize / 2,
    overflow: 'hidden',
  },
  title: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 20,
    fontWeight: '700',
    paddingHorizontal: 20,
  },
});

export default ProductsScreen;
