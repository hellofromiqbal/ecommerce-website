import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: '1', name: 'White Chair', price: 90, stock: 8, amountOnCart: 0, category: 'furnitures', imgUrl: '/img/furnitures/white-chair.webp', texture: 'Wood', weight: '8kg', size: '60cm x 40cm' },
  { id: '2', name: 'Brown Drawer', price: 103, stock: 7, amountOnCart: 0, category: 'furnitures', imgUrl: '/img/furnitures/brown-drawer.webp', texture: 'Wood', weight: '18kg', size: '50cm x 50cm' },
  { id: '3', name: 'Minimalist Shelf', price: 85, stock: 7, amountOnCart: 0, category: 'furnitures', imgUrl: '/img/furnitures/minimalist-shelf.webp', texture: 'Wood', weight: '10kg', size: '60cm x 20cm' },
  { id: '4', name: 'Elegant Sofa', price: 189, stock: 8, amountOnCart: 0, category: 'furnitures', imgUrl: '/img/furnitures/elegant-sofa.webp', texture: 'Seep Skin', weight: '20kg', size: '150cm x 60cm' },
  { id: '5', name: 'White Vase', price: 30, stock: 9, amountOnCart: 0, category: 'furnitures', imgUrl: '/img/furnitures/white-vase.webp', texture: 'Ceramics', weight: '6kg', size: '45cm x 15cm' },
  { id: '6', name: 'Vintage Radio', price: 170, stock: 3, amountOnCart: 0, category: 'electronics', imgUrl: '/img/electronics/vintage-radio.webp', texture: 'Stainless Steel', weight: '8kg', size: '50cm x 15cm' },
  { id: '7', name: 'Standing Microphone', price: 80, amountOnCart: 0, stock: 8, category: 'electronics', imgUrl: '/img/electronics/standing-microphone.webp', texture: 'Stainless Steel', weight: '2kg', size: '8cm x 8cm' },
  { id: '8', name: 'Fancy Earphone', price: 40, stock: 5, amountOnCart: 0, category: 'electronics', imgUrl: '/img/electronics/fancy-earphone.webp', texture: 'Plastic', weight: '1kg', size: '10cm x 10cm' },
  { id: '9', name: 'Black Monitor', price: 150, stock: 9, amountOnCart: 0, category: 'electronics', imgUrl: '/img/electronics/black-monitor.webp', texture: 'Plastic', weight: '5kg', size: '30cm x 5cm' },
  { id: '10', name: 'Black Lamp', price: 40, stock: 4, amountOnCart: 0, category: 'lamps', imgUrl: '/img/lamps/black-lamp.webp', texture: 'Plastic', weight: '4kg', size: '20cm x 20cm' },
  { id: '11', name: 'White Lamp', price: 35, stock: 7, amountOnCart: 0, category: 'lamps', imgUrl: '/img/lamps/white-lamp.webp', texture: 'Plastic', weight: '4kg', size: '20cm x 20cm' },
  { id: '12', name: 'Black Cap', price: 15, stock: 8, amountOnCart: 0, category: 'apparel', imgUrl: '/img/apparel/black-cap.webp', texture: 'Cotton', weight: '1kg', size: '15cm x 15cm' },
  { id: '13', name: 'Red Hoodie', price: 45, stock: 4, amountOnCart: 0, category: 'apparel', imgUrl: '/img/apparel/red-hoodie.webp', texture: 'Cotton', weight: '1kg', size: '80cm x 50cm' },
  { id: '14', name: 'Tote Bag', price: 37, stock: 7, amountOnCart: 0, category: 'apparel', imgUrl: '/img/apparel/tote-bag.webp', texture: 'Denim', weight: '1kg', size: '50cm x 15cm' },
  { id: '15', name: 'White Shoes', price: 38, stock: 2, amountOnCart: 0, category: 'apparel', imgUrl: '/img/apparel/white-shoes.webp', texture: 'Cotton', weight: '1kg', size: '45cm x 20cm' },
  { id: '16', name: 'Yellow Shirt', price: 62, stock: 5, amountOnCart: 0, category: 'apparel', imgUrl: '/img/apparel/yellow-shirt.webp', texture: 'Cotton', weight: '1kg', size: '80cm x 50cm' },
  { id: '17', name: 'Makeup Set', price: 50, stock: 8, amountOnCart: 0, category: 'beauty', imgUrl: '/img/beauty/makeup-set.webp', texture: 'Plastic', weight: '1kg', size: '10cm x 10cm' },
  { id: '18', name: 'Cosmetic Tube', price: 81, stock: 4, amountOnCart: 0, category: 'beauty', imgUrl: '/img/beauty/cosmetic-tube.webp', texture: 'Plastic', weight: '1kg', size: '10cm x 5cm' },
  { id: '19', name: 'Makeup Brush', price: 33, stock: 9, amountOnCart: 0, category: 'beauty', imgUrl: '/img/beauty/makeup-brush.webp', texture: 'Plastic', weight: '1kg', size: '12cm x 5cm' },
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
            if (product.amountOnCart + action.payload.amount > product.stock) {
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
    },
    incrementAmountOnCart: {
      reducer: (state, action) => {
        state.map((product) => {
          if (product.id === action.payload.productId) {
            product.amountOnCart += 1;
          };
        });
      },
      prepare: (productId, amount) => {
        return {
          payload: { productId, amount }
        }
      }
    },
    decrementAmountOnCart: {
      reducer: (state, action) => {
        state.map((product) => {
          if (product.id === action.payload.productId) {
            product.amountOnCart -= 1;
          };
        });
      },
      prepare: (productId, amount) => {
        return {
          payload: { productId, amount }
        };
      }
    },
    removeProductFromCart: {
      reducer: (state, action) => {
        state.map((product) => {
          if (product.id === action.payload) {
            product.amountOnCart = 0;
          };
        });
      }
    },
  }
});

export const selectAllProducts = (state) => state.products;

export const selectExistingCategories = (state) => ['all', ...new Set(state.products.map((product) => product.category))];

export const { decrementStock, addToCart, decrementAmountOnCart, incrementAmountOnCart, removeProductFromCart } = productsSlice.actions;

export default productsSlice.reducer;