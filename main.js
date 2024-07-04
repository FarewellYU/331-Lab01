const { createApp, ref } = Vue

createApp({
         setup() {
     const product = ref('Boots');
     const product1 = ref('socks');
     const image = ref('./assets/images/socks_green.jpg');
     const link = ref('http://www.camt.cmu.ac.th'); // Define the link URL here
     const inStock = ref(true);
     const inventory =ref(11);
     const onSale =ref(false);
     const details =ref([
        '50% cotton',
        '30% wool',
        '20% polyester'
     ])
     const variants = ref([
        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
      ]);
     const cart =ref(0)
     function addToCart(){
        cart.value +=1
     }

     function updateImage(variantImage){
        image.value = variantImage
     }
     function toggleInStock() {
        inStock.value = !inStock.value; // 切换 inStock 状态
      }
         return {
    product,
    product1,
     image,
     link,
     inStock,
     inventory,
     onSale,
     details,
     variants,
     cart,
     addToCart,
     updateImage,
     toggleInStock

     };
    }
    }).mount('#app');