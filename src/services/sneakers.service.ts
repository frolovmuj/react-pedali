import axios from 'axios';


export const SneakersService = {
  async getAll() {
    try {
      const response = await axios.get(
        'https://644e76af4e86e9a4d8f969fb.mockapi.io/items'
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  async getOne(id: string | undefined){
    try {
      const response = await axios.get(
        `https://644e76af4e86e9a4d8f969fb.mockapi.io/items?id=${id}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
  // async getCart(){
  //   try {
  //     const response = await axios.get(
  //       `https://644e76af4e86e9a4d8f969fb.mockapi.io/cart`
  //     );
  //     return response.data;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },
  // async postItem(card: CardModel){
  //   try {
  //     axios.post('https://644e76af4e86e9a4d8f969fb.mockapi.io/cart', card)
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },  
  // async postItemToFavourites(card: CardModel){
  //   try {
  //     axios.post('https://644fe5e6b61a9f0c4d2e5341.mockapi.io/favourites', card)
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },  
  // async deleteCard(id: number) {
  //   try {
  //     const response = await axios.delete(
  //       `https://644e76af4e86e9a4d8f969fb.mockapi.io/cart/${id}`
  //     );
  //     return response.data;
  //   } catch (err) {
  //     console.error(err);
  //   }
  // },
};
