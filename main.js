// const [createApp, ref] = Vue

// createApp({
//     setup(){
//         const product = ref('Boots')
//         const product1 = ref('socks')
//         const image = ref('./assets/images/socks_green.jpg')
//         return{
//             product,
//             product1,
//             image
//         }
//     }
// }).mount('#app')


// const [ create, refe ] = Vue

// create({
//     setup(){
//         const product = refe('Socks')
//         return{
//             product
//         }
//     }
// }).mount('#app')

const { createApp, ref } = Vue

createApp({
         setup() {
     const product = ref('Boots');
     const product1 = ref('socks');
     const image = ref('./assets/images/socks_green.jpg');
     const link = ref('http://www.camt.cmu.ac.th'); // Define the link URL here
     const inStock = ref(false);
     const inventory =ref(100);
     const onSale =ref(false);
     const details =ref([
        '50% cotton',
        '30% wool',
        '20% polyester'
     ])
     const variants = ref([
        { id: 2234, color: 'green' },
        { id: 2235, color: 'blue' }
      ]);
  
         return {
    product,
    product1,
     image,
     link,
     inStock,
     inventory,
     onSale,
     details,
     variants

     };
    }
    }).mount('#app');