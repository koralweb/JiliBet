import {Dimensions} from 'react-native';

const config = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  currency: '₴',
  styles: {
    mainTitle: {
      fontSize: 22,
      fontWeight: '700',
      textAlign: 'center',
    },
  },
};

export default config;
