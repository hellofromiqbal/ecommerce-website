import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', name: 'White Chair', price: 90, stock: 8, amountOnCart: 0, category: 'furnitures', imgUrl: '/img/furnitures/white-chair.jpg', texture: 'Wood', weight: '8kg', size: '60cm x 40cm' },
  { id: '2', name: 'Brown Drawer', price: 103, stock: 7, amountOnCart: 0, category: 'furnitures', imgUrl: '/img/furnitures/brown-drawer.jpg', texture: 'Wood', weight: '18kg', size: '50cm x 50cm' },
  { id: '3', name: 'Minimalist Shelf', price: 85, stock: 7, amountOnCart: 0, category: 'furnitures', imgUrl: '/img/furnitures/minimalist-shelf.jpg', texture: 'Wood', weight: '10kg', size: '60cm x 20cm' },
  { id: '4', name: 'Elegant Sofa', price: 189, stock: 8, amountOnCart: 0, category: 'furnitures', imgUrl: '/img/furnitures/elegant-sofa.jpg', texture: 'Seep Skin', weight: '20kg', size: '150cm x 60cm' },
  { id: '5', name: 'White Vase', price: 30, stock: 9, amountOnCart: 0, category: 'furnitures', imgUrl: '/img/furnitures/white-vase.jpg', texture: 'Ceramics', weight: '6kg', size: '45cm x 15cm' },
  { id: '6', name: 'Vintage Radio', price: 170, stock: 3, amountOnCart: 0, category: 'electronics', imgUrl: '/img/electronics/vintage-radio.jpg', texture: 'Stainless Steel', weight: '8kg', size: '50cm x 15cm' },
  { id: '7', name: 'Standing Microphone', price: 80, amountOnCart: 0, stock: 8, category: 'electronics', imgUrl: '/img/electronics/standing-microphone.jpg', texture: 'Stainless Steel', weight: '2kg', size: '8cm x 8cm' },
  { id: '8', name: 'Fancy Earphone', price: 40, stock: 5, amountOnCart: 0, category: 'electronics', imgUrl: '/img/electronics/fancy-earphone.jpg', texture: 'Plastic', weight: '1kg', size: '10cm x 10cm' },
  { id: '9', name: 'Black Monitor', price: 150, stock: 9, amountOnCart: 0, category: 'electronics', imgUrl: '/img/electronics/black-monitor.jpg', texture: 'Plastic', weight: '5kg', size: '30cm x 5cm' },
  { id: '10', name: 'Black Lamp', price: 40, stock: 4, amountOnCart: 0, category: 'lamps', imgUrl: '/img/lamps/black-lamp.jpg', texture: 'Plastic', weight: '4kg', size: '20cm x 20cm' },
  { id: '11', name: 'White Lamp', price: 35, stock: 7, amountOnCart: 0, category: 'lamps', imgUrl: '/img/lamps/white-lamp.jpg', texture: 'Plastic', weight: '4kg', size: '20cm x 20cm' }
];

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    decrementStock: {
      reducer: (state, action) => {
        state.map((product) => {
          if (product.id === action.payload.productId) {
            product.stock -= action.payload.amount;
          }
        });
      },
      prepare: (productId, amount) => {
        return {
          payload: { productId, amount }
        }
      }
    },
    addToCart: {
      reducer: (state, action) => {
        state.map((product) => {
          if (product.id === action.payload.productId) {
            if (product.amountOnCart += action.payload.amount > product.stock) {
              product.amountOnCart = product.stock;
            } else {
              product.amountOnCart += action.payload.amount;
            };
          };
        });
      },
      prepare: (productId, amount) => {
        return {
          payload: { productId, amount }
        }
      }
    }
  }
});

export const selectAllProducts = (state) => state.products;

export const { decrementStock, addToCart } = productsSlice.actions;

export default productsSlice.reducer;