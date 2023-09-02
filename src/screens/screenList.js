import HomeScreen from './HomeScreen';
import ProductsScreen from './ProductsScreen';
import CartScreen from './CartScreen';
import BookingScreen from './BookingScreen';
import ThankYouScreen from './ThankYouScreen';
import BroadcastsScreen from './BroadcastsScreen';

const screenList = [
  {
    name: 'Home',
    component: HomeScreen,
    title: 'Главная',
  },
  {
    name: 'Shop',
    component: ProductsScreen,
    title: 'Магазин',
  },
  {
    name: 'Cart',
    component: CartScreen,
    title: 'Корзина',
  },
  {
    name: 'Booking',
    component: BookingScreen,
    title: 'Бронирование',
  },
  {
    name: 'ThankYou',
    component: ThankYouScreen,
    title: 'ThankYou',
  },
  {
    name: 'Broadcasts',
    component: BroadcastsScreen,
    title: 'Трансляции',
  },
];

export default screenList;
