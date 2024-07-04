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
     const inventory =ref(-9);
     const onSale =ref(false);
         return {
    product,
    product1,
     image,
     link,
     inStock,
     inventory,
     onSale

     };
    }
    }).mount('#app');